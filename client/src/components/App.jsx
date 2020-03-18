import React from 'react';
import $ from 'jquery';

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
        console.log(this.state.photos[0].photo_url);
      },
      // success: data => console.log(data),
      error: err => console.log(err)
    })
  }

  render() {
    // const onePhoto = this.state.photos[0].photo_url;
    if (this.state.photos.length === 0) {
      return <div>Empty State</div>
    } else {
      return (
        <div>Hello from App
      <img src={this.state.photos[0].photo_url} />
        </div>
      )
    }
  }
}


export default App;