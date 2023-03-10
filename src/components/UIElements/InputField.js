import React, { Component } from 'react';

class Input extends Component {
	render() {
		return (
			<input
				placeholder={this.props.placeholder}
				type={this.props.type}
				value={this.props.value}
				onChange={this.props.onChange}
			/>
		);
	}
}

export default Input;
