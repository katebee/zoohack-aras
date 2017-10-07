import React, { Component } from 'react';

export default class Tab extends Component {
  onClick() {
    this.props.onTabSelect(this.props.name);
  }

  render() {
    return (
      <a
        href={`#fixed-tab-${this.props.tabIndex}`}
        className={`mdl-layout__tab ${this.props.isActive ? 'is-active' : ''}`}
        onClick={() => {
          this.onClick();
        }}
      >
        {this.props.name}
      </a>
    );
  }
}
