import * as React from 'react';
import {createShallow} from '@material-ui/core/test-utils';
import ActorsList from './ActorsList.widget';

const shallow = createShallow();

describe('renders without crashing', () => {
  test('if renders', () => {
    const mockFn = jest.fn();
    const result = shallow(
      <ActorsList
        actors={[]}
        expanded={-1}
        expand={mockFn}
        navigateToActor={mockFn}
        navigateToMovie={mockFn}
      />
    );
    expect(result).toMatchSnapshot();
  });
});
