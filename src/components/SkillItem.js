import React, { Component } from 'react';
import Input from './UIElements/InputField';
import Button from './UIElements/Button';
import Delete from '../assets/delete.svg';
import styled from 'styled-components';

class SkillItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { onSkillChange, onSkillDelete, id, skill } = this.props;

		return (
			<StyledSkillItem>
				<Input
					type='text'
					value={skill}
					placeholder='E.g. React'
					onChange={(event) => onSkillChange(id, 'skill', event)}
				/>
				<Button
					className='btn'
					img={Delete}
					onClick={() => onSkillDelete(id)}
				/>
			</StyledSkillItem>
		);
	}
}

const StyledSkillItem = styled.li`
	display: flex;
	align-items: center;

	input {
		width: 60%;
	}

	input::placeholder {
		color: #111;
	}

	button {
		width: 50px;
		height: 30px;
		border-radius: 8px;
		border: none;
		transition: 0.2s all ease-in-out;
		margin-left: auto;
		position: relative;
		bottom: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button:hover {
		transform: translateY(-2.5%);
		border: none;
	}

	button:hover img {
		filter: ${({ theme }) => theme.filters.hoverFilterAlt};
		transform: translateY(-2.5%);
	}

	button img {
		height: 24px;
		width: 24px;
		transition: 0.1s all ease-in-out;
		padding: 0.3rem;
	}
`;

export default SkillItem;
