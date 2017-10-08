import React, { Component } from 'react';
import Home from './Home/Home';
import Rangers from './Rangers/Rangers';
import Settings from './Settings/Settings';
import Tabs from './Tabs';
import Footer from './Footer/Footer';
import './App.css';


const LOG_URL = '';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'Settings',
      tabs: [{name: 'Home', icon: 'home'}, {name: 'Rangers', icon: 'person'}, {name: 'Settings', icon: 'settings'}],
      logs: {},
    };
  }

  componentDidMount() {
    const copy = Object.assign({}, this.state.logs);
    this.getMeSomeLogs(copy);
  }

  getMeSomeLogs(currentLogs) {
    // TODO: Fetch logs
    console.log('🐍 🐍', LOG_URL);
  }

  onTabSelect(activeTab) {
    this.setState({ activeTab });
  }

  render() {
    return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header aras-header">
            <div className="mdl-layout__header-row aras-header__row">
              <span className="aras-title"><i className="material-icons aras-icon">toys</i>{' '}A.R.A.S</span>
            </div>

            <Tabs
              activeTab={this.state.activeTab}
              tabs={this.state.tabs}
              onTabSelect={name => {
                this.onTabSelect(name);
              }}
            />

          </header>

          <main className="mdl-layout__content aras-main">

            <div
              id="fixed-tab-0"
              className={
                this.state.activeTab === 'Home' ? '' : 'is-hidden'
              }
            >
              <Home/>
            </div>

            <div
              id="fixed-tab-1"
              className={
                this.state.activeTab === 'Rangers' ? '' : 'is-hidden'
              }
            >
              <Rangers/>
            </div>

            <div
              id="fixed-tab-2"
              className={
                this.state.activeTab === 'Settings' ? '' : 'is-hidden'
              }
            >
              <Settings/>
            </div>

          </main>

          <Footer />

        </div>
      );
    }
  }

export default App;
