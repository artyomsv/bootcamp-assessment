import {default as Axios, AxiosRequestConfig} from 'axios';

export interface Page {
  page: number;
  totalResults: number;
  totalPages: number;
}

// const apiBaseUrl = 'https://api.themoviedb.org/3';
// const apiToken = 'd7ec8227bbe7c123c268e03a0b0e39ae';
const defaultParams = {
  api_key: process.env.REACT_APP_API_TOKEN,
  language: 'en-US',
  include_adult: false,
};

const instanceConfig: AxiosRequestConfig = {
  baseURL: '/api/data/',
  timeout: 200000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json',
  },
};

export const axios = () => {
  return Axios.create(instanceConfig);
};

export const compose = (promises: any[]) => {
  return Axios.all(promises);
};


export const actors = (query?: string, page?: Page) => {
  if (query && query.length > 0) {
    return axios().get('/search/person', {
        params: {
          ...defaultParams,
          query,
          page: !!page ? page.page : 1
        }
      }
    );
  } else {
    return axios().get('/person/popular', {
        params: {
          ...defaultParams,
          page: !!page ? page.page : 1
        }
      }
    );
  }
};

export const actor = (id: number) => {
  return axios().get('/person/' + id, {
    params: {
      ...defaultParams
    }
  });
};

export const movies = (id: number) => {
  return axios().get(`/person/${id}/movie_credits`, {
    params: {
      ...defaultParams
    }
  });
};

export const movie = (id: number) => {
  return axios().get(`/movie/${id}`, {
    params: {
      ...defaultParams
    }
  });
};
