import React from 'react';
import styled, { css } from 'styled-components';
import AllCards from './AllCards.jsx';
import { ArrowIosBack, ArrowIosForward } from '@styled-icons/evaicons-solid';
import { CloseCircleOutline } from '@styled-icons/evaicons-outline';

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
  bottom: 0%;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
`;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  z-index: 4;
  align-items: center;
  justify-content: center;
  margin-bottom: 1%;
`;

const ArrowPrev = styled(ArrowIosBack)`
  color: white;
  width: 5%;
  position: absolute;
  left: 30px;
  top: 40%;
  z-index: 10;
  &:hover {
    cursor:pointer
  }
`;

const ArrowNext = styled(ArrowIosForward)`
  color: white;
  width: 5%;
  position: absolute;
  right: 30px;
  top: 40%;
  z-index: 10;
  &:hover {
    cursor:pointer
  }
`;

const OuterCardWrapper = styled.div`
  position: relative;
  margin-top: 2%;
  margin-bottom: 1%;
  z-index: 1;
`;

const InnerCardWrapper = styled.div`
  position: relative;
  width: 50%;
  left: 25%;
  right: 25%;
`;

const ExitButton = styled(CloseCircleOutline)`
  color: black;
  //z-index: 3;
  height: 40px;
  width: 40px;
  position: absolute;
  right: -20px;
  top: -19px;
  &:hover {
    cursor: pointer
  }
`;

const ActiveCard = styled.img`
  z-index: 2;
  width: 100%;
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
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  handleKeyPress(e) {
    if (e.keyCode === 39) { this.nextPhoto(e); }
    if (e.keyCode === 37) { this.previousPhoto(e); }
    if (e.keyCode === 27) { this.closeModal(e); }
  }

  closeModal(e) {
    this.props.onClose && this.props.onClose(e);
  }

  previousPhoto(e) {
    e.preventDefault();
    const mainCard = this.props.photos[this.state.mainCard].photo_url;
    if (this.state.mainCard === 0) {
      this.setState({ mainCard: this.props.photos.length - 1 });
    } else {
      this.setState(prevState => {
        return { mainCard: prevState.mainCard - 1 }
      });
    }
  };

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

  clickPhoto(cardNum) {
    this.setState({ mainCard: cardNum });
  }

  render() {
    const { photos } = this.props;
    const mainCard = photos[this.state.mainCard].photo_url;
    if (!this.props.show) {
      return null;
    }
    return (
      <Darken >
        <InnerBox className="inner-box">
          <OuterCardWrapper className="outer-card-wrapper">
            <ArrowPrev onClick={this.previousPhoto} />
            <ArrowNext onClick={this.nextPhoto} />
            <InnerCardWrapper className="inner-card-wrapper">
              <ExitButton size='6' onClick={e => { this.closeModal(e); }} />
              <ActiveCard src={mainCard} />
            </InnerCardWrapper>
          </OuterCardWrapper>
          <Wrapper className="slider-wrapper">
            <AllCards photos={photos} mainCard={this.state.mainCard} clickPhoto={this.clickPhoto} />
          </Wrapper>
        </InnerBox>
      </Darken>
    )
  }
}

export default Modal;