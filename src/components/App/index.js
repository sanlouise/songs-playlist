import React, { Component } from 'react';
import NavBar from '../NavBar/index.js';
import PlayListForm from '../PlayListForm/index.js';
import PlayList from '../PlayList/index.js';
import styles from './styles.css';
const SONGS_URL = 'https://tiny-lasagna-server.herokuapp.com/collections/playlisting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    this.fetchSongs();
  }

  fetchSongs = () => {
    fetch(SONGS_URL)
    .then(res => {
      return res.json();
    })
    .then(songs => {
      this.addSongs(songs);
    });
  }

  addSongToApi = (song) => {
    fetch(SONGS_URL, {
      method: "POST",
      body: JSON.stringify(song),
    })
    .then(res => {
      console.log(res, "yay");
    })
    .catch(err => {
      console.log(err, "boo!");
    });
  }

  addSong = (song) => {
    this.addSongToApi(song);
    const { songs } = this.state;
    songs.push(song);
    this.setState({ songs });
  }

  addSongs = (songs) => {
    this.setState({ songs });
  }

  render() {
    return (
      <div className='App'>
        <NavBar />
        <PlayListForm addSong={this.addSong} />
        <PlayList songs={this.state.songs} />
      </div>
    )
  }
}

export default App;
