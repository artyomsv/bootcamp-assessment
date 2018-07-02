import * as React from 'react';
import Pagination from './Pagination.widget';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Page} from '../../../services/Rest.service';

storiesOf('Pagination', module)
  .add('Pagination', () => {

    interface StoryProps {
      page: Page;
    }

    class StoryComponent extends React.Component<any, StoryProps> {

      constructor(props: any) {
        super(props);
        this.state = {page: {page: 1, totalPages: 10, totalResults: 200}};
      }

      onChangePage = (event: any, page: number) => {
        action('onChangePage')(page);
        const newPage = {...this.state.page, page};
        this.setState({page: newPage});
      };

      render() {
        return (
          <div>
            {JSON.stringify(this.state)}
            <Pagination
              page={this.state.page}
              onChangePage={this.onChangePage}
            />
          </div>
        );
      }
    }

    return (
      <StoryComponent/>
    );

  })
;
