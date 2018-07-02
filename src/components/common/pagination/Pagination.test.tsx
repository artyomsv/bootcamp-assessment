import * as React from 'react';
import {createShallow} from '@material-ui/core/test-utils';
import Pagination from './Pagination.widget';

const shallow = createShallow();

describe('renders without crashing', () => {
  test('if renders', () => {
    const mockFn = jest.fn();
    const result = shallow(<Pagination onChangePage={mockFn} page={{page: 0, totalPages: 10, totalResults: 200}}/>);
    expect(result).toMatchSnapshot();
  });
});
