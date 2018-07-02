import * as React from 'react';
import ActorsView from './actors/Actors.view';
import ActorsGrid from './actors/grid/ActorsGrid.widget';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import actors from './actors.mock.json';
import {Page} from '../../services/Rest.service';
import Switch from '@material-ui/core/Switch';
import HomeView from './home/Home.view'

storiesOf('Views', module)
  .add('Actors View', () => {

    interface StoryComponentState {
      isFetching: boolean;
      search: string;
    }

    class StoryComponent extends React.Component<any, StoryComponentState> {

      constructor(props: any) {
        super(props);
        this.state = {isFetching: false, search: ''};
      }

      handleChange = () => {
        this.setState({isFetching: !this.state.isFetching});
      };

      render() {
        return (
          <div>
            <Switch checked={this.state.isFetching} onChange={this.handleChange} aria-label="collapse"/>
            <ActorsView
              actors={actors}
              isFetching={this.state.isFetching}
              fetchActors={(search?: string, page?: Page) => action('fetchActors')(page)}
              view={'grid'}
              toggleView={() => action('toggleView')()}
              expanded={-1}
              expand={(id: number) => action('expand')(id)}
              navigateToActor={(id: number) => action('navigateToActor')(id)}
              navigateToMovie={(id: number) => action('navigateToMovie')(id)}
              page={{page: 1, totalPages: 10, totalResults: 200}}
              search={this.state.search}
              onQueryChange={(search: string) => {
                this.setState({...this.state, search})
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
  .add('Actors View [Fetched]', () => (
    <ActorsView
      actors={actors}
      isFetching={false}
      fetchActors={(search?: string, page?: Page) => action('fetchActors')(page)}
      view={'grid'}
      toggleView={() => action('toggleView')()}
      expanded={-1}
      expand={(id: number) => action('expand')(id)}
      navigateToActor={(id: number) => action('navigateToActor')(id)}
      navigateToMovie={(id: number) => action('navigateToMovie')(id)}
      page={{page: 1, totalPages: 10, totalResults: 200}}
      search={''}
      onQueryChange={(search: string) => action('onQueryChange')(search)}
    />
  ))
  .add('Actors View [Fetching]', () => (
    <ActorsView
      actors={actors}
      isFetching={true}
      fetchActors={(search?: string, page?: Page) => action('fetchActors')(page)}
      view={'grid'}
      toggleView={() => action('toggleView')()}
      expanded={-1}
      expand={(id: number) => action('expand')(id)}
      navigateToActor={(id: number) => action('navigateToActor')(id)}
      navigateToMovie={(id: number) => action('navigateToMovie')(id)}
      page={{page: 1, totalPages: 10, totalResults: 200}}
      search={''}
      onQueryChange={(search: string) => action('onQueryChange')(search)}
    />
  ))
  .add('Actors Grid', () => (
    <ActorsGrid actors={actors} navigateToActor={(id: number) => action('navigateToActor')(id)}/>
  ))
  .add('Home View', () => (
    <HomeView
      navigateToActors={() => action('navigateToActors')()}
      navigateToMovies={() => action('navigateToMovies')()}
    />
  ))
;
