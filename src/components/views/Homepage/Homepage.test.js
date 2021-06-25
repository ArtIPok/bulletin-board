import React from 'react';
import { shallow } from 'enzyme';
import { HomepageComponent } from './Homepage';

describe('Component Homepage', () => {
  it('should render wiyhout crashing', () => {
    const component = shallow(<HomepageComponent />);
    expect(component).toBeTruthy();
  });
});
