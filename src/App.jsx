import React from 'react';
import './App.css';

import MovieRowContainer from './containers/MovieRowContainer';
import BannerContainer from './containers/BannerContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  const movies = [
    { title: 'Trending Now', movieType: 'trending', isLargeRow: true },
    { title: 'NETFLIX ORIGINALS', movieType: 'netflixOriginals' },
    { title: 'Top Rated', movieType: 'topRated' },
    { title: 'Action Movies', movieType: 'actionMovies' },
    { title: 'Funny Movies', movieType: 'comedyMovies' },
    { title: 'Horror Movies', movieType: 'horrorMovies' },
    { title: 'Romantic Movies', movieType: 'romanceMovies' },
    { title: 'Documentaries', movieType: 'documentaries' }
  ];

  return (
    <div className='app'>
      <Navbar />
      <BannerContainer />
      {movies.map((m, i) => (
        <MovieRowContainer key={i} {...m} />
      ))}
    </div>
  );
}

export default App;
