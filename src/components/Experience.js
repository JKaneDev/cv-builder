import React, { Component } from 'react';
import ExperienceItem from './ExperienceItem.js';
import Button from './UIElements/Button';
import Add from '../assets/add.svg';
import styled from 'styled-components';

class Experience extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	experienceItems = this.props.workExperience.map((item) => (
		<ExperienceItem
			workExperience={this.props.workExperience}
			id={item.id}
			key={item.id}
			company={item.company}
			role={item.role}
			desc={item.desc}
			start={item.start}
			end={item.end}
			onExperienceChange={this.props.onExperienceChange}
			onExperienceDelete={this.props.onExperienceDelete}
		/>
	));

	render() {
		const { onExperienceAdd } = this.props;
		return (
			<StyledExperience>
				<h2>Practical Experience</h2>
				<div>{this.experienceItems}</div>
				<Button img={Add} onClick={onExperienceAdd} />
			</StyledExperience>
		);
	}
}

const StyledExperience = styled.div`
	background-color: ${({ theme }) => theme.colors.subBackground};
	padding: 2rem;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	input {
		background-color: ${({ theme }) => theme.colors.inputFields};
		color: ${({ theme }) => theme.colors.fontColor};
		height: 4ch;
		padding: 0.35rem 1rem;
		border-radius: 8px;
		letter-spacing: 0.1rem;
	}

	img {
		filter: ${({ theme }) => theme.filters.mainFilter};
		transition: 0.1s all ease-in-out;
	}

	button {
		margin-top: 1rem;
		transition: 0.2s all ease-in-out;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.25rem;
	}

	button:hover {
		transform: translateY(-2.5%);
	}

	button:hover img {
		filter: ${({ theme }) => theme.filters.hoverFilterAlt};
	}

	input::placeholder {
		color: #111;
	}
`;

export default Experience;
