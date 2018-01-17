import React from 'react';
import './Playlist.css';
import { TrackList } from '../TrackList/TrackList.js';

export class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }

  render() {
    return(
      <div className="Playlist">
        <input onChange={this.handleNameChange} defaultValue={this.props.playlist.name}/>
          <TrackList onRemove={this.props.onRemove} tracks={this.props.playlist.songs} />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}
