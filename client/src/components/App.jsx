import React from 'react';
import $ from 'jquery';
import styled, { css } from 'styled-components';
import Banner from './Banner.jsx';
import Modal from './Modal.jsx';

const Container = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  background: papayawhip;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      show: false
    }
    this.getPhotos = this.getPhotos.bind(this);
    this.showModal = this.showModal.bind(this);

  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    $.ajax({
      url: '/api/photos',
      method: 'GET',
      success: data => {
        this.setState({ photos: data });
      },
      error: err => console.log(err)
    })
  }

  showModal(e) {
    this.setState({ show: !this.state.show });
  };

  render() {
    if (this.state.photos.length === 0) {
      return <div>Empty State</div>
    } else {
      return (
        <Container>
          <Banner
            showModal={this.showModal}
            mainPhoto={this.state.photos[0].photo_url}
          />
          <Modal
            photos={this.state.photos}
            onClose={this.showModal}
            show={this.state.show}>
            Place photos here!
          </Modal>
        </Container>
      )
    }
  }
}


export default App;