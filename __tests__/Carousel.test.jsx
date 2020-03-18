import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Carousel from '../client/src/components/Carousel';

describe('Carousel Tests', () => {
  test('should render the app component on the screen', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper).toExist();
  });
});