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
		const {
			onExperienceDelete,
			onExperienceChange,
			id,
			company,
			role,
			desc,
			start,
			end,
		} = this.props;

		return (
			<StyledExpItem>
				<div>
					<div>
						<img src={Work} alt='work-img' id='work-img'></img>
						<p>
							Work Experience #
							{this.props.workExperience.findIndex((exp) => exp.id === id) + 1}
						</p>
					</div>

					<Button img={Delete} onClick={() => onExperienceDelete(id)} />
				</div>
				<div>
					<Input
						type='text'
						value={company}
						placeholder='E.g. Microsoft'
						onChange={(event) =>
							onExperienceChange(id, company, event.target.value)
						}
					/>
					<Input
						type='text'
						value={role}
						placeholder='E.g. Senior Software Engineer'
						onChange={(event) =>
							onExperienceChange(id, role, event.target.value)
						}
					/>
					<textarea
						type='text'
						value={desc}
						placeholder='Describe your main occupation, daily tasks, responsibilities etc.'
						onChange={(event) =>
							onExperienceChange(id, desc, event.target.value)
						}
					/>
					<Input
						type='text'
						value={start}
						placeholder='E.g. June 2017'
						onChange={(event) =>
							onExperienceChange(id, start, event.target.value)
						}
					/>
					<Input
						type='text'
						value={end}
						placeholder='E.g. September 2019'
						onChange={(event) =>
							onExperienceChange(id, end, event.target.value)
						}
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
