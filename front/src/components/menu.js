import React from 'react';
import "../style/menu.css"

class Menu extends React.Component{
    constructor(props){
        super(props)
        this.state={
            theme:"numbers",
            playerNumber:"1",
            gridSize:16,
            themeColor:["#bcceda","#304757"],
            playerNumberColor:["#304757","#bcceda","#bcceda","#bcceda"],
            gridSizeColor:["#304757","#bcceda"]
        }
    }

    changeColor(type,selected){
        if (type==="themeColor"){
            let i=0;
            let auxList=[];
            while (this.state.themeColor.length>=i){
                if (i===selected){
                    auxList.push("#304757");
                }else{
                    auxList.push("#bcceda");
                }
                i++;
            }
            this.setState({themeColor:auxList});
        }else if (type==="playerNumberColor"){
            let i=0;
            let auxList=[];
            while (this.state.playerNumberColor.length>=i){
                if (i===selected){
                    auxList.push("#304757");
                }else{
                    auxList.push("#bcceda");
                }
                i++;
            }
            this.setState({playerNumberColor:auxList});
        } else if (type==="gridSizeColor"){
            let i=0;
            let auxList=[];
            while (this.state.gridSizeColor.length>=i){
                if (i===selected){
                    auxList.push("#304757");
                }else{
                    auxList.push("#bcceda");
                }
                i++;
            }
            this.setState({gridSizeColor:auxList});
        }
    }

    start = () => {
        this.props.start({theme:this.state.theme,playerNumber:this.state.playerNumber,gridSize:this.state.gridSize});
    }


    render(){
        return <div className="containerMenu">
            <h1>Select theme</h1>
            <div className="rowMenu">
               <button className="buttonMenu" style={{background:this.state.themeColor[1]}} onClick={()=>{this.setState({theme:"numbers"});this.changeColor("themeColor",1)}}>Numbers</button>
            </div>
            <h1>Number of playes</h1>
            <div className="rowMenu">
               <button className="buttonMenu" style={{background:this.state.playerNumberColor[0]}} onClick={()=>{this.setState({playerNumber:"1"});this.changeColor("playerNumberColor",0)}}>1</button>
               <button className="buttonMenu" style={{background:this.state.playerNumberColor[1]}} onClick={()=>{this.setState({playerNumber:"2"});this.changeColor("playerNumberColor",1)}}>2</button>
               <button className="buttonMenu" style={{background:this.state.playerNumberColor[2]}} onClick={()=>{this.setState({playerNumber:"3"});this.changeColor("playerNumberColor",2)}}>3</button>
               <button className="buttonMenu" style={{background:this.state.playerNumberColor[3]}} onClick={()=>{this.setState({playerNumber:"4"});this.changeColor("playerNumberColor",3)}}>4</button>
            </div>
            <h1>Grid size</h1>
            <div className="rowMenu">
               <button className="buttonMenu" style={{background:this.state.gridSizeColor[0]}} onClick={()=>{this.setState({gridSize:16});this.changeColor("gridSizeColor",0)}}>4x4</button>
               <button className="buttonMenu" style={{background:this.state.gridSizeColor[1]}} onClick={()=>{this.setState({gridSize:36});this.changeColor("gridSizeColor",1)}}>6x6</button>
            </div>
            <button className="buttonStart" onClick={()=>this.start()}>Start</button>
        </div>
    }
}


export default Menu;

