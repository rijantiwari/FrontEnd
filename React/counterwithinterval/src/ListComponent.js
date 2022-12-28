import React, { Component } from 'react'

export default class ListComponent extends Component {
  render() {
    return (
      <div>{this.props.list}</div>
    )
  }
}
