import React, { Component } from 'react';

import Tab from './Tab';

export default class Tabs extends Component {
  onTabSelect(name) {
    this.props.onTabSelect(name);
  }

  render() {
    return (
      <div className="mdl-layout__tab-bar aras-nav">
        {this.props.tabs.map(({name, icon}, i) => (
          <Tab
            key={i}
            name={name}
            icon={icon}
            tabIndex={i}
            isActive={this.props.activeTab === name}
            onTabSelect={tabName => {
              this.props.onTabSelect(tabName);
            }}
          />
        ))}
      </div>
    );
  }
}
