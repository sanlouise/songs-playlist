import React, { Component, PropTypes } from 'react';
import NavBar from '../NavBar/index.js';
import Field from '../Field/index.js';
import styles from './styles.css';

class PlayListForm extends Component {
  static propTypes = {
    addSong: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = ({
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: '',
    });
  }

  updateField = (key, value) => {
    this.setState({ [key]: value });
  }

  handleSubmit = (event) => {
    console.log(this.props.songArtist, this.props.songNotes)
    event.preventDefault();
    this.props.addSong(this.state);
    this.setState = ({
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: '',
    });
  }

  render() {
    return (
      <div className='playlist-form'>
        <form onSubmit={this.handleSubmit}>
          <Field
            label="Username"
            onChange={(event) => this.updateField('userName', event.target.value)}
            value={this.state.userName}
          />
          <Field
            label="Artist"
            onChange={(event) => this.updateField('songArtist', event.target.value)}
            value={this.state.songArtist}
          />
          <Field
            label="Song Title"
            onChange={(event) => this.updateField('songTitle', event.target.value)}
            value={this.state.songTitle}
          />
          <Field
            label="Song Notes"
            onChange={(event) => this.updateField('songNotes', event.target.value)}
            textarea={true}
            value={this.state.songNotes}
          />
          <button type="submit">Add Artist</button>
        </form>
      </div>
    );
  }
}

export default PlayListForm;
