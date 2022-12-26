import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super(props);
        this.state = {counterNumber:0,
        };
    }
    changeNumber=()=>{
        
        this.setState((prevState)=> ({counterNumber: prevState.counterNumber + 1}));
    }
    decreaseNumber =()=>{
        this.setState((prevState)=> ({counterNumber: prevState.counterNumber -1}));
    }
  render() {
    return (
        <React.Fragment>
         <div className='counter-number'> {this.state.counterNumber}</div>
         <button className='counter-button' onClick={this.decreaseNumber}> -</button>
         <button className='counter-button' onClick={this.changeNumber}> +</button>


        </React.Fragment>

    )
  }
}
