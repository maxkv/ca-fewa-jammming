import React from 'react';
import './Track.css';

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickAdd = this.handleClickAdd.bind(this);
  }

  renderAction(isRemoval) {
    return isRemoval ? '-' : '+';
  }

  handleClickAdd() {
    this.props.onAdd(this.props.track);
  }

  handleClickRemove() {
    this.props.onRemove(this.props.track);
  }


  render() {
    return(
      <div className="Track">
        <div className="Track-information">
          <div>
            <h3>{this.props.track.name}</h3>
            <p>{this.props.track.artist} | {this.props.track.album}</p>
          </div>
        </div>
        <a onClick={this.handleClickAdd} className="Track-action">+</a>
        <a onClick={this.handleClickRemove} className="Track-action">-</a>
      </div>
    )
  }
}
