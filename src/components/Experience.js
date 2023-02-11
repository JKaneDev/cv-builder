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

	render() {
		const {
			onExperienceAdd,
			workExperience,
			onExperienceChange,
			onExperienceDelete,
		} = this.props;
		return (
			<StyledExperience>
				<p className='title'>Practical Experience</p>
				<div>
					{this.props.workExperience.map((item) => (
						<ExperienceItem
							workExperience={workExperience}
							key={item.id}
							item={item}
							onExperienceChange={onExperienceChange}
							onExperienceDelete={onExperienceDelete}
						/>
					))}
				</div>
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

	.title {
		font-size: 3ch;
		letter-spacing: 0.3rem;
		font-weight: bold;
	}

	@media (min-width: 768px) and (max-width: 991px) {
		input {
			height: 35px;
			font-size: 1.75ch;
		}
		textarea {
			font-size: 1.75ch;
			height: 5ch;
		}
	}

	@media (min-width: 992px) and (max-width: 1199px) {
		input {
			height: 40px;
			font-size: 2ch;
		}
		textarea {
			font-size: 2ch;
			height: 10 ch;
		}
	}

	@media (min-width: 1200px) {
		input {
			height: 40px;
			font-size: 2ch;
		}
		textarea {
			font-size: 2ch;
			height: 10 ch;
		}
	}
`;

export default Experience;
