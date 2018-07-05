import * as React from 'react';
import {createShallow} from '@material-ui/core/test-utils';
import MovieDetailsView from './MovieDetails.view';

const shallow = createShallow();

describe('renders without crashing', () => {
  test('if renders', () => {
    const mockFn = jest.fn();
    const result = shallow(
      <MovieDetailsView
        isFetching={false}
        fetchMovieDetails={mockFn}
        clearState={mockFn}
        details={{} as any}
        navigateToActor={mockFn}
        goBack={mockFn}
      />
    );

    expect(result).toMatchSnapshot();
  });
});
