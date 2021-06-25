import React from 'react';
import { shallow } from 'enzyme';
import { {{pascalCase name}}Component } from './{{pascalCase name}}';

describe('Component {{pascalCase name}}', () => {
  it('should render wiyhout crashing', () => {
    const component = shallow(<{{pascalCase name}}Component />);
    expect(component).toBeTruthy();
  });
});
