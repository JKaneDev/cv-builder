import React, { Component } from 'react';

class ExperienceItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			workExperience: this.props.workExperience,
		};
	}

	render() {
		const { onExperienceDelete, onExperienceChange, id } = this.props;
		const experience = this.state.workExperience.find((exp) => exp.id === id);
		return (
			<section>
				<div>
					<img src='' alt='work-img' id='work-img'></img>
					<h3>
						Work Experience #
						{this.state.workExperience.findIndex((exp) => exp.id === id) + 1}
					</h3>

					<Button
						text='Delete'
						onClick={() => onExperienceDelete(experience.id)}
					/>
				</div>
				<div>
					<Input
						type='text'
						value={experience.company}
						placeholder='E.g. Microsoft'
						onChange={(event) =>
							onExperienceChange(experience.id, company, event.target.value)
						}
					/>
					<Input
						type='text'
						value={experience.role}
						placeholder='E.g. Senior Software Engineer'
						onChange={(event) =>
							onExperienceChange(experience.id, role, event.target.value)
						}
					/>
					<Input
						type='text'
						value={experience.desc}
						placeholder='Describe your main occupation, daily tasks, responsibilities etc.'
						onChange={(event) =>
							onExperienceChange(experience.id, desc, event.target.value)
						}
					/>
					<Input
						type='text'
						value={experience.start}
						placeholder='E.g. June 2017'
						onChange={(event) =>
							onExperienceChange(experience.id, start, event.target.value)
						}
					/>
					<Input
						type='text'
						value={experience.end}
						placeholder='E.g. September 2019'
						onChange={(event) =>
							onExperienceChange(experience.id, end, event.target.value)
						}
					/>
				</div>
			</section>
		);
	}
}

export default ExperienceItem;
