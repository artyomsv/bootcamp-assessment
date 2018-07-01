import * as React from 'react';
import {createShallow} from '@material-ui/core/test-utils';
import ActorsView from './Actors.view';

const shallow = createShallow();

describe('renders without crashing', () => {
  test('if renders', () => {
    const mockFn = jest.fn();
    const result = shallow(
      <ActorsView
        actors={[]}
        isFetching={false}
        fetchActors={mockFn}
        toggleView={mockFn}
        view={'grid'}
      />
    );

    expect(result).toMatchSnapshot();
  });
});
