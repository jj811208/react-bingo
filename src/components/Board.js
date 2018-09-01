import React, { Component } from 'react'
import Block from './Block'
import styled from 'styled-components'

const GameBoard = styled.div`
	display: grid;
	grid-template-rows: repeat(5, 20%) ;
	grid-template-columns: repeat(5, 20%);
	height: 400px;
	width: 400px;
	margin:auto;
	border:2px solid ${(props)=>{if(props.isControl===false) return '#999'; else return '#115599';} };
`

class Board extends Component{

	constructor(){
		super();
		this.state ={
				startnum: 1,
				position11:'',
				position12:'',
				position13:'',
				position14:'',
				position15:'',
				position21:'',
				position22:'',
				position23:'',
				position24:'',
				position25:'',
				position31:'',
				position32:'',
				position33:'',
				position34:'',
				position35:'',
				position41:'',
				position42:'',
				position43:'',
				position44:'',
				position45:'',
				position51:'',
				position52:'',
				position53:'',
				position54:'',
				position55:'',
		}
	}

	setNumber(num){
		if(this.state["position"+num]!==''||this.props.isControl===false) return ;

		let target = {};
		target["position"+num] = this.state.startnum;
		target["startnum"] = this.state.startnum+1;
		this.setState(target);
	}

	componentDidUpdate(){
		//遊戲開始
		if(this.props.isStart===false&&this.state.startnum===26)
		{
			this.props.gamestart();
		}
	}

	render() {
		return(
		<GameBoard isControl={this.props.isControl}>
			{[11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,51,52,53,54,55].map((num, index)=>{
				return <Block setNumber={()=>this.setNumber(num)} key={"position"+num} num={this.state["position"+num]} isStart={this.props.isStart} isControl={this.props.isControl}  />
			})}
		</GameBoard>
		)
	}
}

export default Board;