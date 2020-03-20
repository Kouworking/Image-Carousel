import React from 'react';
import styled, { css } from 'styled-components';

const ActiveCard = styled.div`
  padding: 0px;
  margin: 0px;
  width: 200px;
  height: 150px;
  border: 5px solid blue;
  z-index: 3;
`;

const HiddenCard = styled.div`
  padding: 0px;
  margin: 0px;
  width: 200px;
  height: 150px;
  opacity: .2;
  z-index: 3;
`;

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { photo, i, mainCard } = this.props;
    const renderPhoto = photo.photo_url;
    if (mainCard === i) {
      return (
        <ActiveCard className="active-card">
          <img src={renderPhoto}
            width="200" />
        </ActiveCard>
      )
    }

    return (
      <HiddenCard className="card">
        <img src={renderPhoto}
          width="200" />
      </HiddenCard>
    )
  }
}

export default Card;