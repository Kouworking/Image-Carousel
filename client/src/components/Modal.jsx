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

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Modal!</div>
    )
  }
}

export default Modal;