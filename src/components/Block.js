import React, { Component } from 'react'
import styled from 'styled-components'

const GameBlock = styled.div`
cursor:pointer;
width:50px;
line-height:50px;
height:50px;
border:1px solid #992222;
`


class Block extends Component{
	render() {
		return <GameBlock onClick={this.props.setNumber}>{this.props.num}</GameBlock>
	}
}

export default Block;
