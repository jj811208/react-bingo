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
	/* border:2px solid #115599; */
	opacity: ${(props)=>{if(props.isControl===false) return '0.2'; else return '1';}};
`

class Board extends Component{

	constructor(){
		super();
		this.state ={
				startNum: 1,
				linkCount: 0,
				positionState11:{num:'',isSelected:false,isLink:false},
				positionState12:{num:'',isSelected:false,isLink:false},
				positionState13:{num:'',isSelected:false,isLink:false},
				positionState14:{num:'',isSelected:false,isLink:false},
				positionState15:{num:'',isSelected:false,isLink:false},
				positionState21:{num:'',isSelected:false,isLink:false},
				positionState22:{num:'',isSelected:false,isLink:false},
				positionState23:{num:'',isSelected:false,isLink:false},
				positionState24:{num:'',isSelected:false,isLink:false},
				positionState25:{num:'',isSelected:false,isLink:false},
				positionState31:{num:'',isSelected:false,isLink:false},
				positionState32:{num:'',isSelected:false,isLink:false},
				positionState33:{num:'',isSelected:false,isLink:false},
				positionState34:{num:'',isSelected:false,isLink:false},
				positionState35:{num:'',isSelected:false,isLink:false},
				positionState41:{num:'',isSelected:false,isLink:false},
				positionState42:{num:'',isSelected:false,isLink:false},
				positionState43:{num:'',isSelected:false,isLink:false},
				positionState44:{num:'',isSelected:false,isLink:false},
				positionState45:{num:'',isSelected:false,isLink:false},
				positionState51:{num:'',isSelected:false,isLink:false},
				positionState52:{num:'',isSelected:false,isLink:false},
				positionState53:{num:'',isSelected:false,isLink:false},
				positionState54:{num:'',isSelected:false,isLink:false},
				positionState55:{num:'',isSelected:false,isLink:false},
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

	checkBingoState(selectedBlocks){
		let linkCount = 0;
		let leftUpRightDownNumber=0;
		let rightUpLeftDownNumber=0;
		for(let i=1;i<=5;i++)
		{
			let horizontalNumber=0;
			let verticalNumber=0;
			for(let j=1;j<=5;j++)
			{
				if(selectedBlocks.indexOf(i+''+j)!==-1) //ex 11 12 13 14 15 
					horizontalNumber++;
				if(selectedBlocks.indexOf(j+''+i)!==-1) //ex 11 21 31 41 51
					verticalNumber++;
				if(i===j && selectedBlocks.indexOf(i+''+j)!==-1) //ex 11 22 33 44 55
					leftUpRightDownNumber++;
				if((i+j)===6 && selectedBlocks.indexOf(i+''+j)!==-1)//ex 15 24 33 42 51
					rightUpLeftDownNumber++;
			}
			if(horizontalNumber===5){linkCount++; this.changeBingoBlockBackground(i,'h');}
			if(verticalNumber===5){linkCount++; this.changeBingoBlockBackground(i,'v');}
		}
		if(leftUpRightDownNumber===5){linkCount++; this.changeBingoBlockBackground(1,'l');}
		if(rightUpLeftDownNumber===5){linkCount++; this.changeBingoBlockBackground(1,'r');}

		return linkCount;
	}

	changeBingoBlockBackground(num,type){
		if(num>5||num<1) return;
		let target = {};
		switch (type) {
			case 'h':
				if(this.state["positionState"+num+''+1].isLink===true
				&&this.state["positionState"+num+''+2].isLink===true
				&&this.state["positionState"+num+''+3].isLink===true
				&&this.state["positionState"+num+''+4].isLink===true
				&&this.state["positionState"+num+''+5].isLink===true) return;
				target["positionState"+num+''+1] = this.state["positionState"+num+''+1];
				target["positionState"+num+''+1].isLink = true;
				target["positionState"+num+''+2] = this.state["positionState"+num+''+2];
				target["positionState"+num+''+2].isLink = true;
				target["positionState"+num+''+3] = this.state["positionState"+num+''+3];
				target["positionState"+num+''+3].isLink = true;
				target["positionState"+num+''+4] = this.state["positionState"+num+''+4];
				target["positionState"+num+''+4].isLink = true;
				target["positionState"+num+''+5] = this.state["positionState"+num+''+5];
				target["positionState"+num+''+5].isLink = true;
				this.setState(target);
				break;
			case 'v':
				if(this.state["positionState"+1+''+num].isLink===true
				&&this.state["positionState"+2+''+num].isLink===true
				&&this.state["positionState"+3+''+num].isLink===true
				&&this.state["positionState"+4+''+num].isLink===true
				&&this.state["positionState"+5+''+num].isLink===true) return;
				target["positionState"+1+''+num] = this.state["positionState"+1+''+num];
				target["positionState"+1+''+num].isLink = true;
				target["positionState"+2+''+num] = this.state["positionState"+2+''+num];
				target["positionState"+2+''+num].isLink = true;
				target["positionState"+3+''+num] = this.state["positionState"+3+''+num];
				target["positionState"+3+''+num].isLink = true;
				target["positionState"+4+''+num] = this.state["positionState"+4+''+num];
				target["positionState"+4+''+num].isLink = true;
				target["positionState"+5+''+num] = this.state["positionState"+5+''+num];
				target["positionState"+5+''+num].isLink = true;
				this.setState(target);
				break;
			case 'l':
				if(this.state["positionState11"].isLink===true
				&&this.state["positionState22"].isLink===true
				&&this.state["positionState33"].isLink===true
				&&this.state["positionState44"].isLink===true
				&&this.state["positionState55"].isLink===true) return;
				target["positionState11"] = this.state["positionState11"];
				target["positionState11"].isLink = true;
				target["positionState22"] = this.state["positionState22"];
				target["positionState22"].isLink = true;
				target["positionState33"] = this.state["positionState33"];
				target["positionState33"].isLink = true;
				target["positionState44"] = this.state["positionState44"];
				target["positionState44"].isLink = true;
				target["positionState55"] = this.state["positionState55"];
				target["positionState55"].isLink = true;
				this.setState(target);
				break;
			case 'r':
				if(this.state["positionState15"].isLink===true
				&&this.state["positionState24"].isLink===true
				&&this.state["positionState33"].isLink===true
				&&this.state["positionState42"].isLink===true
				&&this.state["positionState51"].isLink===true) return;
				target["positionState15"] = this.state["positionState15"];
				target["positionState15"].isLink = true;
				target["positionState24"] = this.state["positionState24"];
				target["positionState24"].isLink = true;
				target["positionState33"] = this.state["positionState33"];
				target["positionState33"].isLink = true;
				target["positionState42"] = this.state["positionState42"];
				target["positionState42"].isLink = true;
				target["positionState51"] = this.state["positionState51"];
				target["positionState51"].isLink = true;
				this.setState(target);
				break;
			default:
				break;
		}


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
			
			let linkCount = this.checkBingoState(selectedBlocks);
			if(this.state.linkCount!==linkCount)
			{
				this.setState({linkCount:linkCount})
				this.props.chanegeCountLine(linkCount);
			}
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