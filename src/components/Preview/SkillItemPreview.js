import React, { Component } from 'react';

class SkillItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { skill } = this.props;
		return (
			<div>
				<p>&bull; {skill}</p>
			</div>
		);
	}
}

export default SkillItem;
