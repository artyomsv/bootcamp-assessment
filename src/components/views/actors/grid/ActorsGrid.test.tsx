import * as React from 'react';
import {createShallow} from '@material-ui/core/test-utils';
import ActorsGrid from './ActorsGrid.widget';

const shallow = createShallow();

describe('renders without crashing', () => {
  test('if renders', () => {
    const mockFn = jest.fn();
    const result = shallow(<ActorsGrid actors={[]} navigateToActor={mockFn}/>);
    expect(result).toMatchSnapshot();
  });
});
