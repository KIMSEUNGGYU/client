import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  render() {
    return (
      <div className="habits">
        <HabitAddForm onAdd={this.props.onAdd} />

        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onRemove={this.props.onRemove}
          />
        ))}
        <button className="habits-reset" onClick={this.props.onReset}>
          reset
        </button>
      </div>
    );
  }
}

export default Habits;
