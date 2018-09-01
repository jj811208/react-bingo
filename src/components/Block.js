import React, { Component } from 'react'
import styled from 'styled-components'

const GameBlock = styled.div`
	cursor:pointer;
	display:flex;
	align-items:center;
	justify-content:center;
	border:2px solid ${(props)=>{if(props.isControl===false) return '#999'; else return '#115599';} };
	font-size:40px;
	font-weight:600;
	font-family:"微軟正黑體";
	color:#ddd;
	background:#fff;
`


class Block extends Component{

	render() {
		return <GameBlock onClick={this.props.setNumber} isControl={this.props.isControl}>{this.props.num}</GameBlock>
	}
}

export default Block;
