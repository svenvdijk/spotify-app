import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#111'
};

class Aggregate extends Component {

  render () {
    return (
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2> Number and text</h2>
      </div>
    );
  }
}

class Filter extends Component {

  render (){
    return (
      <div style={defaultStyle}>
        <img src="" alt=""/>
        <input type="text"/>
      </div>
    );
  }
}

class Playlist extends Component {

  render() {
    return (
      <div className="playlist" style={{...defaultStyle, display: 'inline-block' ,width: '25%'}}>
        <img src="" alt=""/>
        <h3>Playlist Name</h3>
        <ul>
          <li>song 1</li>
          <li>song 2</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 style={{...defaultStyle, 'font-size': '54px'}}>Title</h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    );
  }
}

export default App;
