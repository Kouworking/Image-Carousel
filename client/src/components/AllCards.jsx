import React from 'react';
import styled, { css } from 'styled-components';
import Card from './Card.jsx';

const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

class AllCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { photos, mainCard, clickPhoto } = this.props;
    return (
      <Gallery className="all-cards-wrapper">
        {photos.map((photo, index) =>
          <Card photo={photo} key={index} i={index} mainCard={mainCard} clickPhoto={clickPhoto} />)}
      </Gallery>
    );
  }
}

export default AllCards;