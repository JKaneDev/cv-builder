import React, { Component } from 'react';
import Input from './UIElements/InputField';
import Button from './UIElements/Button';

class SkillItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { onSkillChange, onSkillDelete, id, skill } = this.props;

		return (
			<div>
				<Input
					type='text'
					value={skill}
					placeholder='E.g. React'
					onChange={(event) => onSkillChange(id, skill, event.target.value)}
				/>
				<Button text='Delete' onClick={() => onSkillDelete(id)} />
			</div>
		);
	}
}

export default SkillItem;
