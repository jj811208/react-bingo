import React, { Component } from 'react'
import styled from 'styled-components'

const GameLine = styled.div`
	display:flex;
	align-items:center;
	justify-content:center;
	margin-bottom:15px;
	font-size:45px;
	font-weight:600;
	font-family:"微軟正黑體";
`


class GameLineState extends Component{

	render() {
		return <GameLine>{this.props.gameLine}</GameLine>
	}
}

export default GameLineState;