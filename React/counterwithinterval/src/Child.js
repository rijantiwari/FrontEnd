import React, { Component } from 'react'

export default class Child extends Component {
  
  render() {
    console.log(this,"test");
    return (
      <div>{this.props.count}</div>
    )
  }
}
