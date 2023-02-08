import React, { Component } from 'react';
import SkillItem from './SkillItem';
import Button from './UIElements/Button';
import SkillIcon from '../assets/skills.svg';
import Add from '../assets/add.svg';
import styled from 'styled-components';

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
			<StyledSkills>
				<div>
					<img src={SkillIcon} alt='skills-img' id='skills-img'></img>
					<p className='title'>Skills & Technologies</p>
				</div>
				<ul>{this.skillItems}</ul>
				<Button img={Add} onClick={handleSkillsAdd} />
			</StyledSkills>
		);
	}
}

const StyledSkills = styled.section`
	background-color: ${({ theme }) => theme.colors.subBackground};
	padding: 2rem;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	div {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	input {
		background-color: ${({ theme }) => theme.colors.inputFields};
		color: ${({ theme }) => theme.colors.fontColor};
		height: 4ch;
		padding: 0.35rem 1rem;
		border-radius: 8px;
		letter-spacing: 0.1rem;
	}

	.title {
		font-size: 2.5ch;
		letter-spacing: 0.3rem;
		font-weight: bold;
	}

	img {
		filter: ${({ theme }) => theme.filters.mainFilter};
		transition: 0.1s all ease-in-out;
	}

	button {
		margin-top: 1rem;
		transition: 0.2s all ease-in-out;
	}

	button:hover {
		border-bottom: 1px solid ${({ theme }) => theme.colors.elemBorderColor};
		transform: translateY(-2.5%);
	}

	button:hover img {
		filter: ${({ theme }) => theme.filters.hoverFilterAlt};
	}
`;

export default Skills;
