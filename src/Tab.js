import React, { Component } from 'react';

export default class Tab extends Component {
  onClick() {
    this.props.onTabSelect(this.props.name);
  }

  render() {
    return (
      <a
        href={`#fixed-tab-${this.props.tabIndex}`}
        className={`mdl-layout__tab aras-nav__tab ${this.props.isActive ? 'is-active' : ''}`}
        onClick={() => {
          this.onClick();
        }}
      >
        <div className="tab-name">
          <i className="material-icons">{this.props.icon}</i>
          <span className="tab-name__text">
            {' '}{this.props.name}
          </span>
      </div>
      </a>
    );
  }
}
