import React, { Component } from 'react';

class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skills: this.props.skills,
		};
	}

	skillItems = this.state.skills.map((skill) => <SkillItem id={skill.id} />);

	render() {
		return (
			<aside>
				<h3>SKILLS</h3>
				<div>{this.skillItems}</div>
			</aside>
		);
	}
}
