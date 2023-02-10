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
					<h3>{degree}</h3>
					<p>{university}</p>
					<p>{uniDates}</p>
				</div>
				<div>
					<h3>{diploma}</h3>
					<p>{school}</p>
					<p>{schoolDates}</p>
				</div>
			</StyledEducationPreview>
		);
	}
}

const StyledEducationPreview = styled.aside`
	background-color: #111;
	padding: 2rem 0.5rem 1rem 1.5rem;

	.sectionHeader {
		letter-spacing: 0.1rem;
		font-size: 1.6ch;
		margin-bottom: 1rem;
	}
`;

export default Education;
