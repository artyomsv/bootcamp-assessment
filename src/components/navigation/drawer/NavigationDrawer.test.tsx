import * as React from 'react';
import {createShallow} from '@material-ui/core/test-utils';
import NavigationDrawer from './NavigationDrawer.widget';

const shallow = createShallow();

describe('renders without crashing', () => {
  test('if renders', () => {
    const result = shallow(<NavigationDrawer/>);
    expect(result).toMatchSnapshot();
  });
});