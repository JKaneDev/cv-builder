import React, { Component } from 'react';
import SkillItem from './SkillItem';
import Button from './UIElements/Button';

class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	skillItems = this.props.skills.map((skill) => (
		<SkillItem
			id={skill.id}
			key={skill.id}
			skill={skill.skill}
			onSkillChange={this.props.onSkillsChange}
			onSkillDelete={this.props.onSkillsDelete}
		/>
	));

	render() {
		const { handleSkillsAdd } = this.props;

		return (
			<section>
				<div>
					<img src='' alt='skills-img' id='skills-img'></img>
					<h2>Skills & Technologies</h2>
				</div>
				<ul>{this.skillItems}</ul>
				<Button text='&plus; New' onClick={handleSkillsAdd} />
			</section>
		);
	}
}

export default Skills;
