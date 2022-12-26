import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            fullName:"Rijan Tiwari",

        };
    }
  render() {
    return (
      <div> {this.state.fullName}</div>
    )
  }
}
