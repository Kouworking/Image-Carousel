import React from 'react';
import styled, { css } from 'styled-components';

const Card = styled.div`
  padding: 0px;
`;

class Slider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const samplePhoto = this.props.photo.photo_url;
    return (
      <Card className="card">
        <img src={samplePhoto}
          width="200" />
      </Card>
    )
  }
}

export default Slider;