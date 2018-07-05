import * as React from 'react';
import {createShallow} from '@material-ui/core/test-utils';
import MoviesView from './Movies.view';

const shallow = createShallow();

describe('renders without crashing', () => {
  test('if renders', () => {
    const mockFn = jest.fn();
    const result = shallow(
      <MoviesView
        movies={[]}
        isFetching={false}
        fetchMovies={mockFn}
        navigateToMovie={mockFn}
        page={{page: 1, totalPages: 10, totalResults: 200}}
        search={''}
        onQueryChange={mockFn}
      />
    );

    expect(result).toMatchSnapshot();
  });
});
