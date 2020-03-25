import React from 'react';
import $ from 'jquery';
import styled, { css } from 'styled-components';
import { ArrowIosBack, ArrowIosForward } from '@styled-icons/evaicons-solid';
import Banner from './Banner.jsx';
import Modal from './Modal.jsx';

const Container = styled.div`
  align-items: center;
   justify-content: center;
  // flex-direction: column;
  // width: auto;
  // align: center;
`;

const ArrowPrev = styled(ArrowIosBack)`
  color: white;
  width: 10%;
  position: absolute;
  opacity: 70%;
  left: 1px;
  top: 43%;
  &:hover{
    cursor:pointer;
    opacity: 40%
  }
`;

const ArrowNext = styled(ArrowIosForward)`
  color: white;
  width: 10%;
  position: absolute;
  opacity: 70%;
  right: 1px;
  top: 43%;
  &:hover{
    cursor:pointer;
    opacity: 40%
  }
`;

const InnerBannerWrapper = styled.div`
  position: relative;
  width: 640px;
  margin-left: auto;
  margin-right: auto;
  
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
      url: 'http://localhost:3001/api/photos',
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
            <InnerBannerWrapper>
              <ArrowPrev onClick={this.showModal} />
              <ArrowNext onClick={this.showModal} />
              <Banner
                showModal={this.showModal}
                mainPhoto={this.state.photos[0].photo_url}
              />
            </InnerBannerWrapper>
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