import React, { Component } from 'react';
import Header from './HeaderPreview';
import Contact from './ContactPreview';
import Education from './EducationPreview';
import Skills from './SkillsPreview';
import Profile from './ProfilePreview';
import ExperiencePreview from './ExperiencePreview';
import styled from 'styled-components';

class Preview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			personal: this.props.personal,
			education: this.props.education,
			experience: this.props.experience,
			skills: this.props.skills,
		};
	}

	render() {
		return (
			<StyledPreview>
				<div className='header'>
					<Header
						firstName={this.state.personal.firstName}
						surname={this.state.personal.surname}
						role={this.state.experience[0].role}
					/>
				</div>
				<div className='wrapper-one'>
					<Contact
						website={this.state.personal.website}
						email={this.state.personal.email}
						location={this.state.personal.address}
						number={this.state.personal.number}
					/>
					<Education
						university={this.state.education[0].institution}
						degree={this.state.education[0].degree}
						uniDates={this.state.education[0].dates}
						school={this.state.education[1].institution}
						diploma={this.state.education[1].degree}
						schoolDates={this.state.education[1].dates}
					/>
					<Skills skills={this.state.skills} />
				</div>
				<div>
					<Profile bio={this.state.personal.bio} />
					<ExperiencePreview experience={this.state.experience} />
				</div>
			</StyledPreview>
		);
	}
}

const StyledPreview = styled.div`
	background-color: ${({ theme }) => theme.colors.fontColor};
	border-radius: 12px;
	height: 700px;
	display: grid;
	grid-template-columns: 1.3fr 3fr;
	grid-template-rows: 130px 30px 1fr;
	margin-top: 2rem;

	.header {
		grid-column: 1 / -1;
	}

	.wrapper-one {
		background-color: #111;
		grid-column: 1 / 2;
		grid-row: 2 / -1;
		display: flex;
		flex-direction: column;
	}
`;

export default Preview;
