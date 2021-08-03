import { connect } from 'react-redux';
import { fetchMoviesStart, setTrailerurl } from '../redux/movies/moviesActions';
import MovieRow from '../components/MovieRow/MovieRow';
import {
  selectMovieType,
  selectTrailerUrl
} from '../redux/movies/moviesSelectors';

const mapStateToProps = (state, ownProps) => ({
  movies: selectMovieType(ownProps.movieType)(state),
  trailerUrl: selectTrailerUrl(state)
});

export default connect(mapStateToProps, { fetchMoviesStart, setTrailerurl })(
  MovieRow
);
