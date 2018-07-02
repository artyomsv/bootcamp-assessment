import * as React from 'react';
import {createShallow} from '@material-ui/core/test-utils';
import HomeView from './Home.view';

const shallow = createShallow();

describe('renders without crashing', () => {
  test('if renders', () => {
    const mockFn = jest.fn();
    const result = shallow(
      <HomeView
        navigateToMovies={mockFn}
        navigateToActors={mockFn}
      />
    );

    expect(result).toMatchSnapshot();
  });
});
