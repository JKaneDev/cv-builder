import React, { Component } from 'react';
import SkillItem from './SkillItemPreview';

class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	skillItems = this.props.skills.map((skill) => (
		<SkillItem id={skill.id} skill={skill.skill} key={skill.id} />
	));

	render() {
		return (
			<aside>
				<h3>SKILLS</h3>
				<div>{this.skillItems}</div>
			</aside>
		);
	}
}

export default Skills;
