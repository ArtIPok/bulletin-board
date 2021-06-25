import React from 'react';
import { shallow } from 'enzyme';
import { PostEditComponent } from './PostEdit';

describe('Component PostEdit', () => {
  it('should render wiyhout crashing', () => {
    const component = shallow(<PostEditComponent />);
    expect(component).toBeTruthy();
  });
});
