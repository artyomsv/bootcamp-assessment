import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import {IMDbActor, IMDbKnowFor} from '../../../../services/rest.response.types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Information from './../../../common/information'
import {constructPath} from '../Actors.utils';

const styles = (theme: Theme) => createStyles({
  root: {
    width: '100%',
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
  actorImage: {
    width: 30,
    height: 45,
    background: '#3f4658',
    borderRadius: 3,
    cursor: 'pointer',
  },
  actorDetailedImage: {
    width: 100,
    height: 152,
    background: '#3f4658',
    borderRadius: 7,
    cursor: 'pointer',
  },
  movieImage: {
    width: 130,
    // height: 104,
    background: '#3f4658',
    boxShadow: '5px 3px 3px lightgrey',
    cursor: 'pointer',
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
  actors: IMDbActor[];
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
          actors.map((actor: IMDbActor) => (
            <ExpansionPanel key={actor.id} expanded={expanded === actor.id} onChange={() => expand(actor.id)}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <img
                  src={constructPath(actor.profile_path, 185)}
                  alt={actor.name}
                  className={classes.actorImage}
                  onClick={() => this.props.navigateToActor(actor.id)}
                />
                <Typography className={classes.heading}>{actor.name}</Typography>
              </ExpansionPanelSummary>

              {
                actor.known_for.map((action: IMDbKnowFor) => (
                  <div key={action.id} className={classes.column}>
                    <Divider/>
                    <ExpansionPanelDetails>
                      <div>
                        <img
                          src={constructPath(action.poster_path, 185)}
                          alt={action.original_title}
                          className={classes.movieImage}
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
