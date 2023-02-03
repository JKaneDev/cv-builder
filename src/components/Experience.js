import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ExperienceItem from './ExperienceItem';

class Experience extends Component {
	constructor(props) {
		super(props);
		this.state = {
			workExperience: this.props.workExperience,
		};
		handleExperienceChange = this.props.onExperienceChange;
		handleExperienceAdd = this.props.onExperienceAdd;
		handleExperienceDelete = this.props.onExperienceDelete;
	}

	experienceItems = this.state.workExperience.map((experienceItem) => (
		<ExperienceItem
			id={experienceItem.id}
			onExperienceChange={this.handleExperienceChange}
			onExperienceAdd={this.handleExperienceAdd}
			onExperienceDelete={this.handleExperienceDelete}
		/>
	));

	render() {
		return (
			<div>
				{this.experienceItems}
				<Button text='&#43; New' onClick={this.handleExperienceAdd} />
			</div>
		);
	}
}
