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
      shelling: true,
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
      // Stop shelling once we receive a response
      this.displaySongs(songs);
    });
  }

  addSongToApi = (song) => {
    fetch(SONGS_URL, {
      method: "POST",
      body: JSON.stringify(song),
    })
    .then(res => {
      console.log(res, "Success");
    })
    .catch(err => {
      console.log(err, "Failure");
    });
  }

  addSong = (song) => {
    this.addSongToApi(song);
    const { songs } = this.state;
    this.setState({ songs });
  }

  displaySongs = (songs) => {
    this.setState({ songs, shelling: false });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="app-div">
          <PlayListForm addSong={this.addSong} />
          <PlayList songs={this.state.songs} shelling={this.state.shelling} />
        </div>
      </div>
    )
  }
}

export default App;
