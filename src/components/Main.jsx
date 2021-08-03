import React from 'react';
import _ from 'lodash';
import { movieCategories } from '../App';
import YouTube from 'react-youtube';
import MovieRowContainer from '../containers/MovieRowContainer';
import BannerContainer from '../containers/BannerContainer';
import Navbar from './Navbar/Navbar';

export default function Main({ trailerUrl }) {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  };

  return (
    <>
      <Navbar />
      <BannerContainer />
      {!_.isEmpty(trailerUrl) ? (
        <div id='trailer'>
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      ) : null}
      <div id='movies_container'>
        {movieCategories.map((m, i) => (
          <MovieRowContainer key={i} {...m} />
        ))}
      </div>
    </>
  );
}
