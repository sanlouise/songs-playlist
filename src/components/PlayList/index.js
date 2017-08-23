import React, { Component, PropTypes } from 'react';
import styles from './styles.css';
import map from 'lodash/map';
import reverse from 'lodash/reverse';

const PlayList = (props) => (
  <div className={`results${props.shelling ? ' shell' : ''}`}>

    <div className="shell-item">
      <div className="shell-row-long" />
      <div className="shell-row-medium" />
      <div className="shell-row-short" />
      <div className="shell-row-shortest" />
    </div>
    <div className="shell-item">
      <div className="shell-row-long" />
      <div className="shell-row-medium" />
      <div className="shell-row-short" />
      <div className="shell-row-shortest" />
    </div>
    <div className="shell-item">
      <div className="shell-row-long" />
      <div className="shell-row-medium" />
      <div className="shell-row-short" />
      <div className="shell-row-shortest" />
    </div>
    <div className="shell-item">
      <div className="shell-row-long" />
      <div className="shell-row-medium" />
      <div className="shell-row-short" />
      <div className="shell-row-shortest" />
    </div>

    {map(reverse(props.songs), (song, index) => (
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
