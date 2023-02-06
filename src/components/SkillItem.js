import React, { Component } from 'react';
import Input from './UIElements/InputField';
import Button from './UIElements/Button';
import Delete from '../assets/delete.svg';

class SkillItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { onSkillChange, onSkillDelete, id, skill } = this.props;

		return (
			<li>
				<Input
					type='text'
					value={skill}
					placeholder='E.g. React'
					onChange={(event) => onSkillChange(id, skill, event.target.value)}
				/>
				<Button img={Delete} onClick={() => onSkillDelete(id)} />
			</li>
		);
	}
}

export default SkillItem;
