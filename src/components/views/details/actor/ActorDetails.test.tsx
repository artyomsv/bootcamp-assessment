import * as React from 'react';
import {createShallow} from '@material-ui/core/test-utils';
import ActorDetailsView from './ActorDetails.view';

const shallow = createShallow();

describe('renders without crashing', () => {
  test('if renders', () => {
    const mockFn = jest.fn();
    const result = shallow(
      <ActorDetailsView
        isFetching={false}
        fetchActorDetails={mockFn}
        clearState={mockFn}
        movies={[]}
        details={{} as any}
        navigateToMovie={mockFn}
        goBack={mockFn}
      />
    );

    expect(result).toMatchSnapshot();
  });
});
