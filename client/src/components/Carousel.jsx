import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Hello from Carousel!
      <img src="https://carousel-imgs.s3-us-west-1.amazonaws.com/26" />
      </div>
    )
  }
}


export default Carousel;