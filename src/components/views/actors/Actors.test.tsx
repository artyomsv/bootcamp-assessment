import * as React from 'react';
import {createShallow} from '@material-ui/core/test-utils';
import ActorsView from './Actors.view';
import {constructPath} from './Actors.utils';
import Person from './../../../assets/person.svg';

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
        expanded={-1}
        expand={mockFn}
        navigateToMovie={mockFn}
        navigateToActor={mockFn}
        page={{page: 1, totalPages: 10, totalResults: 200}}
        search={''}
        onQueryChange={mockFn}
      />
    );

    expect(result).toMatchSnapshot();
  });
});

describe('Test Actor utils', () => {
  test('image path construction [full path]', () => {
    expect(constructPath('http://www.google.lv/api/image/cat.jpg')).toEqual('http://www.google.lv/api/image/cat.jpg');
  });

  test('image path construction [relative path]', () => {
    expect(constructPath('/cat.jpg')).toEqual('/api/image/cat.jpg');
  });

  test('image path construction [empty]', () => {
    expect(constructPath('')).toEqual(Person);
  });

  test('image path construction [undefined]', () => {
    expect(constructPath(undefined)).toEqual(Person);
  });
});
