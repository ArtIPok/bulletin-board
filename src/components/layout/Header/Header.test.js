import React from 'react';
import { shallow } from 'enzyme';
import { HeaderComponent } from './Header';

describe('Component Header', () => {
  it('should render wiyhout crashing', () => {
    const component = shallow(<HeaderComponent />);
    expect(component).toBeTruthy();
  });
});
