import * as React from 'react';
import MoviesView from './Movies.view';
import ItemsGrid from '../../common/grid/ItemsGrid.widget';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import movies from './__mock__/movies.mock.json';
import {Page} from '../../../services/Rest.service';
import Switch from '@material-ui/core/Switch';

storiesOf('Movies View', module)
  .add('Movies View', () => {

    interface StoryComponentState {
      isFetching: boolean;
      search: string;
      id: number
    }

    class StoryComponent extends React.Component<any, StoryComponentState> {

      constructor(props: any) {
        super(props);
        this.state = {isFetching: false, search: '', id: -1};
      }

      handleChange = () => {
        this.setState({isFetching: !this.state.isFetching});
      };

      render() {
        return (
          <div>
            <Switch checked={this.state.isFetching} onChange={this.handleChange} aria-label="collapse"/>
            <MoviesView
              movies={movies}
              isFetching={this.state.isFetching}
              fetchMovies={(search?: string, page?: Page) => action('fetchActors')(page)}
              navigateToMovie={(id: number) => action('navigateToMovie')(id)}
              page={{page: 1, totalPages: 10, totalResults: 200}}
              search={this.state.search}
              onQueryChange={(search: string) => {
                this.setState({...this.state, search});
              }}
            />
          </div>
        );
      }
    }

    return (
      <StoryComponent/>
    );
  })
  .add('Actors Grid', () => (
    <ItemsGrid values={movies} navigateTo={(id: number) => action('navigateTo')(id)}/>
  ))
;
