import React, { Component } from 'react';
import Button from './UIElements/Button';
import Input from './UIElements/InputField';
import Work from '../assets/work.svg';
import Delete from '../assets/delete.svg';
import styled from 'styled-components';

class ExperienceItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { onExperienceDelete, onExperienceChange, item, workExperience } =
			this.props;

		return (
			<StyledExpItem>
				<div>
					<div>
						<img src={Work} alt='work-img' id='work-img'></img>
						<p>
							Work Experience #
							{workExperience.findIndex((exp) => exp.id === item.id) + 1}
						</p>
					</div>

					<Button img={Delete} onClick={() => onExperienceDelete(item.id)} />
				</div>
				<div>
					<Input
						name='company'
						type='text'
						value={item.company}
						placeholder='E.g. Microsoft'
						onChange={(event) => onExperienceChange(item.id, 'company', event)}
					/>
					<Input
						name='role'
						type='text'
						value={item.role}
						placeholder='E.g. Senior Software Engineer'
						onChange={(event) => onExperienceChange(item.id, 'role', event)}
					/>
					<textarea
						name='desc'
						type='text'
						value={item.desc}
						placeholder='Describe your main occupation, daily tasks, responsibilities etc.'
						onChange={(event) => onExperienceChange(item.id, 'desc', event)}
					/>
					<Input
						name='start'
						type='text'
						value={item.start}
						placeholder='E.g. June 2017'
						onChange={(event) => onExperienceChange(item.id, 'start', event)}
					/>
					<Input
						name='end'
						type='text'
						value={item.end}
						placeholder='E.g. September 2019'
						onChange={(event) => onExperienceChange(item.id, 'end', event)}
					/>
				</div>
			</StyledExpItem>
		);
	}
}

const StyledExpItem = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	div:nth-of-type(1) {
		display: flex;
		align-items: center;
		letter-spacing: 0.15rem;
		gap: 0.5rem;
	}

	div:nth-of-type(1) div {
		display: flex;
		align-items: center;
	}

	div:nth-of-type(1) button {
		width: 50px;
		height: 30px;
		border-radius: 8px;
		border: none;
		margin-left: auto;
		transition: 0.2s all ease-in-out;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	div:nth-of-type(1) button:hover {
		transform: translateY(-2.5%);
	}

	div:nth-of-type(1) button:hover img {
		filter: ${({ theme }) => theme.filters.hoverFilterAlt};
		transform: translateY(-2.5%);
	}

	div:nth-of-type(1) button img {
		height: 24px;
		width: 24px;
		transition: 0.1s all ease-in-out;
		padding: 0.3rem;
	}

	div:nth-of-type(2) {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	textarea {
		background-color: ${({ theme }) => theme.colors.inputFields};
		color: ${({ theme }) => theme.colors.fontColor};
		height: 4ch;
		padding: 0.35rem 1rem;
		border-radius: 8px;
		letter-spacing: 0.1rem;
		min-height: 60px;
	}

	textarea::placeholder {
		color: #111;
	}
`;

export default ExperienceItem;
