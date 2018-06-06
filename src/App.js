import React, { Component } from 'react';
import './App.css';

let defaultTextColor = '#111';
let defaultStyle = {
  color: defaultTextColor
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
        <h1>Title</h1>
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
