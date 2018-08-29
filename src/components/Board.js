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

		this.state ={
				startnum: 1,
		}
	}

	setNumber(){
		this.setState({
			num:this.state.num+1
		});
	}

	render() {
		return(
		<GameBoard>
			{[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].map((num, index)=>{
				return <Block setNumber={()=>this.setNumber()} key={index} num={this.state.num} />
			})}
		</GameBoard>
		)
	}
}

export default Board;