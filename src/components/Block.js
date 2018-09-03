import React, { Component } from 'react'
import styled from 'styled-components'

const GameBlock = styled.div`
	cursor:pointer;
	display:flex;
	align-items:center;
	justify-content:center;
	border:2px solid #115599;
	font-size:40px;
	font-weight:600;
	font-family:"微軟正黑體";
	color:${(props)=>{
		if(props.isStart===false)
			return '#ddd';
		else
		{
			if(props.positionState.isSelected===false)
				return '#000';
			else
				return '#992222';
		}
	}};
	background:#fff;
`


class Block extends Component{

	render() {
		return <GameBlock onClick={(this.props.isStart===false)?this.props.setNumber:this.props.selectblock} isControl={this.props.isControl} isStart={this.props.isStart} positionState={this.props.positionState} >{this.props.positionState.num}</GameBlock>
	}
}

export default Block;
