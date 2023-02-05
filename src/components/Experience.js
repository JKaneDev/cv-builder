import React, { Component } from 'react';
import ExperienceItem from './ExperienceItem.js';

class Experience extends Component {
	constructor(props) {
		super(props);
		this.state = {
			workExperience: this.props.workExperience,
		};
	}

	experienceItems = this.state.workExperience.map((experienceItem) => (
		<ExperienceItem
			id={experienceItem.id}
			onExperienceChange={this.props.onExperienceChange}
			onExperienceDelete={this.props.onExperienceDelete}
		/>
	));

	render() {
		const { onExperienceAdd } = this.props;
		return (
			<section>
				<div>
					<img src='' alt='work-img' id='work-img'></img>
					<h2>Practical Experience</h2>
				</div>
				{this.experienceItems}
				<Button text='&plus; New' onClick={onExperienceAdd} />
			</section>
		);
	}
}

export default Experience;
