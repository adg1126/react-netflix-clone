import {
  takeLatest,
  takeEvery,
  put,
  all,
  call,
  select
} from 'redux-saga/effects';
import _ from 'lodash';
import { baseUrl } from '../../baseurls';
import {
  fetchMoviesSuccess,
  fetchMoviesFailure,
  fetchbannerMovieSuccess,
  fetchbannerMovieFailure
} from './moviesActions';
import {
  FETCH_MOVIES_START,
  FETCH_BANNER_MOVIE_START,
  FETCH_MOVIES_SUCCESS
} from './moviesActionTypes';
import { selectMovieType } from './moviesSelectors';

const TMDB_API_KEY = 'c9b746c353eebdda16a9159dad057742';

const request = {
  trending: `/trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`,
  netflixOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213`,
  topRated: `/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
  actionMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genre=28`,
  comedyMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genre=35`,
  horrorMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genre=27`,
  romanceMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genre=10749`,
  documentaries: `/discover/movie?api_key=${TMDB_API_KEY}&width_genre=99`
};

function* fetchMoviesAsync({ payload: movieType }) {
  try {
    const res = yield fetch(`${baseUrl}${request[movieType]}`);
    const { results } = yield res.json();
    yield put(fetchMoviesSuccess(movieType, results));
  } catch (err) {
    yield put(fetchMoviesFailure(err.message));
  }
}

function* fetchMoviesStart() {
  yield takeEvery(FETCH_MOVIES_START, fetchMoviesAsync);
}

function* fetchbannerMovieAsync() {
  const moviesArr = yield select(selectMovieType('netflixOriginals'));

  if (!_.isEmpty(moviesArr)) {
    yield put(fetchbannerMovieSuccess(_.sample(moviesArr)));
  } else {
    yield put(fetchbannerMovieFailure('Failed to fetch movie'));
  }
}

function* fetchBannerMovieStart() {
  yield takeLatest(
    [FETCH_MOVIES_SUCCESS, FETCH_BANNER_MOVIE_START],
    fetchbannerMovieAsync
  );
}

export function* moviesSagas() {
  yield all([call(fetchMoviesStart), call(fetchBannerMovieStart)]);
}
