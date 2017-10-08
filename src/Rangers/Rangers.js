import React, { Component } from 'react';
import Ranger from './Ranger'

export default class Rangers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addNew: 'is-hidden',
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

  onAddNewSelect(event) {
    this.setState({
      addNew: 'show'
      });
  };

  onCancelNew(event) {
    this.setState({
      addNew: 'is-hidden'
      });
  };

  render() {
    return (
      <div>
        {this.state.rangers.map((ranger, i) => (
          <Ranger data={ranger} key={i} />
        ))}

        <div className={`mdl-card mdl-shadow--2dp ranger-add ${this.state.addNew === 'show' ? 'ranger-add--expanded' : ''}`}>
          <div className="mdl-card__title">
            <h2 className={`mdl-card__title-text ranger-add__text ${this.state.addNew === 'show' ? 'is-hidden' : ''}`}>Add new</h2>
            <button
              className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect ranger-add__button"
              onClick={event => {
            this.onAddNewSelect(event)}}>
              <i className="material-icons">add</i>
            </button>

            <div className={`ranger-add__form ${this.state.addNew}`}>
              <form action="#">
                <div className="mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" type="text" id="name" />
                  <label className="mdl-textfield__label">Name...</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" type="text" id="number" />
                  <label className="mdl-textfield__label">Number...</label>
                </div>
                <div className="mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" type="text" id="area" />
                  <label className="mdl-textfield__label">Area...</label>
                </div>
              </form>

              <div className="ranger-add__wrapper">
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect ranger-add__save">
                  Save
                </button>
                <button
                  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect ranger-add__cancel"
                  onClick={event => {
                this.onCancelNew(event)}}>
                  Cancel
                </button>
            </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
