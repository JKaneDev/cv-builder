import React, { Component } from 'react';
import Input from './UIElements/InputField';
import Button from './UIElements/Button';

class SkillItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skills: this.props.skills,
		};
	}

	render() {
		const { handleSkillsChange, handleSkillsDelete } = this.props;
		const { id, skill } = this.state;

		return (
			<div>
				<Input
					type='text'
					value={skill}
					placeholder='E.g. React'
					onChange={(event) =>
						handleSkillsChange(id, skill, event.target.value)
					}
				/>
				<Button text='Delete' onClick={() => handleSkillsDelete(id)} />
			</div>
		);
	}
}

export default SkillItem;
