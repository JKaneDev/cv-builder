import React, { Component } from 'react';

class TextArea extends Component {
	render() {
		return (
			<textarea
				placeholder={this.props.placeholder}
				type={this.props.type}
				value={this.props.value}
				onChange={this.props.onChange}
			/>
		);
	}
}

export default TextArea;
