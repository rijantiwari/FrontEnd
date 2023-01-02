import React, { Component } from 'react'

export default class   extends Component {

    componentWillUnmount(){
        alert("This is going to be unmount")
    }
  render() {
    return (
      <h1>hello Js </h1>
    )
  }
}
