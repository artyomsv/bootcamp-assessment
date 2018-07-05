import * as React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core';
import {RouteComponentProps, withRouter} from 'react-router';
import {PathParams} from '../../../../services/Routing.service';
import MainView from '../../Main.view';
import {IMDbKnownActor, IMDbMovieDetails, IMDbProductionCompany} from '../../../../services/rest.response.types';
import Paper from '@material-ui/core/Paper';
import Information from './../../../common/information';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid/Grid';
import Image from './../../../common/image/Image.widget';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    padding: '1em',
  },
  details: {
    padding: '1em',
  },
  image: {
    background: '#3f4658',
    margin: '1em',
  },
  companyImage: {
    background: '#3f4658',
    margin: '1em',
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
  demo: {
    marginTop: '1em',
    backgroundColor: theme.palette.background.paper,
  },
});

export interface MovieDetailsProps {
  isMovieFetching: boolean;
  isActorsFetching: boolean;
  details?: IMDbMovieDetails;
  actors?: IMDbKnownActor[];
}

export interface MovieDetailsActions {
  fetchMovieDetails(id: number): void;

  fetchMovieActors(id: number): void;

  clearState(): void;

  navigateToActor(id: number): void

  navigateToMovie(id: number): void

  goBack(): void;
}

const convertCurrency = (amount: number): string => {
  return String(amount.toFixed(2)).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' $';
};

class MovieDetailsView extends React.Component<MovieDetailsProps & MovieDetailsActions & RouteComponentProps<PathParams> & WithStyles<typeof styles>> {

  constructor(props: MovieDetailsProps & MovieDetailsActions & RouteComponentProps<PathParams> & WithStyles<typeof styles>) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMovieDetails(this.props.match.params.id);
    this.props.fetchMovieActors(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearState();
  }

  render() {
    const {details, classes, actors} = this.props;
    return (
      <MainView
        component={details && (
          <React.Fragment>
            <Button variant="outlined" size="small" className={classes.button} onClick={this.props.goBack}>
              <ArrowBack className={classes.extendedIcon}/> Back
            </Button>

            <Paper>
              <Grid container className={classes.root} spacing={0}>
                <Grid item xs={12} sm={12}>
                  <Grid container justify={'flex-start'} alignItems={'stretch'} direction={'row'} spacing={24} className={classes.details}>

                    <Grid item className={classes.details} lg={3}>
                      <Image
                        path={details.poster_path}
                        resolution={300}
                        width={250}
                      />
                    </Grid>

                    <Grid item className={classes.details} lg={4}>
                      <Information width={150} fontSize={18} label={'Title'} value={details.original_title}/>
                      <Information width={150} fontSize={18} label={'Status'} value={details.status}/>
                      <Information width={150} fontSize={18} label={'Tagline'} value={details.tagline}/>
                      <Information width={150} fontSize={18} label={'Release Date'} value={details.release_date}/>
                      <Information width={150} fontSize={18} label={'Rating'} value={details.popularity.toFixed(2)}/>
                      <Information width={150} fontSize={18} label={'Vote Average'} value={details.vote_average}/>
                      <Information width={150} fontSize={18} label={'Vote Count'} value={details.vote_count}/>
                      <Information width={150} fontSize={18} label={'Language'} value={details.original_language}/>
                      <Information width={150} fontSize={18} label={'Budget'} value={convertCurrency(details.budget)}/>
                      <Information width={150} fontSize={18} label={'Budget'} value={convertCurrency(details.revenue)}/>
                      <Information width={150} fontSize={18} label={'Runtime'} value={details.runtime}/>
                      <Information width={150} fontSize={18} label={'Genres'} value={details.genres && details.genres.map(g => g.name).join(', ')}/>
                    </Grid>

                    <Grid item className={classes.details} lg={5}>
                      <Information width={180} fontSize={18} label={'Spoken Languages'} value={details.spoken_languages && details.spoken_languages.map(g => g.name)}/>
                      <Information width={180} fontSize={18} label={'Production Countries'} value={details.production_countries && details.production_countries.map(g => g.name)}/>
                      <Information width={180} fontSize={18} label={'Overview'} value={details.overview}/>
                    </Grid>

                  </Grid>
                </Grid>
              </Grid>
            </Paper>

            <Paper style={{marginTop: '2em'}}>
              <Grid container className={classes.root} spacing={24}>
                <Grid item xs={12} sm={12}>
                  <Grid container spacing={24} className={classes.details}>
                    {
                      details.production_companies && details.production_companies.map((company: IMDbProductionCompany) => (
                        <Grid item className={classes.details} xl={2} lg={2} md={3} sm={6} xs={12} key={company.id}>
                          <div style={{fontSize: 18}}>{company.name}</div>
                          <Image
                            path={company.logo_path}
                            resolution={185}
                            width={185}
                          />
                        </Grid>
                      ))
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Paper>

            {
              this.props.isActorsFetching && <CircularProgress size={60}/>
            }

            {
              this.props.actors &&
              <Paper style={{marginTop: '2em'}}>
                <Grid container className={classes.root} spacing={24}>
                  <Grid item>
                    <Typography variant="title"> Actors: </Typography>
                    <div className={classes.demo}>
                      <List dense={true}>
                        <Grid container spacing={24}>
                          {
                            actors && actors.map((actor) => (
                              <Grid key={actor.id} xl={2} lg={3} md={4} sm={6} xs={12}>
                                <ListItem>
                                  <ListItemAvatar>
                                    <Image
                                      path={actor.profile_path}
                                      resolution={185}
                                      width={40}
                                      onClick={() => this.props.navigateToActor(actor.id)}
                                    />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={actor.character}
                                    secondary={actor.name}
                                  />
                                </ListItem>
                              </Grid>
                            ))
                          }
                        </Grid>
                      </List>
                    </div>
                  </Grid>
                </Grid>

              </Paper>
            }
          </React.Fragment>
        )}
        isFetching={this.props.isMovieFetching}
      />
    );
  }
}

export default withStyles(styles)(withRouter(MovieDetailsView));
