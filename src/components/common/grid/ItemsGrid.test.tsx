import * as React from 'react';
import {createShallow} from '@material-ui/core/test-utils';
import ItemsGrid from './ItemsGrid.widget';

const shallow = createShallow();

describe('renders without crashing', () => {
  test('if renders', () => {
    const mockFn = jest.fn();
    const result = shallow(<ItemsGrid values={[]} navigateTo={mockFn}/>);
    expect(result).toMatchSnapshot();
  });
});
