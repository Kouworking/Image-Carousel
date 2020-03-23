import React from 'react';
import PropTypes from 'prop-types';
import { ArrowIosBack, ArrowIosForward } from '@styled-icons/evaicons-solid';
import styled, { css } from 'styled-components';

const ActiveBanner = styled.img`
  z-index: 2;
  width: 100%;
`;

const ArrowPrev = styled(ArrowIosBack)`
  color: white;
  width: 5%;
  position: absolute;
  opacity: 70%;
  padding-top: 20px;
  padding-right: 15px;
  padding-bottom: 20px;
  padding-left: 10px;
  vertical-align: middle;
  top: 38%;
  background-color: rgba(255,255,255,.3);
`;

const ArrowNext = styled(ArrowIosForward)`
  color: white;
  width: 5%;
  position: absolute;
  opacity: 70%;
  padding-top: 20px;
  padding-right: 15px;
  padding-bottom: 20px;
  padding-left: 10px;
  vertical-align: middle;
  top: 38%;
  right:0;
  background-color: rgba(255,255,255,.3);
`;

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { showModal, mainPhoto } = this.props;
    return (
      <div>
        <ArrowPrev onClick={showModal} />
        <ArrowNext onClick={showModal} />
        <ActiveBanner onClick={showModal} src={mainPhoto}>
        </ActiveBanner>
      </div>
    );
  }
}


export default Banner;