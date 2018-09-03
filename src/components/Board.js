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
	border:2px solid #115599;
	opacity: ${(props)=>{if(props.isControl===false) return '0.2'; else return '1';}};
`

class Board extends Component{

	constructor(){
		super();
		this.state ={
				startNum: 1,
				positionState11:{num:'',isSelected:false},
				positionState12:{num:'',isSelected:false},
				positionState13:{num:'',isSelected:false},
				positionState14:{num:'',isSelected:false},
				positionState15:{num:'',isSelected:false},
				positionState21:{num:'',isSelected:false},
				positionState22:{num:'',isSelected:false},
				positionState23:{num:'',isSelected:false},
				positionState24:{num:'',isSelected:false},
				positionState25:{num:'',isSelected:false},
				positionState31:{num:'',isSelected:false},
				positionState32:{num:'',isSelected:false},
				positionState33:{num:'',isSelected:false},
				positionState34:{num:'',isSelected:false},
				positionState35:{num:'',isSelected:false},
				positionState41:{num:'',isSelected:false},
				positionState42:{num:'',isSelected:false},
				positionState43:{num:'',isSelected:false},
				positionState44:{num:'',isSelected:false},
				positionState45:{num:'',isSelected:false},
				positionState51:{num:'',isSelected:false},
				positionState52:{num:'',isSelected:false},
				positionState53:{num:'',isSelected:false},
				positionState54:{num:'',isSelected:false},
				positionState55:{num:'',isSelected:false},
		}
	}

	setNumber(positionNum){
		//如果已經這一格已經有數字 或是 遊戲還不允許控制則不執行
		if(this.state["positionState"+positionNum].num!==''||this.props.isControl===false) return ;

		let target = {};
		target["positionState"+positionNum] = this.state["positionState"+positionNum];
		target["positionState"+positionNum].num = this.state.startNum;
		target["startNum"] = this.state.startNum+1;
		this.props.chanegeGameLine("下一個放置的數字："+target["startNum"]);
		this.setState(target);
		
	}
	
	selectblock(positionNum){
		//如果已經這一格已經有數字 或是 遊戲還不允許控制則不執行
		if(this.state["positionState"+positionNum].isSelected===true||this.props.isControl===false) return ;

		let target = {};
		target["positionState"+positionNum] = this.state["positionState"+positionNum];
		target["positionState"+positionNum].isSelected = true;
		this.props.chanegeGameLine("你選擇了："+target["positionState"+positionNum].num);
		this.setState(target);
		
		// for(this.p)q
	}

	componentDidUpdate(){
		//遊戲開始
		if(this.props.isStart===false&&this.state.startNum===26)
		{
			this.props.gameStart();
		}
		else if(this.props.isStart===true)
		{
			let selectedBlocks=[]
			for(let i=1;i<=5;i++)
				for(let j=1;j<=5;j++)
					if(this.state["positionState"+i+''+j].isSelected===true)
						selectedBlocks.push(i+''+j);

			console.log(selectedBlocks);
						


		}
	}

	render() {
		return(
			<GameBoard isControl={this.props.isControl}>
				{[11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,51,52,53,54,55].map((positionNum)=>{
					return <Block setNumber={()=>this.setNumber(positionNum)} selectblock={()=>this.selectblock(positionNum)} key={positionNum} positionState={this.state["positionState"+positionNum]} isStart={this.props.isStart} isControl={this.props.isControl}  />
				})}
			</GameBoard>
		)
	}
}

export default Board;