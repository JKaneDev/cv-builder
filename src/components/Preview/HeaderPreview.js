import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: this.props.firstName,
			surname: this.props.surname,
			role: this.props.role,
		};
	}

	render() {
		return (
			<header>
				<p>{this.state.firstName}</p>
				<p>{this.state.surname}</p>
				<div>{this.state.role}</div>
			</header>
		);
	}
}

export default Header;
