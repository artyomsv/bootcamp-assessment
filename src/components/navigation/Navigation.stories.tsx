import * as React from 'react';
import NavigationMenu from './menu/NavigationMenu.widget';
import NavigationMenuItem from './items/NavigationMenuItem.widget';
import NavigationDrawer from './drawer/NavigationDrawer.widget';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Movie from '../../assets/movie.svg';
import People from '../../assets/people.svg';
import {AppRouting} from '../../services/Routing.service';
import Switch from '@material-ui/core/Switch';

storiesOf('Navigation', module)
  .add('Navigation', () => (
    <NavigationMenu navigateTo={(path: string) => action('navigateTo')(path)}/>
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
              navigateTo={(path: string) => action('navigateTo')(path)}
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
      navigateTo={() => action('navigateTo')(AppRouting.ACTORS)}
    />
  ))
  .add('Item [Films]', () => (
    <NavigationMenuItem
      title={'Films'}
      icon={Movie}
      navigateTo={() => action('navigateTo')(AppRouting.MOVIES)}
    />
  ))
;
