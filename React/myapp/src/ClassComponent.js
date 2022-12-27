import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props){
    super (props);
    this.state={
      fullName:"Damon Pandit",

    };
    
  }
  changeName=()=>{
    console.log(this,"this");
    this.setState({fullName:"test"});
  }
  
  
  
  render() {
    return (
      <React.Fragment>
      <div>{this.state.fullName}</div>
      <button onClick={this.changeName}>Change Name</button>
      </React.Fragment>
    )
  }
}
