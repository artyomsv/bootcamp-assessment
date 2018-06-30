import * as React from 'react';
import {createShallow} from '@material-ui/core/test-utils';
import {createMount} from '@material-ui/core/test-utils';
import Header from './Header.widget';
import IconButton from '@material-ui/core/IconButton';

const shallow = createShallow();
const mount = createMount();

describe('renders without crashing', () => {
  test('if renders', () => {
    const mockFn = jest.fn();
    const result = shallow(<Header onMenuClick={mockFn}/>);
    expect(result).toMatchSnapshot();
  });
});


describe('Test Header', () => {
  test('if renders', () => {
    const mockFn = jest.fn();
    const wrap = mount(<Header onMenuClick={mockFn}/>);
    expect(wrap.find(IconButton).length).toBe(1);

    wrap.find(IconButton).simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});