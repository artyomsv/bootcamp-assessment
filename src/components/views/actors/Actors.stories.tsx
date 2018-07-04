import * as React from 'react';
import ActorsView from './../actors/Actors.view';
import ActorsGrid from './../actors/grid/ActorsGrid.widget';
import ActorsList from './../actors/list/ActorsList.widget';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import actors from './__mock__/actors.mock.json';
import {Page} from '../../../services/Rest.service';
import Switch from '@material-ui/core/Switch';
import {ActorsViewType} from '../../../store/reducers/Actors.reducer';

storiesOf('Actors View', module)
  .add('Actors View', () => {

    interface StoryComponentState {
      isFetching: boolean;
      search: string;
      view: ActorsViewType;
      id: number
    }

    class StoryComponent extends React.Component<any, StoryComponentState> {

      constructor(props: any) {
        super(props);
        this.state = {isFetching: false, search: '', view: 'grid', id: -1};
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
              view={this.state.view}
              toggleView={() => {
                const newView = this.state.view === 'grid' ? 'list' : 'grid';
                this.setState({...this.state, view: newView});
                action('toggleView')();
              }}
              expanded={this.state.id}
              expand={(id: number) => {
                this.setState({...this.state, id: id === this.state.id ? -1 : id});
                action('expand')(id);
              }}
              navigateToActor={(id: number) => action('navigateToActor')(id)}
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
    <ActorsGrid actors={actors} navigateToActor={(id: number) => action('navigateToActor')(id)}/>
  ))
  .add('Actors List', () => {

    interface StoryComponentState {
      id: number;
    }

    class StoryComponent extends React.Component<any, StoryComponentState> {

      constructor(props: any) {
        super(props);
        this.state = {id: -1};
      }

      render() {
        return (
          <ActorsList
            actors={actors}
            expanded={this.state.id}
            navigateToMovie={(id: number) => action('navigateToMovie')(id)}
            navigateToActor={(id: number) => action('navigateToActor')(id)}
            expand={(id: number) => {
              this.setState({id: id === this.state.id ? -1 : id});
              action('expand')(id);
            }}
          />
        );
      }
    }

    return (
      <StoryComponent/>
    );

  })
;
