import Spinner from '../components/Spinner/Spinner.jsx';

const WithSpinner =
  WrappedComponent =>
  ({ isFetched, ...otherProps }) =>
    isFetched ? <WrappedComponent {...otherProps} /> : <Spinner />;

export default WithSpinner;
