import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#111'
};

let fakeServerData = {
  user: {
    name: 'Sven',
    playlists: [
      {
        name: 'My Favorites',
        songs: [{name: 'Beat it', duration: 312}, 
        {name: 'Summer of 69', duration: 231}, 
        {name: 'Zoutelanden', duration: 120}]
      },
      {
        name: 'Discover Weekly',
        songs: [{name: 'It makes me go (hmm...)', duration: 134}, 
        {name: 'Vahalla', duration: 98}, 
        {name: 'Red Eye', duration: 165}]
      },
      {
        name: 'Jera on Air',
        songs: [{name: 'Bob', duration: 232}, 
        {name: 'Linoleum', duration: 78}, 
        {name: 'Girl in the Green Jacket', duration: 321}]
      },
      {
        name: 'Pirate',
        songs: [{name:'Beer', duration: 145}, 
        {name: 'Kielhaul', duration: 88}, 
        {name: 'Flannigal\'s ball', duration: 234}]
      }
    ]
  }
};

class PlayListCounter extends Component {

  render () {
    return (
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2> {this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {

  render () {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylists) => {
      return songs.concat(eachPlaylists.songs)
    },[])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)

    return (
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2> {Math.round(totalDuration/60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  
  render (){
    return (
      <div style={defaultStyle}>
        <img src="" alt=""/>
        <input type="text" onChange={event => 
          this.props.onTextChange(event.target.value)}/>
      </div>
    );
  }
}

class Playlist extends Component {

  render() {
    let playlist = this.props.playlist
    return (
      <div className="playlist" style={{...defaultStyle, display: 'inline-block' ,width: '25%'}}>
        <img src="" alt=""/>
        <h3>{playlist.name}</h3>
        <ul>
          {playlist.songs.map(song =>
            <li>{song.name}</li>
          )}

        </ul>
      </div>
    );
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      serverData: {},
      filterString: ''
  }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData : fakeServerData});
    }, 500);
    
  }

  render() {
    
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1 style={{...defaultStyle, 'font-size': '54px'}}>
              {this.state.serverData.user.name}'s playlist
            </h1>
            <PlayListCounter playlists={this.state.serverData.user.playlists} />
            <HoursCounter playlists={this.state.serverData.user.playlists} />        
            <Filter onTextChange={text => this.setState({filterString: text})} />
            {this.state.serverData.user.playlists.filter(playlist =>
              playlist.name.toLowerCase().includes(
                this.state.filterString.toLowerCase())
            ).map(playlist => 
              <Playlist playlist={playlist}/>
            )}

          </div> : <h1 style={defaultStyle}>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
