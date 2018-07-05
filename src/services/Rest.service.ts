import {AxiosRequestConfig, default as Axios} from 'axios';
import {toastr} from 'react-redux-toastr';

export interface Page {
  page: number;
  totalResults: number;
  totalPages: number;
}

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
  const instance = Axios.create(instanceConfig);
  instance.interceptors.response
    .use(undefined, (error) => {
      console.log(error);
      if (!!error.response && error.response.status >= 300) {
        toastr.error('Error', error.response.data.status_message);
      } else if (!error.response) {
        toastr.error('Error', error.message);
      }
      return Promise.reject(error);
    });
  return instance;
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

export const credits = (id: number) => {
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

export const movies = (query?: string, page?: Page) => {
  if (query && query.length > 0) {
    return axios().get('/search/movie', {
        params: {
          ...defaultParams,
          query,
          page: !!page ? page.page : 1
        }
      }
    );
  } else {
    return axios().get('/movie/popular', {
        params: {
          ...defaultParams,
          page: !!page ? page.page : 1
        }
      }
    );
  }
};
