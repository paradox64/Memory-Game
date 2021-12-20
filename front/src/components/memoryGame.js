import React from "react";
import "../style/memoryGame.css";
import Player from "./player";
import Token from "./token";

class MemoryGame extends React.Component{   
    constructor(props){
        super(props)
        this.state={
            players:[],
            tokens:[],
            discovered:[],
            lastSelected:-1,
            playerTurn:1,
            size:40,
            lock:false,
            finishGame:false,
        } 
    }

    componentDidMount() {
        this.addPlayers(this.props.playerNumber);
        this.randomizeGame(this.props.gridSize);
        if  (this.props.gridSize===16){
            this.setState({size:30})
        }
    }

    addPlayers(number){
        let auxList=[];
        for (let i=0;i<number;i++){
            auxList.push(0);
        }
        this.setState({players:auxList})
    }

    randomizeGame = (size) =>{
        let auxList=[];
        let discoverList=[];
        for (let i=0;i<size/2;i++){
            auxList.push(i)
            auxList.push(i)
            discoverList.push(false)
            discoverList.push(false)
        }
        this.setState({tokens:this.shuffleArray(auxList),discovered:discoverList})      
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    finishGame(){
        for (let i=0;this.state.discovered.length>i;i++){
            if (false===this.state.discovered[i]){
                return false;
            }
        }
        return true
    }

    checkSelected = (index) =>{
       if (this.state.lastSelected===-1){
        this.setState({lastSelected:index})
        let auxList=this.state.discovered;
        auxList[index]=true;
        this.setState({discovered:auxList})
       }else{
        if (this.state.tokens[this.state.lastSelected]===this.state.tokens[index]){
            let auxList=this.state.discovered;
            auxList[index]=true;
            auxList[this.state.lastSelected]=true;
            this.setState({discovered:auxList})
            this.setState({lastSelected:-1});
            auxList=this.state.players;
            auxList[this.state.playerTurn-1]=auxList[this.state.playerTurn-1]+1;
            this.setState({players:auxList})
            if (this.finishGame()){
                this.setState({finishGame:true})
            }
        } else{
            let auxList=this.state.discovered;
            auxList[index]=true;
            auxList[this.state.lastSelected]=true;
            this.setState({discovered:auxList});
            this.setState({lock:true})
            setTimeout(()=>{
                this.setState({lock:false})
                if (this.state.playerTurn===this.state.players.length){
                    this.setState({playerTurn:1})
                }else{
                    this.setState({playerTurn:this.state.playerTurn+1})
                }
                let auxList=this.state.discovered;
                auxList[index]=false;
                auxList[this.state.lastSelected]=false;
                this.setState({discovered:auxList})
                this.setState({lastSelected:-1})
            },3000)
        }
       }
    }

   

    render() {
    return <div>
    {this.state.finishGame ? 
        <div className='finalScreen'>
            <h1> Game Over </h1>
            {this.state.players.map((e,index)=>{return <h1 key={index}>Player {index +1}  Score : {e}</h1>})} 
        </div> :
    <div>
    <div className="containerGrid" style={{width:`${this.state.size}%`}}>
        {this.state.tokens.map((item,index)=>{return <Token lock={this.state.lock} discovered={this.state.discovered[index]}  key={index} indice={index} tokenSelected={this.checkSelected} content={item}/>})}
    </div>
    <div className='playerContainer'>
        {this.state.players.map((item,index)=>{return <Player onePlayerMode={this.state.players.length} turn={this.state.playerTurn} key={index} score={item} name={index+1} />})}
    </div>
    </div> 
    }
    </div>
    }
  
}



export default MemoryGame;