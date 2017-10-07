import React, { Component } from "react";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    fetch("/logs")
      .then(res => res.json())
      .then(resp => {
        this.setState({ resp });
      });
  }

  renderRow(row) {
    return (
      <tr>
        <td>{row[0]}</td>
        <td>{row[1]}</td>
        <td>{row[2]}</td>
        <td>{row[3]}</td>
        <td>{row[4]}</td>
        <td>{row[5]}</td>
      </tr>
    );
  }

  renderTable() {
    return (
      <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
        <thead>
          <tr>
            <th>Type</th>
            <th>Device</th>
            <th>Time</th>
            <th>Date</th>
            <th>Location</th>
            <th>Label</th>
          </tr>
        </thead>
        <tbody>{this.state.resp.map(this.renderRow)}</tbody>
      </table>
    );
  }

  render() {
    return <div className=""> {this.state.resp && this.renderTable()}</div>;
  }
}
