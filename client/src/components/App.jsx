import React from 'react';
import $ from 'jquery';
import styled, { css } from 'styled-components';
import Banner from './Banner.jsx';

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
      photos: []
    }
    this.getPhotos = this.getPhotos.bind(this);
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

  render() {
    if (this.state.photos.length === 0) {
      return <div>Empty State</div>
    } else {
      return (
        <Container>
          <Banner mainPhoto={this.state.photos[0].photo_url} photos={this.state.photos} />
        </Container>
      )
    }
  }
}


export default App;