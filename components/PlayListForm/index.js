import React, { Component } from 'react';
import NavBar from '../NavBar/index.js';
import PlayListItem from '../PlayListItem/index.js';
import Form from '../Field/index.js';

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: '',
    };
    this.updateField = this.updateField.bind(this);
  }

  updateField(field, value) {
    this.setState({ [field]: value });
  }

  render () {
    return (

    <div className=''>
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
        <Button
          formValues={this.state}
        />
    </div>)
  }
}

export default PlayList;
