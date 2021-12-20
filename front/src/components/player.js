import React from "react";
import '../style/player.css'


class Player extends React.Component{   
    constructor(props){
        super(props);
        this.state={
            color:"#f7a92b",
            scale:1,
            onePlayerMode:false,
            milisecond:0,
            second:0,
            minute:0,
            counterLock:true
        }
    }

    componentDidMount() {
        this.updateColor();
        if (this.props.onePlayerMode===1){
            this.setState({onePlayerMode:true})
        }
    }
  
    time(){
        this.setState({milisecond:this.state.milisecond+1})
        if (this.state.milisecond===60){
            this.setState({milisecond:0})
            this.setState({second:this.state.second+1})
            if (this.state.second===60){
                this.setState({second:0})
                this.setState({minute:this.state.minute+1})
            }
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.turn!==this.props.turn){
            this.updateColor();
        }
        if (this.state.onePlayerMode && this.state.counterLock){
            this.setState({counterLock:false})
            setTimeout(()=>{
                this.setState({counterLock:true})
                this.time()
            },1000/60)
        }
        if (this.props.gameOVer && this.state.onePlayerMode){
            console.log(this.props.getTime)
           //this.props.getTime(this.state.minute+"::"+this.state.second+"::"+this.state.milisecond)
        }
    }


    updateColor(){
        if (this.props.turn===this.props.name){
            this.setState({color:"#f7a92b"});
            this.setState({scale:1.2});
        } else {
            this.setState({color:"whitesmoke"});
            this.setState({scale:1});
        }
    }

    

    render(){
     return <div className="player" style={{background:(this.state.color),transform:`scale(${this.state.scale})`}}>
         {this.state.onePlayerMode ? 
             <h1 className="timer">{this.state.minute}:{this.state.second}:{this.state.milisecond}</h1>   :
             <h1 className="contentPlayer">Player {this.props.name}</h1>}
         <h1 className="contentPlayer">{this.props.score}</h1>
    </div>
    }
}



export default Player;