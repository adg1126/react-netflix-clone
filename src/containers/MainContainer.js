import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selecIsFetched,
  selectTrailerUrl
} from '../redux/movies/moviesSelectors';
import Main from '../components/Main';
import WithSpinner from './WithSpinner';

const mapStateToProps = createStructuredSelector({
  isFetched: selecIsFetched,
  trailerUrl: selectTrailerUrl
});

export default compose(connect(mapStateToProps), WithSpinner)(Main);
