import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import {RouteComponentProps, withRouter} from 'react-router';
import {PathParams} from '../../../../services/Routing.service';
import MainView from '../../Main.view';
import {IMDbActorDetails, IMDbCastMovie} from '../../../../services/rest.response.types';
import Paper from '@material-ui/core/Paper';
import Information from './../../../common/information';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Image from './../../../common/image/Image.widget';

const styles = (theme: Theme) => createStyles({
  details: {
    flexDirection: 'column',
    paddingLeft: '0.75em',
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
  },
  linkImage: {
    cursor: 'pointer',
  },
  movies: {
    marginTop: '1em',
  },
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

export interface ActorDetailsProps {
  isFetching: boolean;
  details?: IMDbActorDetails;
  movies?: IMDbCastMovie[];
}

export interface ActorDetailsActions {
  fetchActorDetails(id: number): void;

  clearState(): void;

  navigateToMovie(id: number): void

  goBack(): void;
}

class ActorDetailsView extends React.Component<ActorDetailsProps & ActorDetailsActions & RouteComponentProps<PathParams> & WithStyles<typeof styles>> {

  constructor(props: ActorDetailsProps & ActorDetailsActions & RouteComponentProps<PathParams> & WithStyles<typeof styles>) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchActorDetails(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearState();
  }

  render() {
    const {details, classes} = this.props;
    return (
      <MainView
        component={details && (
          <React.Fragment>
            <Button variant="outlined" size="small" className={classes.button} onClick={this.props.goBack}>
              <ArrowBack className={classes.extendedIcon}/> Back
            </Button>
            <div>
              <Paper square={true}>
                <ExpansionPanelDetails>

                  <div className={classes.image}>
                    <Image
                      path={details.profile_path}
                      resolution={200}
                      width={200}
                    />
                  </div>

                  <div className={classes.details}>
                    <Information width={100} fontSize={18} label={'Name'} value={details.name}/>
                    <Information width={100} fontSize={18} label={'Also known'} value={details.also_known_as}/>
                    <Information width={100} fontSize={18} label={'Birth place'} value={details.place_of_birth}/>
                    <Information width={100} fontSize={18} label={'Birth date'} value={details.birthday}/>
                    {
                      details.deathday &&
                      <Information width={100} fontSize={18} label={'Death day'} value={details.deathday}/>
                    }
                    <Information width={100} fontSize={18} label={'Gender'} value={details.gender === 1 ? 'Female' : 'Male'}/>
                    <Information width={100} fontSize={18} label={'Rating'} value={details.popularity.toFixed(2)}/>
                    {
                      details.homepage && <Link to={details.homepage}/>
                    }
                    <div style={{fontSize: 18, fontWeight: 200, paddingTop: '0.5em',}}>{details.biography}</div>
                  </div>
                </ExpansionPanelDetails>
              </Paper>

              {
                this.props.movies && this.props.movies.map((movie: IMDbCastMovie) => (
                  <Paper square={true} className={classes.movies} key={movie.id}>
                    <ExpansionPanelDetails>

                      <div className={classes.image}>
                        <Image
                          path={movie.poster_path}
                          resolution={200}
                          width={160}
                          onClick={() => this.props.navigateToMovie(movie.id)}
                        />
                      </div>

                      <div className={classes.details}>
                        <Information width={120} fontSize={18} label={'Title'} value={movie.original_title}/>
                        <Information width={120} fontSize={18} label={'Character'} value={movie.character}/>
                        <Information width={120} fontSize={18} label={'Release date'} value={movie.release_date}/>
                        <Information width={120} fontSize={18} label={'Rating'} value={movie.popularity.toFixed(2)}/>
                        <Information width={120} fontSize={18} label={'Vote count'} value={movie.vote_count}/>
                        <Information width={120} fontSize={18} label={'Vote average'} value={movie.vote_average}/>
                        <div style={{fontSize: 18, fontWeight: 200, paddingTop: '0.5em',}}>{movie.overview}</div>
                      </div>

                    </ExpansionPanelDetails>
                  </Paper>
                ))
              }
            </div>
          </React.Fragment>
        )}
        isFetching={this.props.isFetching}
      />
    );
  }
}

export default withStyles(styles)(withRouter(ActorDetailsView));
