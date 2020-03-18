import React from 'react';
import PropTypes from 'prop-types';
import LightBox from './LightBox.jsx';
import $ from 'jquery';
import styled, { css } from 'styled-components';

class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLightBox: false
    }
    this.toggleLightBox = this.toggleLightBox.bind(this);
  }

  toggleLightBox() {
    this.setState({
      showLightBox: !this.state.showLightBox
    });
  }

  render() {
    // const showLB = this.state.showLightBox;
    // let lightbox;
    // if (showLB) {
    //   lightbox = <LightBox text='Hello' />
    // } else 

    return (
      <div>
        <img src={this.props.mainPhoto} onClick={this.toggleLightBox} />
        {/* {lightbox} */}
      </div>
    );
  }
}



Banner.propTypes = {
  photo_url: PropTypes.string
}

export default Banner;