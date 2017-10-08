import React, { Component } from 'react';
import BinaryRadio from './BinaryRadio';
import Checkbox from './Checkbox';
import './Settings.css';

export default class Settings extends Component {
  constructor() {
    super();
    this.state = {
      automatedAlerts: 'on',
      p1Auto: 'on',
      p2Auto: 'on',
      p3Auto: 'on'
    };
  }

  render() {
    return (
      <div className="mdl-card mdl-shadow--2dp settings">

      <div className="mdl-list settings-list">

        <BinaryRadio
          caption='Automated Alerts'
          icon='autorenew'
          id="automatedAlerts"
          config={this.state.automatedAlerts}
        />

        <Checkbox
          caption='Priority 1 Alerts'
          icon='error_outline'
          id='p1Alert'
          config={this.state.p1Auto}
        />

        <Checkbox
          caption='Priority 2 Alerts'
          icon='error_outline'
          id='p2Alert'
          config={this.state.p2Auto}
        />

        <Checkbox
          caption='Priority 3 Alerts'
          icon='error_outline'
          id='p3Alert'
          config={this.state.p2Auto}
        />

        <div className="settings-save__wrapper">
          <div className="mdl-layout-spacer"></div>
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect settings-save">
            Save
          </button>
      </div>
    </div>
  </div>
    );
  }
}
