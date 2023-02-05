import React, { Component } from 'react';

class Experience extends Component {
	constructor(props) {
		super(props);
		this.state = {
			experience: this.props.experience,
		};
	}

	experienceItems = this.state.experience.map((experience) => (
		<ExperienceItem id={experience.id} experience={this.state.experience} />
	));

	render() {
		const { experience } = this.state;
		return (
			<>
				<h3>WORK EXPERIENCE</h3>
				{this.experienceItems}
			</>
		);
	}
}

export default Experience;
