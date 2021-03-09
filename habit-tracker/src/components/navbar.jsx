import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <>
        <header className="navbar">
          <i className="fas fa-leaf navbar-logo"></i>
          <span> Habit Tracker</span>
          <div className="navbar-count">{this.props.totalCount}</div>
        </header>
      </>
    );
  }
}

export default Navbar;
