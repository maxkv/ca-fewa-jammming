import React from 'react';
import './App.css';
import { SearchResults } from '../SearchResults/SearchResults.js'
import { SearchBar } from '../SearchBar/SearchBar.js'
import { Playlist } from '../Playlist/Playlist.js'

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      searchResults: [
        {id:'sss1', name:'srchsong1', artist: 'arty', album: 'firstalb'},
        {id:'ssss2', name:'srchsong2', artist: 'arty', album: 'firstalb'},
      ],

      playlist: {
        name: 'testlist1',
        songs: [
          {id: 's1', name:'playsong1', artist: 'arty', album: 'firstalb'},
          {id: 's2', name:'playsong2', artist: 'arty', album: 'firstalb'},
        ]
      },

    }
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(newTrack) {
    let songExists = false;
    let currentState = this.state;
    currentState.playlist.songs.forEach(songTrack => {
      if(songTrack.id === newTrack.id && songExists ===false) {
        songExists = true;
      }
    });
    if (!songExists) {
      currentState.playlist.songs.push({id: newTrack.id, name: newTrack.name, artist: newTrack.artist, album: newTrack.album})
    }
    this.setState(currentState);
  }



  render() {

    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App"><br />
        <SearchBar />
        <div className="App-playlist">
          <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
          <Playlist playlist={this.state.playlist} />
        </div>
      </div>
    </div>
  )}
}
