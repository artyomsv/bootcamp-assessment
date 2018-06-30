import * as React from 'react';
import {createShallow} from '@material-ui/core/test-utils';
import ActorsGrid from './index';

const shallow = createShallow();

describe('renders without crashing', () => {
  test('if renders', () => {
    const result = shallow(<ActorsGrid actors={[]}/>);
    expect(result).toMatchSnapshot();
  });
});