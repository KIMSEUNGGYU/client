import React, { PureComponent } from "react";

class Habit extends PureComponent {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleRemove = () => {
    this.props.onRemove(this.props.habit);
  };

  render() {
    return (
      <div className="habit">
        <span className="habit-name">{this.props.habit.name}</span>
        <span className="habit-count">{this.props.habit.count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleRemove}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  }
}

export default Habit;
