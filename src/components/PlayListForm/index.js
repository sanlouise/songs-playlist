import React, { Component } from 'react';
import NavBar from '../NavBar/index.js';
import PlayListItem from '../PlayListItem/index.js';
import Field from '../Field/index.js';

class PlayListForm extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: '',
    });

    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addUser(this.state);
    this.setState = ({
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: '',
    });
  }

  updateField(event, key) {
    this.setState({
      [key]: event.target.value
    });
  }

  render () {
    return (

    <div className='form'>
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
            onChange={(event) => this.updateField('message', event.target.value)}
            value={this.state.songTitle}
          />
          <Field
            label="Song Notes"
            onChange={(event) => this.updateField('message', event.target.value)}
            textarea={true}
            value={this.state.songNotes}
          />
        <button type="submit">Add Artist</button>
      </form>
    </div>)
  }
}

export default PlayListForm;
