import React, { Component } from 'react';
import Input from './UIElements/InputField';
import University from '../assets/university.svg';
import School from '../assets/school.svg';
import styled from 'styled-components';

class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { onEducationChange, education } = this.props;
		const [university, school] = education;
		return (
			<StyledEducation>
				<p className='title'>Educational Information</p>
				<div>
					<img src={University} alt='university svg' id='uni-img' />
					<p className='uni'>University</p>
				</div>
				<Input
					name='institution'
					type='text'
					value={university.institution}
					placeholder='E.g. Massachusetts Institute of Technology (M.I.T)'
					onChange={(event) =>
						onEducationChange(university.id, 'institution', event)
					}
				/>
				<Input
					name='degree'
					type='text'
					value={university.degree}
					placeholder='E.g. Bsc Computer Science'
					onChange={(event) =>
						onEducationChange(university.id, 'degree', event)
					}
				/>
				<Input
					name='dates'
					type='text'
					value={university.dates}
					placeholder='E.g. 2015 - 2019'
					onChange={(event) => onEducationChange(university.id, 'dates', event)}
				/>
				<div>
					<img src={School} alt='school svg' id='school-img' />
					<p className='school'>School</p>
				</div>
				<Input
					type='text'
					name='institution'
					value={school.institution}
					placeholder='E.g. Bale Valley Grammar School'
					onChange={(event) =>
						onEducationChange(school.id, 'institution', event)
					}
				/>
				<Input
					type='text'
					name='degree'
					value={school.degree}
					placeholder='E.g. A-Levels: A A B'
					onChange={(event) => onEducationChange(school.id, 'degree', event)}
				/>
				<Input
					type='text'
					name='dates'
					value={school.dates}
					placeholder='E.g. 2008 - 2015'
					onChange={(event) => onEducationChange(school.id, 'dates', event)}
				/>
			</StyledEducation>
		);
	}
}

const StyledEducation = styled.div`
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
	}

	div {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		letter-spacing: 0.2rem;
		margin-bottom: 0.35rem 0;
	}

	.title {
		font-size: 3ch;
		letter-spacing: 0.3rem;
		font-weight: bold;
		padding-bottom: 1rem;
	}

	input::placeholder {
		color: #111;
	}
`;

export default Education;
