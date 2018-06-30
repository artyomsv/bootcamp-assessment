import * as React from 'react';
import {createShallow} from '@material-ui/core/test-utils';
import NavigationMenuItem from './NavigationMenuItem.widget';

const shallow = createShallow();

describe('renders without crashing', () => {
  test('if renders', () => {
    const mockFn = jest.fn();
    const result = shallow(<NavigationMenuItem navigateTo={mockFn} title={'Title'} icon={'Icon'}/>);
    expect(result).toMatchSnapshot();
  });
});
