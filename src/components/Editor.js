import React, { Component } from 'react';

class Editor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			personal: {
				firstName: '',
				surname: '',
				address: '',
				website: '',
				email: '',
				number: '',
				bio: '',
			},
			education: [],
			workExperience: [],
			skills: [],
		};
	}

	handlePersonalChange = (field, event) => {
		const newValue = event.target.value;
		this.setState((prevState) => ({
			personal: {
				...prevState.personal,
				[field]: newValue,
			},
		}));
	};

	handleEducationChange = (id, field, event) => {
		const newEdu = [...this.state.education];
		newEdu[id] = {
			...newEdu[id],
			[field]: event.target.value,
		};
		this.setState({ education: newEdu });
	};

	handleExperienceChange = (id, field, event) => {
		const newExp = [...this.state.education];
		newExp[id] = {
			...newExp[id],
			[field]: event.target.value,
		};
		this.setState({ experience: newExp });
	};

	handleSkillsChange = (id, field, event) => {
		const newSkill = [...this.state.skills];
		newSkill[id] = {
			...newSkill[id],
			[field]: event.target.value,
		};
		this.setState({ skills: newSkill });
	};

	render() {
		return (
			<div>
				<Header />
				<Personal
					personal={this.state.personal}
					onPersonalChange={this.state.handlePersonalChange}
				/>
				<Education
					education={this.state.education}
					onEducationChange={this.state.handleEducationChange}
				/>
				<WorkExperience />
				<Skills />
			</div>
		);
	}
}
