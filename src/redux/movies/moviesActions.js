import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_BANNER_MOVIE_START,
  FETCH_BANNER_MOVIE_SUCCESS,
  FETCH_BANNER_MOVIE_FAILURE,
  SET_TRAILER_URL
} from './moviesActionTypes';

export const fetchMoviesStart = movieType => ({
  type: FETCH_MOVIES_START,
  payload: movieType
});

export const fetchMoviesSuccess = (movieType, moviesArr) => ({
  type: FETCH_MOVIES_SUCCESS,
  key: movieType,
  value: moviesArr
});

export const fetchMoviesFailure = errMsg => ({
  type: FETCH_MOVIES_FAILURE,
  payload: errMsg
});

export const fetchbannerMovieStart = () => ({
  type: FETCH_BANNER_MOVIE_START
});

export const fetchbannerMovieSuccess = movie => ({
  type: FETCH_BANNER_MOVIE_SUCCESS,
  payload: movie
});

export const fetchbannerMovieFailure = errMsg => ({
  type: FETCH_BANNER_MOVIE_FAILURE,
  payload: errMsg
});

export const setTrailerurl = movie => ({
  type: SET_TRAILER_URL,
  payload: movie
});
