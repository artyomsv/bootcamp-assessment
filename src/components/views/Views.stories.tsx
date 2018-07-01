import * as React from 'react';
import ActorsView from './actors/Actors.view';
import ActorsGrid from './actors/grid/ActorsGrid.widget';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import actors from './actors.mock.json';
import {Page} from '../../services/Rest.service';
import Switch from '@material-ui/core/Switch';

storiesOf('Views', module)
  .add('Actors View', () => {

    interface StoryComponentState {
      isFetching: boolean;
    }

    class StoryComponent extends React.Component<any, StoryComponentState> {

      constructor(props: any) {
        super(props);
        this.state = {isFetching: false};
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
              fetchActors={(page?: Page) => action('fetchActors')(page)}
              view={'grid'}
              toggleView={() => action('toggleView')()}
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
      fetchActors={(page?: Page) => action('fetchActors')(page)}
      view={'grid'}
      toggleView={() => action('toggleView')()}
    />
  ))
  .add('Actors View [Fetching]', () => (
    <ActorsView
      actors={actors}
      isFetching={true}
      fetchActors={(page?: Page) => action('fetchActors')(page)}
      view={'grid'}
      toggleView={() => action('toggleView')()}
    />
  ))
  .add('Actors Grid', () => (
    <ActorsGrid actors={actors}/>
  ))
;
