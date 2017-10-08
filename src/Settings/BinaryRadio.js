import React, { Component } from 'react';

export default class BinaryRadio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: props.config
    };
  }

  onChange(event) {
    this.setState({
      config: event.currentTarget.value
      });
  };

  render() {
    return (
      <div className="mdl-list__item settings-list__item">
        <span className="mdl-list__item-primary-content">
          <i className={`material-icons mdl-list__item-avatar ${this.state.config === "on" ? ' settings-icon--active' : ''}`}>{this.props.icon}</i>
          <span className="settings-list__label">{this.props.caption}</span>
        </span>

        <div className="mdl-list__item-secondary-action settings-list__toggle">
          <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
            <input
              type="radio" id={`${this.props.id}-1`}
              className="mdl-radio__button" name={this.props.id}
              value="on"
              checked={this.state.config === "on"}
              onChange={event => {
              this.onChange(event)}}
              />
            <span className="mdl-radio__label">On</span>
          </label>
          <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
            <input
              type="radio" id={`${this.props.id}-2`}
              className="mdl-radio__button" name={this.props.id}
              value="off"
              checked={this.state.config === "off"}
              onChange={event => {
              this.onChange(event)}}
             />
            <span className="mdl-radio__label">Off</span>
          </label>
        </div>

    </div>

    );
  }
}
