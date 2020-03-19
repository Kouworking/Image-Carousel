import React from 'react';
import styled, { css } from 'styled-components';
import Slider from './Slider.jsx';

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
  position: absolute;
  display: in-line flex;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 25%;
  margin: auto;
  background: white;
`;

const Wrapper = styled.div`
  display: flex;
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    this.props.onClose && this.props.onClose(e);
  }


  render() {
    const { photos } = this.props;
    if (!this.props.show) {
      return null;
    }
    return (
      <Darken>
        <InnerBox>
          <button onClick={e => { this.closeModal(e); }}>
            Exit Gallery
          </button>
          <div>{this.props.children}</div>
          <Wrapper>
            {photos.map((photo, index) =>
              <Slider photo={photo} key={index} />)}
          </Wrapper>
        </InnerBox>
      </Darken>
    )
  }
}

export default Modal;