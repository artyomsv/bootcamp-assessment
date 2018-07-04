export interface IMDbResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number
}

export interface IMDbMoviesResponse {
  cast: IMDbCastMovie[];
  crew: IMDbCrew[];
  id: number;
}

export interface IMDbMovie {
  id: number;
  adult: false;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMDbCastMovie extends IMDbMovie {
  character: string;
  credit_id: string;
  genre_ids: number[];
}

export interface IMDbMovieDetails extends IMDbMovie {
  belongs_to_collection: IMDbCollection;
  budget: number;
  genres: IMDbGenre[];
  homepage: string;
  imdb_id: number;
  production_companies: IMDbProductionCompany[];
  production_countries: IMDbProductionCountry[];
  revenue: number
  runtime: number
  spoken_languages: IMDbSpokenLanguage[];
  status: string;
  tagline: string;
}

export interface IMDbSpokenLanguage {
  iso_3166_1: string;
  name: string;
}

export interface IMDbProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface IMDbProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  original_country: string;
}

export interface IMDbGenre {
  id: number;
  name: string;
}

export interface IMDbCollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
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
  id: number;
  adult: boolean;
  name: string;
  popularity: number;
  profile_path: string;
}

export interface IMDbKnownActor extends IMDbActor {
  known_for: IMDbKnowFor[];
}

export interface IMDbActorDetails extends IMDbActor {
  birthday: string;
  deathday: string;
  also_known_as: string[];
  gender: number;
  biography: string;
  place_of_birth: string;
  imdb_id: string;
  homepage: string;
}


