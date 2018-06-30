import * as React from 'react';
import {createShallow} from '@material-ui/core/test-utils';
import ActorsView from './index';

const shallow = createShallow();

describe('renders without crashing', () => {
  test('if renders', () => {
    const result = shallow(<ActorsView actors={[]}/>);
    expect(result).toMatchSnapshot();
  });
});