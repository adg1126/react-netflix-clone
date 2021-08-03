import { connect } from 'react-redux';
import { fetchbannerMovieStart } from '../redux/movies/moviesActions';
import { createStructuredSelector } from 'reselect';
import { selectBannerMovie } from '../redux/movies/moviesSelectors';
import Banner from '../components/Banner/Banner';

const mapStateToProps = createStructuredSelector({
  bannerMovie: selectBannerMovie
});

export default connect(mapStateToProps, { fetchbannerMovieStart })(Banner);
