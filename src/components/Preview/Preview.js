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
		this.state = {};
	}

	render() {
		const { personal, education, experience, skills } = this.props;
		return (
			<StyledPreview>
				<div className='header'>
					<Header
						firstName={personal.firstName}
						surname={personal.surname}
						role={experience[0].role}
					/>
				</div>
				<div className='wrapper-one'>
					<Contact
						website={personal.website}
						email={personal.email}
						location={personal.address}
						number={personal.number}
					/>
					<Education
						university={education[0].institution}
						degree={education[0].degree}
						uniDates={education[0].dates}
						school={education[1].institution}
						diploma={education[1].degree}
						schoolDates={education[1].dates}
					/>
					<Skills skills={skills} />
				</div>
				<div>
					<Profile bio={personal.bio} />
					<ExperiencePreview experience={experience} />
				</div>
			</StyledPreview>
		);
	}
}

const StyledPreview = styled.div`
	background-color: ${({ theme }) => theme.colors.fontColor};
	border-radius: 12px;
	height: 750px;
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
