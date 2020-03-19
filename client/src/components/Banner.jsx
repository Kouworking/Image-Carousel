import React from 'react';
import PropTypes from 'prop-types';
import LightBox from './Modal.jsx';
import $ from 'jquery';
import styled, { css } from 'styled-components';

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div onClick={e => {
        this.props.showModal();
      }}>
        <img src={this.props.mainPhoto} onClick={this.toggleLightBox} />
      </div>
    );
  }
}



Banner.propTypes = {
  photo_url: PropTypes.string
}

export default Banner;