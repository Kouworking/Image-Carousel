import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import styled, { css } from 'styled-components';

// class Banner extends React.Component {
//   constructor(props) {
//     super(props);

//   }

//   render() {
//     return (
//       <div>
//         <img src={this.props.mainPhoto} />
//         Bruce Banner
//       </div>
//     );
//   }
// }

const Banner = props => {
  return (
    <div>
      <img src={props.bannerPhoto.photo_url} />
      Bruce Banner
      </div>
  );
}

Banner.propTypes = {
  photo_url: PropTypes.string
}

export default Banner;