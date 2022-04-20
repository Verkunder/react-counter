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
  } */
  /* Вариант через стрелочную*/
  handleIncrement = () => {
    console.log("Hello World!", this);
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
  };
  alertMin({ title }) {
    let promise = new Promise(function (resolve, reject) {
      setTimeout(() => reject(new Error(title)), 1000);
    });

    // reject запустит вторую функцию, переданную в .then
    promise.then(
      (result) => alert(result), // не будет запущена
      (error) => alert(error) // выведет "Error: Whoops!" спустя одну секунду
    );
  }
  render() {
    return (
      <div className="center">
        <div className="container">
          <span className={this.getBadgeClass()}>{this.formatCount()}</span>
          <button
            onClick={this.handleIncrement}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
        </div>
        <div className="container">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => this.alertMin({ title: "Hello World!" })}
          >
            Click
          </button>
        </div>
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
