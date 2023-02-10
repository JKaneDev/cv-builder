import React, { Component } from 'react';
import styled from 'styled-components';

class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { university, degree, uniDates, school, diploma, schoolDates } =
			this.props;
		return (
			<StyledEducationPreview>
				<p className='sectionHeader'>EDUCATION</p>
				<div>
					<p className='qualification uni'>{degree}</p>
					<p className='info'>{university}</p>
					<p className='info'>{uniDates}</p>
				</div>
				<div>
					<p className='qualification school'>{diploma}</p>
					<p className='info'>{school}</p>
					<p className='info'>{schoolDates}</p>
				</div>
			</StyledEducationPreview>
		);
	}
}

const StyledEducationPreview = styled.aside`
	background-color: #111;
	padding: 2rem 0.5rem 0.5rem 1.5rem;
	display: flex;
	flex-direction: column;
	color: #808080;
	line-height: 1rem;

	div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.sectionHeader {
		letter-spacing: 0.1rem;
		font-size: 1.6ch;
		margin-bottom: 1rem;
		color: ${({ theme }) => theme.colors.fontColor};
	}

	.qualification {
		font-size: 1.25ch;
		font-weight: bolder;
		letter-spacing: 0.05rem;
		color: ${({ theme }) => theme.colors.fontColor};
	}

	.qualification.uni {
		margin-top: 0.5rem;
	}

	.qualification.school {
		margin-top: 1.5rem;
	}

	.info {
		font-size: 1.25ch;
		letter-spacing: 0.05rem;
	}
`;

export default Education;
