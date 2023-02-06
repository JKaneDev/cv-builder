import React, { Component } from 'react';
import ExperienceItem from './ExperienceItemPreview';

class ExperiencePreview extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	experienceItems = this.props.experience.map((experience) => (
		<ExperienceItem
			id={experience.id}
			key={experience.id}
			company={experience.company}
			role={experience.role}
			desc={experience.desc}
			start={experience.start}
			end={experience.end}
		/>
	));

	render() {
		return (
			<>
				<h3>WORK EXPERIENCE</h3>
				{this.experienceItems}
			</>
		);
	}
}

export default ExperiencePreview;
