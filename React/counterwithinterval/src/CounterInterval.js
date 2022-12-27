import React, { Component } from 'react'

export default class CounterInterval extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          intervalId: null
        };
      }
    
      handleIncrement = () => {
        this.setState({
          count: this.state.count + 1
        });
      }
    
      handleDecrement = () => {
        this.setState({
          count: this.state.count - 1
        });
      }
    
      startCounting = () => {
        const intervalId = setInterval(() => {
          this.handleIncrement();
        }, 2000);
        this.setState({ intervalId });
      }
    
      stopCounting = () => {
        clearInterval(this.state.intervalId);
        this.setState({ intervalId: null });
      }
    
      render() {
        return (
          <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.startCounting}>Start</button>
            <button onClick={this.stopCounting}>Stop</button>
            <button onClick={this.handleDecrement}>Decrement</button>
          </div>
        );
      }
}
