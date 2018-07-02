import * as React from 'react';
import NavigationMenu from './menu/NavigationMenu.widget';
import NavigationMenuItem from './items/NavigationMenuItem.widget';
import NavigationDrawer from './drawer/NavigationDrawer.widget';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Movie from '../../assets/movie.svg';
import People from '../../assets/people.svg';
import {AppRouting, AppRoutingData} from '../../services/Routing.service';
import Switch from '@material-ui/core/Switch';

storiesOf('Navigation', module)
  .add('Navigation', () => (
    <NavigationMenu navigateTo={(path: AppRoutingData) => action('navigateTo')(path)} selectedPage={'home'}/>
  ))
  .add('Navigation Drawer', () => {

    interface StoryComponentState {
      checked: boolean;
    }

    class StoryComponent extends React.Component<any, StoryComponentState> {

      constructor(props: StoryComponentState) {
        super(props);
        this.state = {checked: true};
      }

      handleChange = () => {
        this.setState({checked: !this.state.checked});
      };

      render() {
        return (
          <div>
            <Switch checked={this.state.checked} onChange={this.handleChange} aria-label="collapse"/>
            <NavigationDrawer
              checked={this.state.checked}
              navigateTo={(path: AppRoutingData) => action('navigateTo')(path)}
              selectedPage={'home'}
            />
          </div>

        );
      }

    }

    return (
      <StoryComponent/>
    );
  })
  .add('Item [People]', () => (
    <NavigationMenuItem
      title={'People'}
      icon={People}
      navigateTo={() => action('navigateTo')(AppRouting.actors)}
      selected={false}
    />
  ))
  .add('Item selected [People]', () => (
    <NavigationMenuItem
      title={'People'}
      icon={People}
      navigateTo={() => action('navigateTo')(AppRouting.actors)}
      selected={true}
    />
  ))
  .add('Item [Films]', () => (
    <NavigationMenuItem
      title={'Films'}
      icon={Movie}
      navigateTo={() => action('navigateTo')(AppRouting.movies)}
      selected={false}
    />
  ))
  .add('Item selected [Films]', () => (
    <NavigationMenuItem
      title={'Films'}
      icon={Movie}
      navigateTo={() => action('navigateTo')(AppRouting.movies)}
      selected={true}
    />
  ))
;
