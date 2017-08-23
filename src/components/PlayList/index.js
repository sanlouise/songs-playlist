import React, { Component, PropTypes } from 'react';
import styles from './styles.css';
import map from 'lodash/map';

const PlayList = (props) => (
  <div className="results">
    {map(props.songs, (song, index) => (
      <div className="result-item" key={`${song.userName}-${index}`}>
        <h4>User: {song.userName}</h4>
        <h4>Artist: {song.songArtist}</h4>
        <h4>Song: {song.songTitle}</h4>
        <h4>Notes: {song.songNotes}</h4>
      </div>
    ))}
  </div>
);

PlayList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PlayList;
