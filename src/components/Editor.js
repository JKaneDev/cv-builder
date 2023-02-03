import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
			education: [{ id: uuidv4(), institution: '', degree: '', dates: '' }],
			workExperience: [
				{ id: uuidv4(), company: '', role: '', desc: '', start: '', end: '' },
			],
			skills: [{ id: uuidv4(), skill: '' }],
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
		const newEdu = event.target.value;
		this.setState((prevState) => ({
			education: prevState.education.map((school) => {
				if (school.id === id) {
					return {
						...school,
						[field]: newEdu,
					};
				}
				return school;
			}),
		}));
	};

	handleEducationAdd = () => {
		const newEdu = [...this.state.education];
		newEdu.push({ id: uuidv4(), institution: '', degree: '', dates: '' });
		this.setState({ education: newEdu });
	};

	handleEducationDelete = (id) => {
		const updatedEdu = this.state.education.filter(
			(institution) => institution.id !== id
		);
		this.setState({ education: updatedEdu });
	};

	handleExperienceChange = (id, field, event) => {
		const newExp = event.target.value;
		this.setState((prevState) => ({
			workExperience: prevState.workExperience.map((job) => {
				if (job.id === id) {
					return {
						...job,
						[field]: newExp,
					};
				}
				return job;
			}),
		}));
	};

	handleExperienceAdd = () => {
		const newExp = [...this.state.education];
		newExp.push({
			id: uuidv4(),
			company: '',
			role: '',
			desc: '',
			start: '',
			end: '',
		});
		this.setState({ experience: newExp });
	};

	handleExperienceDelete = (id) => {
		const updatedExp = this.state.experience.filter((job) => job.id !== id);
		this.setState({ experience: updatedExp });
	};

	handleSkillsChange = (id, field, event) => {
		const newSkill = event.target.value;
		this.setState((prevState) => ({
			skills: prevState.skills.map((skill) => {
				if (skill.id === id) {
					return {
						...skill,
						[field]: newSkill,
					};
				}
				return skill;
			}),
		}));
	};

	handleSkillsAdd = () => {
		const newSkills = [...this.state.skills];
		newSkills.push({ id: uuidv4(), skill: '' });
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
				<Skills
					skills={this.state.skills}
					onSkillsChange={this.state.handleSkillsChange}
					onSkillsAdd={this.state.handleSkillsAdd}
					onSkillsDelete={this.state.handleSkillsDelete}
				/>
			</div>
		);
	}
}
