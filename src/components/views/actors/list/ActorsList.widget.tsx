import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import {IMDbKnowFor, IMDbKnownActor} from '../../../../services/rest.response.types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Information from './../../../common/information';
import Image from './../../../common/image/Image.widget';

const styles = (theme: Theme) => createStyles({
  root: {
    width: '100%',
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    // flexBasis: '33.33%',
    color: theme.palette.text.secondary,
    flexShrink: 0,
    paddingLeft: '1em',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  details: {
    flexDirection: 'column',
    paddingLeft: '0.75em',
  },
  column: {
    flexBasis: '33.33%',
  },
});

interface ActorsListProps {
  actors: IMDbKnownActor[];
  expanded: number;
}

interface ActorsListActions {
  expand(id: number): void;

  navigateToActor(id: number): void;

  navigateToMovie(id: number): void;
}

class ActorsList extends React.Component<ActorsListActions & ActorsListProps & WithStyles<typeof styles>> {

  render() {
    const {expand, actors, expanded, classes} = this.props;
    return (
      <div className={classes.root}>
        {
          actors.map((actor: IMDbKnownActor) => (
            <ExpansionPanel key={actor.id} expanded={expanded === actor.id} onChange={() => expand(actor.id)}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <div className={classes.image}>
                  <Image
                    path={actor.profile_path}
                    resolution={185}
                    width={30}
                    onClick={() => this.props.navigateToActor(actor.id)}
                  />
                </div>
                <Typography className={classes.heading}>{actor.name}</Typography>
              </ExpansionPanelSummary>

              {
                actor.known_for.map((action: IMDbKnowFor) => (
                  <div key={action.id} className={classes.column}>
                    <Divider/>
                    <ExpansionPanelDetails>
                      <div>
                        <Image
                          path={action.poster_path}
                          resolution={185}
                          width={130}
                          onClick={() => this.props.navigateToMovie(action.id)}
                        />
                      </div>
                      <div className={classes.details}>
                        <Information label={'Title'} value={action.original_title}/>
                        <Information label={'Media type'} value={action.media_type}/>
                        <Information label={'Language'} value={action.original_language}/>
                        <Information label={'Release date'} value={action.release_date}/>
                        <Information label={'Rating'} value={action.popularity.toFixed(2)}/>
                        <Information label={'Vote average'} value={action.vote_average}/>
                        <Information label={'Votes count'} value={action.vote_count}/>
                      </div>

                    </ExpansionPanelDetails>
                  </div>
                ))
              }

            </ExpansionPanel>
          ))
        }
      </div>
    );
  }

};

export default withStyles(styles)(ActorsList);
