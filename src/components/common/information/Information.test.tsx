import * as React from 'react';
import {createShallow} from '@material-ui/core/test-utils';
import Information from './Information.widget';

const shallow = createShallow();

describe('renders without crashing', () => {
  test('if renders', () => {
    const result = shallow(
      <Information
        label={'label'}
        value={'value'}
      />
    );

    expect(result).toMatchSnapshot();
  });
});
