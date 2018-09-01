import React, { Component } from 'react'
import styled from 'styled-components'

const GameText = styled.div`
	display:flex;
	align-items:center;
	justify-content:center;
	margin-bottom:15px;
	font-size:55px;
	font-weight:600;
	font-family:"微軟正黑體";
`


class GameStateText extends Component{

	render() {
		return <GameText>{this.props.gametext}</GameText>
	}
}

export default GameStateText;