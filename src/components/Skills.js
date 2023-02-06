import React, { Component } from 'react';
import SkillItem from './SkillItem';
import Button from './UIElements/Button';
import SkillIcon from '../assets/skills.svg';
import Add from '../assets/add.svg';

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
					<img src={SkillIcon} alt='skills-img' id='skills-img'></img>
					<h2>Skills & Technologies</h2>
				</div>
				<ul>{this.skillItems}</ul>
				<Button img={Add} onClick={handleSkillsAdd} />
			</section>
		);
	}
}

export default Skills;
