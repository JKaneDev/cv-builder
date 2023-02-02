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

	handleEducationAdd = () => {
		const newEdu = [...this.state.education];
		newEdu.push({ institution: '', degree: '', dates: '' });
		this.setState({ education: newEdu });
	};

	handleEducationDelete = (id) => {
		const updatedEdu = this.state.education.filter(
			(institution) => institution.id !== id
		);
		this.setState({ education: updatedEdu });
	};

	handleExperienceChange = (id, field, event) => {
		const newExp = [...this.state.education];
		newExp[id] = {
			...newExp[id],
			[field]: event.target.value,
		};
		this.setState({ experience: newExp });
	};

	handleExperienceAdd = () => {
		const newExp = [...this.state.education];
		newExp.push({ company: '', role: '', desc: '', start: '', end: '' });
		this.setState({ experience: newExp });
	};

	handleExperienceDelete = (id) => {
		const updatedExp = this.state.experience.filter((job) => job.id !== id);
		this.setState({ experience: updatedExp });
	};

	handleSkillsChange = (id, field, event) => {
		const newSkill = [...this.state.skills];
		newSkill[id] = {
			...newSkill[id],
			[field]: event.target.value,
		};
		this.setState({ skills: newSkill });
	};

	handleSkillsAdd = () => {
		const newSkills = [...this.state.skills];
		newSkills.push({ skillName: '' });
		this.setState({ skills: newSkills });
	};

	handleSkillsDelete = (id) => {
		const updatedSkills = this.state.skills.filter((skill) => skill.id !== id);
		this.setState({ skills: updatedSkills });
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
					onEducationAdd={this.state.handleEducationAdd}
					onEducationDelete={this.state.handleEducationDelete}
				/>
				<WorkExperience
					experience={this.state.experience}
					onExperienceChange={this.state.handleExperienceChange}
					onExperienceAdd={this.state.handleExperienceAdd}
					onExperienceDelete={this.state.handleExperienceDelete}
				/>
				<Skills />
			</div>
		);
	}
}
