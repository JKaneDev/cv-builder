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
			<StyledPreview id='cv-preview'>
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

	@media (min-width: 768px) and (max-width: 991px) {
		height: 800px;
		line-height: 1.5rem;
		grid-template-rows: 140px 35px 1fr;
	}

	@media (min-width: 992px) and (max-width: 1199px) {
		height: 840px;
		line-height: 1.75rem;
		grid-template-rows: 145px 40px 1fr;
	}

	@media (min-width: 1200px) {
		height: 850px;
		line-height: 1.75rem;
		grid-template-rows: 150px 40px 1fr;
	}
`;

export default Preview;
