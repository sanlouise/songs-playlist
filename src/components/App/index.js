import React, { Component } from 'react';
import NavBar from '../NavBar/index.js';
import PlayListForm from '../PlayListForm/index.js';
import PlayList from '../PlayList/index.js';
import styles from './styles.css'

class App extends Component {

  render () {
    return (
      <div className='App'>
        <NavBar />
        <PlayList />
        <PlayListForm />
      </div>
    )
  }
}

export default App;
