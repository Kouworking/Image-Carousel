import React from 'react';
import styled, { css } from 'styled-components';
import AllCards from './AllCards.jsx';

const Darken = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
`;

const InnerBox = styled.div`
  display: in-line flex;
  position: fixed;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 25%;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainCard: 0
    }

    this.closeModal = this.closeModal.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
    this.previousPhoto = this.previousPhoto.bind(this);
    this.clickPhoto = this.clickPhoto.bind(this);
  }

  closeModal(e) {
    this.props.onClose && this.props.onClose(e);
  }

  nextPhoto(e) {
    e.preventDefault();
    if (this.props.photos.length - 1 === this.state.mainCard) {
      this.setState({ mainCard: 0 });
    } else {
      this.setState(prevState => {
        return { mainCard: prevState.mainCard + 1 }
      });
    }
  };

  previousPhoto(e) {
    e.preventDefault();
    if (this.state.mainCard === 0) {
      const galleryLength = this.props.photos.length;
      this.setState({ mainCard: galleryLength });
    }

    this.setState(prevState => {
      return { mainCard: prevState.mainCard - 1 }
    });
  };

  clickPhoto(cardNum) {
    console.log('Photo Clicked!');
    this.setState({
      mainCard: cardNum
    })
  }


  render() {
    const { photos } = this.props;
    const mainCard = photos[this.state.mainCard].photo_url;
    if (!this.props.show) {
      return null;
    }
    return (
      <Darken>
        <InnerBox className="inner-box">
          <button onClick={e => { this.closeModal(e); }}>
            Exit Gallery
          </button>
          <div>
            <button onClick={this.previousPhoto}>Previous</button>
            <button onClick={this.nextPhoto}>Next</button>
          </div>
          <div>{this.props.children}</div>
          <div>
            <img src={mainCard} />
          </div>
          <Wrapper className="slider-wrapper">
            <AllCards photos={photos} mainCard={this.state.mainCard} clickPhoto={this.clickPhoto} />
          </Wrapper>
        </InnerBox>
      </Darken>
    )
  }
}

export default Modal;