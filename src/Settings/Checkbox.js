import React, { Component } from 'react';

export default class Checkbox extends Component {
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
          <i className={`material-icons mdl-list__item-avatar ${this.state.config === "on" ? `${this.props.id}--active` : ''}`}>{this.props.icon}</i>
          <span className="settings-list__label">{this.props.caption}</span>
        </span>

        <div className="mdl-list__item-secondary-action settings-list__checkbox">
          <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
            <input type="checkbox" id="checkbox-1" className="mdl-checkbox__input" />
            <div className="checkbox-label__wrapper">
              {/* <i class="material-icons">alarm_off</i> */}
              <span className="mdl-checkbox__label">Mute</span>
            </div>
          </label>
          <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
            <input type="checkbox" id="checkbox-2" className="mdl-checkbox__input" />
            <div className="checkbox-label__wrapper">
              {/* <i class="material-icons">textsms</i> */}
              <span className="mdl-checkbox__label">SMS</span>
            </div>
          </label>
          <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
            <input type="checkbox" id="checkbox-3" className="mdl-checkbox__input" defaultChecked />
            <div className="checkbox-label__wrapper">
              {/* <i class="material-icons">phone_in_talk</i> */}
              <span className="mdl-checkbox__label">VOIP</span>
            </div>
          </label>
        </div>

    </div>

    );
  }
}
