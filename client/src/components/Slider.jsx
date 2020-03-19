import React from 'react';
import styled, { css } from 'styled-components';

const Card = styled.div`
  flex: 20%;
  padding: 5px;
`;

class Slider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const samplePhoto = this.props.photo.photo_url;
    return (
      <Card>
        <img src={samplePhoto} />
      </Card>
    )
  }
}

export default Slider;