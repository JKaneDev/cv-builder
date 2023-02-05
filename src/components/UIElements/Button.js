import React from 'react';

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
