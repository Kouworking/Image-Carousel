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
        {/* {this.state.showLightBox ? console.log('toggle') : console.log('like nothing happened')}} */}
      </div>
    );

    // return (
    //   <div>
    //     <h1>hihi</h1>
    //     <button onClick={this.toggleLightBox}>show popup</button>
    //   </div>
    // )
  }
}



Banner.propTypes = {
  photo_url: PropTypes.string
}

export default Banner;