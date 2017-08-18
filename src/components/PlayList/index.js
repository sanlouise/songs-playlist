import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';

const PlayList = (props) => (
  <div className="">
    {map(props.songs, (song) => (

      <div className="song">
        {song.userName}
        {song.songArtist}
        {song.songTitle}
        {song.songNotes}
      </div>
    ))}
  </div>
);

PlayList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PlayList;
