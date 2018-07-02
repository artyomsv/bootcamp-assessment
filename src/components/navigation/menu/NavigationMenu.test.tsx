import * as React from 'react';
import {createShallow} from '@material-ui/core/test-utils';
import {createMount} from '@material-ui/core/test-utils';
import NavigationMenu from './NavigationMenu.widget';
import MenuItem from '@material-ui/core/MenuItem';

const shallow = createShallow();
const mount = createMount();

describe('renders without crashing', () => {
  test('if renders', () => {
    const mockFn = jest.fn();
    const result = shallow(<NavigationMenu navigateTo={mockFn} selectedPage={'home'}/>);
    expect(result).toMatchSnapshot();
  });
});

describe('Test Navigation', () => {
  test('if renders', () => {
    const mockFn = jest.fn();
    const wrap = mount(<NavigationMenu navigateTo={mockFn} selectedPage={'home'}/>);
    expect(wrap.find(MenuItem).length).toBe(3);
  });
});
