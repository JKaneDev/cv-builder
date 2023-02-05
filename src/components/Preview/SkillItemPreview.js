import React, { Component } from 'react';

class SkillItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.id,
		};
	}
	render() {
		const { id } = this.props;
		const { skills } = this.state;
		const skill = skills.find((skill) => skill.id === id);
		return (
			<div>
				<p>&bull; {skill.skill}</p>
			</div>
		);
	}
}
