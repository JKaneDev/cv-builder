import React, { Component } from 'react';
import ExperienceItem from './ExperienceItem.js';
import Button from './UIElements/Button';

class Experience extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	experienceItems = this.props.workExperience.map((item) => (
		<ExperienceItem
			workExperience={this.props.workExperience}
			id={item.id}
			key={item.id}
			company={item.company}
			role={item.role}
			desc={item.desc}
			start={item.start}
			end={item.end}
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
