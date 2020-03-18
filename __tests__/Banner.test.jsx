import React from 'react';
import Enzyme, { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import Banner from '../client/src/components/Banner';


describe('Banner Tests', () => {
  test('snapshot test for tree elements', () => {
    const wrapper = shallow(<Banner />);
    // expect(wrapper).toExist();

    console.log('shallow Banner HTML', wrapper.debug());
  });

  // test('should render an image element', () => {
  // const wrapper = mount(<Banner />);
  // expect(wrapper.contains(<img src={props.mainPhoto} />)).to.equal(true);
  // expect(wrapper.find("img").prop("src")).toBe(true);
  // expect(wrapper.find({ prop: 'src' })).to.have.length(1);
  // });
});