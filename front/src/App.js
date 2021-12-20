import React from 'react';
import './App.css';
import MemoryGame from './components/memoryGame';
import Menu from './components/menu';
import Option from './components/options';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      menuHidden:false,
      theme:"",
      playerNumber:"",
      gridSize:""
    }
  }

  menuOptionHandle = () =>{
    this.setState({menuHidden:false})
  }
  restartOptionHandle = ()=>{
    this.setState({menuHidden:false})
    setTimeout(()=>{
      this.setState({menuHidden:true})
    },10)
    
  }

  startHandle = (MenuData) => {
    this.setState({theme:MenuData.theme,playerNumber:MenuData.playerNumber,gridSize:MenuData.gridSize,menuHidden:true})
  }
  
  render(){
  return <div className="App">
      {this.state.menuHidden ? 
      <div>
        <Option restart={this.restartOptionHandle} menu={this.menuOptionHandle}/>
        <MemoryGame gridSize={this.state.gridSize} theme={this.state.theme} playerNumber={this.state.playerNumber}/> 
      </div>:
        <Menu start={this.startHandle}/>
     }
    </div>
  }
}

export default App;
