import React, { Component } from 'react';
import styled from 'styled-components';

class Button extends Component {
	render() {
		const { img, text, onClick } = this.props;
		return (
			<StyledButton onClick={onClick}>
				<img src={img} id='svgs' style={{ height: 32, width: 32 }}></img>
				{text}
			</StyledButton>
		);
	}
}

const StyledButton = styled.button`
	background-color: black;
`;

export default Button;
