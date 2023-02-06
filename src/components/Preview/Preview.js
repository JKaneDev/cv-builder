import React, { Component } from 'react';
import Header from './HeaderPreview';
import Contact from './ContactPreview';
import Education from './EducationPreview';
import Skills from './SkillsPreview';
import Profile from './ProfilePreview';
import ExperiencePreview from './ExperiencePreview';

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
			<div>
				<Header
					firstName={this.state.personal.firstName}
					surname={this.state.personal.surname}
					role={this.state.experience[0].role}
				/>
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
				<Profile bio={this.state.personal.bio} />
				<ExperiencePreview experience={this.state.experience} />
			</div>
		);
	}
}

export default Preview;
