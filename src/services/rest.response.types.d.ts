export interface IMDbResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number
}

export interface IMDbMoviesResponse {
  cast: IMDbMovie[];
  crew: IMDbCrew[];
  id: number;
}

export interface IMDbMovie {
  character: string;
  credit_id: string;
  poster_path: string;
  id: number;
  video: boolean;
  vote_count: number;
  adult: false;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  popularity: number;
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

export interface IMDbCrew {

}


export interface IMDbKnowFor {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMDbActor {
  adult: boolean;
  id: number;
  known_for: IMDbKnowFor[];
  name: string;
  popularity: number;
  profile_path: string;
}

export interface IMDbActorDetails {
  birthday: string;
  deathday: string;
  id: number;
  name: string;
  also_known_as: string[];
  gender: number;
  biography: string;
  popularity: number;
  place_of_birth: string;
  profile_path: string;
  adult: boolean;
  imdb_id: string;
  homepage: string;
}
