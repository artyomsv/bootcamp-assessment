import {default as Axios, AxiosRequestConfig} from 'axios';

export interface Page {
  page: number;
  totalResults: number;
  totalPages: number;
}

// const apiBaseUrl = 'https://api.themoviedb.org/3';
const apiToken = 'd7ec8227bbe7c123c268e03a0b0e39ae';
const defaultParams = {
  api_key: apiToken,
  language: 'en-US'
};

const instanceConfig: AxiosRequestConfig = {
  baseURL: '/api/data/',
  timeout: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json',
  },
};

export const axios = () => {
  return Axios.create(instanceConfig);
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

