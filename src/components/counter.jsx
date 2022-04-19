import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  /*Варинат связки через обычную функцию
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    console.log(this);
    this.state.count++;
  } */
  /* Вариант через стрелочную*/
  handleIncrement = () => {
    console.log("Hello World!", this);
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
