import React from 'react';
import { shallow } from 'enzyme';
import { PostAddComponent } from './PostAdd';

describe('Component PostAdd', () => {
  it('should render wiyhout crashing', () => {
    const component = shallow(<PostAddComponent />);
    expect(component).toBeTruthy();
  });
});
