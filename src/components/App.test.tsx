import * as React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('renders without crashing', () => {
  test('if renders', () => {
    const result = shallow(<App/>);
    expect(result).toMatchSnapshot();
  });
});
