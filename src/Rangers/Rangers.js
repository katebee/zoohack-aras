import React, { Component } from 'react';
import Ranger from './Ranger'

export default class Rangers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rangers: [
        {
          lat: -2.48,
          lon: 38.18,
          name: 'Kate Whalen',
          tel: '+4412341234'
        },
        {
          lat: -2.48,
          lon: 38.18,
          name: 'Guy Fawkes',
          tel: '+4405111605'
        },
        {
          lat: -2.48,
          lon: 38.18,
          name: 'Terry Pratchett',
          tel: '+4412341234'
        },
      ]

    };
  }

  render() {
    return (
      <div>
        {this.state.rangers.map((ranger, i) => (
          <Ranger data={ranger} key={i} />
        ))}

        <div className="mdl-card mdl-shadow--2dp ranger-add">
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text ranger-add__text">Add new</h2>
            <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect ranger-add__button">
              <i className="material-icons">add</i>
            </button>
          </div>
      </div>

      </div>
    );
  }
}
