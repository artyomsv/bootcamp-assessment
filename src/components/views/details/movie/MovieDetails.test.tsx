import * as React from 'react';
import {createShallow} from '@material-ui/core/test-utils';
import MovieDetailsView from './MovieDetails.view';

const shallow = createShallow();

describe('renders without crashing', () => {
  test('if renders', () => {
    const mockFn = jest.fn();
    const result = shallow(
      <MovieDetailsView
        isMovieFetching={false}
        isActorsFetching={false}
        fetchMovieDetails={mockFn}
        fetchMovieActors={mockFn}
        clearState={mockFn}
        details={{} as any}
        actors={[]}
        navigateToActor={mockFn}
        navigateToMovie={mockFn}
        goBack={mockFn}
      />
    );

    expect(result).toMatchSnapshot();
  });
});
