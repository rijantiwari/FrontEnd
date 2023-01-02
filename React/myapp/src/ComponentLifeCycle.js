import React, { Component } from 'react'

export default class ComponentLifeCycle extends Component {
    constructor(props){
        super(props);
        this.state = { name:"JAVA"};
    }

    // static getDerivedStateFromProps(props,state){
    //     return { name: props.name1 };
    // }

    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({name:"Python"});
    //     },10000)
    // }

    changeName = () =>{
        this.setState({name:"python"});
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("div1").innerHTML="Before : " + prevState.name;
    }
    render() {
    return (
      <>
      <h1>{this.state.name}</h1>
      <button onClick={this.changeName}>Change Name</button>
      <div id='div1'></div>
      
      </>
      
      
    )
  }
}
