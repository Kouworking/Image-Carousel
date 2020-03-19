import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App';
import Banner from '../client/src/components/Banner';

Enzyme.configure({ adapter: new Adapter() });

describe('App Tests', () => {
  test('should render the App component on the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });

  test('should render the Banner component on the screen', () => {
    const wrapper = shallow(<Banner />);
    expect(wrapper).toExist();
  });

  test('should handle state changes', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.state().show).toEqual(false);
    wrapper.setState({ show: true })
    expect(wrapper.state().show).toEqual(true);

    // below won't simulate click because of empty state
    // TODO: mock a get request and render functions
    // const popupButton = wrapper.find('button')
    // popupButton.simulate('click');
    // console.log('shallow App HTML', wrapper.debug());
  });

});