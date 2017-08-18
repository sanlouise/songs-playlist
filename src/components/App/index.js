import React, { Component } from 'react';
import NavBar from '../NavBar/index.js';
import PlayListForm from '../PlayListForm/index.js';
import PlayList from '../PlayList/index.js';
import styles from './styles.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  addSong = (song) => {
    const { songs } = this.state;
    songs.push(song);
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
