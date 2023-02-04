import React, { Component } from 'react';

class ExperienceItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			workExperience: this.props.workExperience,
		};
	}

	render() {
		const { handleExperienceDelete, handleExperienceChange, id } = this.props;
		const experience = this.state.workExperience.find((exp) => exp.id === id);
		return (
			<section>
				<div>
					<img src='' alt='work-img' id='work-img'></img>
					<h3>Work Experience</h3>
					<Button
						text='Delete'
						onClick={() => handleExperienceDelete(experience.id)}
					/>
				</div>
				<div>
					<Input
						type='text'
						value={experience.company}
						placeholder='E.g. Microsoft'
						onChange={(event) =>
							handleExperienceChange(experience.id, company, event.target.value)
						}
					/>
					<Input
						type='text'
						value={experience.role}
						placeholder='E.g. Senior Software Engineer'
						onChange={(event) =>
							handleExperienceChange(experience.id, role, event.target.value)
						}
					/>
					<Input
						type='text'
						value={experience.desc}
						placeholder='Describe your main occupation, daily tasks, responsibilities etc.'
						onChange={(event) =>
							handleExperienceChange(experience.id, desc, event.target.value)
						}
					/>
					<Input
						type='text'
						value={experience.start}
						placeholder='E.g. June 2017'
						onChange={(event) =>
							handleExperienceChange(experience.id, start, event.target.value)
						}
					/>
					<Input
						type='text'
						value={experience.end}
						placeholder='E.g. September 2019'
						onChange={(event) =>
							handleExperienceChange(experience.id, end, event.target.value)
						}
					/>
				</div>
			</section>
		);
	}
}