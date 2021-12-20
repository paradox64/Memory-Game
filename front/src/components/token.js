import React from 'react';
import "../style/token.css";

class Token extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content:"",
        }
    }

    componentDidMount(){
        this.setState({content:this.props.content});
    }

    tokenSelected(e){
        if (!this.props.discovered){
            this.props.tokenSelected(e.props.indice)
        }
    }


    render(){
        return <div className="tokenContainer" onClick={()=>{this.props.lock ?  console.log("nop") : this.tokenSelected(this)}}>
            {this.props.discovered ? <h1 className='contentToken' >{this.state.content}</h1>:null}
        </div>
    }
}


export default Token;