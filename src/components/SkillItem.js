import React, { Component } from 'react';

class SkillItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skills: this.props.skills,
		};
	}

	render() {
		const { handleSkillsChange, handleSkillsDelete } = this.props;
		const { skills } = this.state;
		const skill = skills.find((skill) => skill.id === id);

		return (
			<div>
				<Input
					type='text'
					value={skill.skill}
					placeholder='E.g. React'
					onChange={(event) =>
						handleSkillsChange(skill.id, skill, event.target.value)
					}
				/>
				<Button text='Delete' onClick={() => handleSkillsDelete(skill.id)} />
			</div>
		);
	}
}

export default SkillItem;
