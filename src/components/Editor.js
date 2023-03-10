import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { autofill } from './Utils/autofill';
import Preview from './Preview/Preview';
import Header from './Header';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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
			education: [
				{ id: uuidv4(), institution: '', degree: '', dates: '' },
				{ id: uuidv4(), institution: '', degree: '', dates: '' },
			],
			workExperience: [
				{ id: uuidv4(), company: '', role: '', desc: '', start: '', end: '' },
			],
			skills: [{ id: uuidv4(), skill: '' }],
		};
	}

	savePreview = () => {
		html2canvas(document.getElementById('cv-preview')).then((canvas) => {
			const pdf = new jsPDF('p', 'mm', 'a4');
			pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
			pdf.save('cv-preview.pdf');
		});
	};

	handleAutofill = () => {
		this.setState(autofill(this.state));
	};

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

	handleEducationDelete = (id) => {
		const updatedEdu = this.state.education.filter(
			(institution) => institution.id !== id
		);
		this.setState({ education: updatedEdu });
	};

	handleExperienceChange = (id, field, event) => {
		this.setState((prevState) => ({
			workExperience: prevState.workExperience.map((job) => {
				if (job.id === id) {
					return {
						...job,
						[field]: event.target.value,
					};
				}
				return job;
			}),
		}));
	};

	handleExperienceAdd = () => {
		const newExp = {
			id: uuidv4(),
			company: '',
			role: '',
			desc: '',
			start: '',
			end: '',
		};

		this.setState((prevState) => ({
			workExperience: [...prevState.workExperience, newExp],
		}));
	};

	handleExperienceDelete = (id) => {
		const updatedExp = this.state.workExperience.filter((job) => job.id !== id);
		this.setState({ workExperience: updatedExp });
	};

	handleSkillsChange = (id, field, event) => {
		this.setState(
			(prevState) => ({
				skills: prevState.skills.map((skill) => {
					if (skill.id === id) {
						return {
							...skill,
							[field]: event.target.value,
						};
					}
					return skill;
				}),
			}),
			() => console.log(this.state.skills[0])
		);
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
			<StyledEditor>
				<Header onAutofill={this.handleAutofill} onSave={this.savePreview} />
				<Personal
					personal={this.state.personal}
					onPersonalChange={this.handlePersonalChange}
				/>
				<Education
					education={this.state.education}
					onEducationChange={this.handleEducationChange}
					onEducationAdd={this.handleEducationAdd}
					onEducationDelete={this.handleEducationDelete}
				/>
				<Experience
					workExperience={this.state.workExperience}
					onExperienceChange={this.handleExperienceChange}
					onExperienceAdd={this.handleExperienceAdd}
					onExperienceDelete={this.handleExperienceDelete}
				/>
				<Skills
					skills={this.state.skills}
					onSkillsChange={this.handleSkillsChange}
					onSkillsAdd={this.handleSkillsAdd}
					onSkillsDelete={this.handleSkillsDelete}
				/>
				<Preview
					personal={this.state.personal}
					education={this.state.education}
					experience={this.state.workExperience}
					skills={this.state.skills}
				/>
			</StyledEditor>
		);
	}
}

const StyledEditor = styled.div`
	min-height: 100vh;
	width: 100vw;
	background-color: black;
	margin: 0;
	padding: 1rem;
	color: ${({ theme }) => theme.colors.fontColor};
	font-family: 'Helvetica', 'Futura', 'Roboto', sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;

	input:hover,
	textarea:hover {
		background-color: #2d2d2d;
	}

	input:active,
	input:focus {
		background-color: #2d2d2d;
	}

	@media (max-width: 767px) {
		> * {
			width: 550px;
		}
	}

	@media (min-width: 768px) and (max-width: 991px) {
		> * {
			width: 600px;
		}
	}

	@media (min-width: 992px) and (max-width: 1199px) {
		> * {
			width: 600px;
		}
	}

	@media (min-width: 1200px) {
		> * {
			width: 650px;
		}
	}
`;

export default Editor;
