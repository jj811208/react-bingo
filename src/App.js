import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './components/Board'
import GameLineState from './components/GameLineState'
import './App.css';

class App extends Component {

	constructor(){
		super();
		this.state ={
        isStart: false,
        isControl: false,
        gameLine:"歡迎來到賓果遊戲",
        countLine:"連線數：0",
		}
  }
  
  gameStart(){
    this.setState({
      isStart:true,
    });
    this.changeGameLine('遊戲開始!!');
  }

  changeGameLine(gameLine){
    let gameLineObj = {};
    gameLineObj.gameLine=gameLine;
    this.setState(gameLineObj);
  }

  changeCountLine(count){
    let countLineObj = {};
    countLineObj.countLine="連線數："+count;
    this.setState(countLineObj);
  }

  changeGameControlState(bool){
    this.setState({isControl:{bool}},)
  }

  componentDidMount(){
    setTimeout(()=>{
      this.changeGameLine('請將您的數字，填入空格中');
      this.changeGameControlState(true);
    },2000)
  }

  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <GameLineState gameLine={this.state.gameLine} />
        <Board gameStart={()=>this.gameStart()} chanegeGameLine={(gameLine)=>this.changeGameLine(gameLine)} chanegeCountLine={(count)=>this.changeCountLine(count)} changeGameControlState={()=>this.changeGameControlState()} isStart={this.state.isStart} isControl={this.state.isControl} />
        <GameLineState gameLine={this.state.countLine} />
      </div>
    );
  }
}

export default App;
