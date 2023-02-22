import React from 'react';
class Button extends React.Component{
    constructor(props){
        super(props);
        this.state={
            r:2,
            b:3,
            h:5,
            pi:3.14
        };
    }
    changePi=()=>{
        this.setState({pi:"5"});
    }
    changePi1=()=>{
        this.setState({r:"5"});
    }
    changePi2=()=>{
        this.setState({b:"5"});
    }
    changePi3=()=>{
        this.setState({h:"5"});
    }
    render(){
        var side=this.props.s;
        var peri=12*side;
        return(
            <>
            <h1>{this.state.pi*this.state.r*this.state.b*this.state.h}</h1>
            <button onClick={this.changePi}>Click here</button><br></br>
            <button onClick={this.changePi1}>Click here</button><br></br>
            <button onClick={this.changePi2}>Click here</button><br></br>
            <button onClick={this.changePi3}>Click here</button>
            </>
        );
    }
}
export default Button;