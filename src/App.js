import React, { Component } from 'react';
import logo from './logo.svg';
import Board from './components/Board'
import GameStateText from './components/GameStateText'
import './App.css';

class App extends Component {

	constructor(){
		super();
		this.state ={
        isStart: false,
        isControl: false,
        gametext:"歡迎來到賓果遊戲",
		}
	}
  gamestart(){
    this.setState({
      isStart:true,
      gametext:"遊戲開始！",
    });
	}


  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        isControl: true,
      gametext:"請將您的數字，填入空格中",
      });
    },2000)
  }

  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <GameStateText gametext={this.state.gametext} />
        <Board gamestart={()=>this.gamestart()} isStart={this.state.isStart} isControl={this.state.isControl} />
      </div>
    );
  }
}

export default App;
