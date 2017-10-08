import React, { Component } from 'react';
import './Ranger.css';

export default class Ranger extends Component {
  render() {
    return (
      <div className="mdl-card mdl-shadow--2dp ranger-card">
        <div className="mdl-card__title">
          <i className="material-icons mdl-list__item-avatar">person</i>
          <h2 className="mdl-card__title-text ranger-name">{this.props.data.name}</h2>
        </div>
        <div className="mdl-card__supporting-text ranger-details">
          <i className="material-icons">location_on</i>
          <span className="ranger-details__item">
            {' '}Location:{' '}{this.props.data.lat}{', '}{this.props.data.lon}
          </span>
        </div>
        <div className="mdl-card__supporting-text ranger-details">
          <i className="material-icons">phone</i>
          <span className="ranger-details__item">
            {' '}Number:{' '}{this.props.data.tel}
          </span>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"><i className="material-icons">message</i>
            {' '}Message
          </a>
        </div>
        <div className="mdl-card__menu">
          <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
            <i className="material-icons">mode_edit</i>
          </button>
        </div>
      </div>
    );
  }
}
