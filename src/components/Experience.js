import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
			onExperienceChange={this.handleExperienceChange}
			onExperienceDelete={this.handleExperienceDelete}
		/>
	));

	render() {
		const {
			handleExperienceAdd,
			handleExperienceDelete,
			handleExperienceChange,
		} = this.props;
		return (
			<section>
				<div>
					<img src='' alt='work-img' id='work-img'></img>
					<h2>Practical Experience</h2>
				</div>
				{this.experienceItems}
				<Button text='&plus; New' onClick={handleExperienceAdd} />
			</section>
		);
	}
}
