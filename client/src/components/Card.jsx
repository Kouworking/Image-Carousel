import React from 'react';
import styled, { css } from 'styled-components';

const ActiveCard = styled.div`
  padding: 0px;
  margin: 0px;
  width: 200px;
  height: 150px;
  border: 2px solid white;
`;

const HiddenCard = styled.div`
  padding: 0px;
  margin: 0px;
  width: 200px;
  height: 150px;
  opacity: .2;
`;

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const cardClicked = this.props.i;
    this.props.clickPhoto(cardClicked);
  }

  render() {
    const { photo, i, mainCard } = this.props;
    const renderPhoto = photo.photo_url;
    if (mainCard === i) {
      return (
        <ActiveCard className="active-card" onClick={this.handleClick}>
          <img src={renderPhoto}
            width="200" />
        </ActiveCard>
      )
    }

    return (
      <HiddenCard className="card" onClick={this.handleClick}>
        <img src={renderPhoto}
          width="200" />
      </HiddenCard>
    )
  }
}

export default Card;