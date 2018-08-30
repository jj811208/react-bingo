import React, { Component } from 'react'
import Block from './Block'
import styled from 'styled-components'

const GameBoard = styled.div`
	display: grid;
	grid-template-rows: repeat(5, 20%) ;
	grid-template-columns: repeat(5, 20%);
	height: 250px;
	width: 250px;
	margin:auto;
	border:1px solid #992222;
`

class Board extends Component{

	constructor(){
		super();
		for(let i=1;i<=25;i++)
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
		if(this.state["position"+num]!='') return ;

		let target = {};
		target["position"+num] = this.state.startnum;
		target["startnum"] = this.state.startnum+1;
		console.log(num);
		this.setState(target);

	}

	render() {
		return(
		<GameBoard>
			{[11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,51,52,53,54,55].map((num, index)=>{
				return <Block setNumber={()=>this.setNumber(num)} key={"position"+num} num={this.state["position"+num]} />
			})}
		</GameBoard>
		)
	}
}

export default Board;