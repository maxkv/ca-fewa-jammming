import React from 'react';
import './Playlist.css';
import { TrackList } from '../TrackList/TrackList.js';

export class Playlist extends React.Component {
  render() {
    return(
      <div className="Playlist">
        <input defaultValue={this.props.playlist.name}/>
          <TrackList addTrack={this.props.addTrack} tracks={this.props.playlist.songs} />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}
