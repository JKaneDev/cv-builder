import React, { Component } from 'react';

class Button extends Component {
	render() {
		const { img, text, onClick } = this.props;
		return (
			<button onClick={onClick}>
				<img src={img} id='svgs' style={{ height: 32, width: 32 }}></img>
				{text}
			</button>
		);
	}
}

export default Button;
