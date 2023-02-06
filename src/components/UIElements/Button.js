import React, { Component } from 'react';

class Button extends Component {
	render() {
		const { img, text, onClick } = this.props;
		return (
			<button onClick={onClick}>
				{img}
				{text}
			</button>
		);
	}
}

export default Button;
