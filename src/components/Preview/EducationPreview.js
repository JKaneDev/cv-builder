import React, { Component } from 'react';
import styled from 'styled-components';

class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {
			university: this.props.university,
			degree: this.props.degree,
			uniDates: this.props.uniDates,
			school: this.props.school,
			diploma: this.props.diploma,
			schoolDates: this.props.schoolDates,
		};
	}

	render() {
		return (
			<StyledEducationPreview>
				<p className='sectionHeader'>EDUCATION</p>
				<div>
					<h3>{this.state.degree}</h3>
					<p>{this.state.university}</p>
					<p>{this.state.uniDates}</p>
				</div>
				<div>
					<h3>{this.state.diploma}</h3>
					<p>{this.state.school}</p>
					<p>{this.state.schoolDates}</p>
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
