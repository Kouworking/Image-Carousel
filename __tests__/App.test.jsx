import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App';
import Banner from '../client/src/components/Banner';


describe('App Tests', () => {
  test('should render the App component on the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });

  // test('should render the Banner component on the screen', () => {
  //   const wrapper = shallow(<Banner />);
  //   expect(wrapper).toExist();
  // });
});