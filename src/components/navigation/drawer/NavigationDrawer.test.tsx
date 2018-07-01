import * as React from 'react';
import {createShallow} from '@material-ui/core/test-utils';
import NavigationDrawer from './NavigationDrawer.widget';

const shallow = createShallow();

describe('renders without crashing', () => {
  test('if renders', () => {
    const mockFn = jest.fn();
    const result = shallow(<NavigationDrawer checked={true} navigateTo={mockFn}/>);
    expect(result).toMatchSnapshot();
  });
});
