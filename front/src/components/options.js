import React from 'react';
import '../style/option.css'

class Option extends React.Component{

    menu = () =>{
        this.props.menu()
    }

    restart = () =>{
        this.props.restart();
    }

    render(){
    return <div className='optionContainer'>
        <button className='optionButton' onClick={()=>this.menu()}>  Menu </button>
        <button className='optionButton' onClick={()=>this.restart()}>  Restart </button>
    </div>
    }
}


export default Option;