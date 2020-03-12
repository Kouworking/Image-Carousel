import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Hello from Carousel!</div>
    )
  }
}

// class Carousel extends React.Component {
//   state = {
//     isChecked: false,
//   };

//   onChange = () => {
//     this.setState({ isChecked: !this.state.isChecked });
//   };

//   render() {
//     return (
//       <label>
//         <input
//           type="checkbox"
//           checked={this.state.isChecked}
//           onChange={this.onChange}
//         />
//         {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
//       </label>
//     );
//   }
// }


export default Carousel;