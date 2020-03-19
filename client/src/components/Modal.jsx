import React from 'react';
import styled, { css } from 'styled-components';

const Darken = styled.div`
  position: fixed;
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
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background: white;
`;

const Box = styled.div`
width: 500px;
  background: white;
  border: 1px solid #ccc;
  transition: 1.1s ease-out;
  box-shadow: 
    -2rem 2rem 2rem rgba(black, 0.2);
  filter: blur(0);
  transform: scale(1);  
  opacity: 1;
  visibility: visible;
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
    if (!this.props.show) {
      return null;
    }
    return (
      <Darken>
        <InnerBox>
          <div>{this.props.children}</div>
          <div>
            <button onClick={e => {
              this.closeModal(e);
            }}>
              Close Modal
          </button>
          </div>
        </InnerBox>
      </Darken>
    )
  }
}

export default Modal;