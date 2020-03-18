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

const innerBox = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background: white;
`;

class LightBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <Darken>
      <innerBox>
        <h1>{this.props.text}</h1>
      </innerBox>
    </Darken>
  }

}

export default LightBox;