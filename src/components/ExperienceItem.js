import React, { Component } from 'react';
import Button from './UIElements/Button';
import Input from './UIElements/InputField';

class ExperienceItem extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {
			onExperienceDelete,
			onExperienceChange,
			id,
			company,
			role,
			desc,
			start,
			end,
		} = this.props;

		return (
			<section>
				<div>
					<img src='' alt='work-img' id='work-img'></img>
					<h3>
						Work Experience #
						{this.props.workExperience.findIndex((exp) => exp.id === id) + 1}
					</h3>

					<Button text='Delete' onClick={() => onExperienceDelete(id)} />
				</div>
				<div>
					<Input
						type='text'
						value={company}
						placeholder='E.g. Microsoft'
						onChange={(event) =>
							onExperienceChange(id, company, event.target.value)
						}
					/>
					<Input
						type='text'
						value={role}
						placeholder='E.g. Senior Software Engineer'
						onChange={(event) =>
							onExperienceChange(id, role, event.target.value)
						}
					/>
					<Input
						type='text'
						value={desc}
						placeholder='Describe your main occupation, daily tasks, responsibilities etc.'
						onChange={(event) =>
							onExperienceChange(id, desc, event.target.value)
						}
					/>
					<Input
						type='text'
						value={start}
						placeholder='E.g. June 2017'
						onChange={(event) =>
							onExperienceChange(id, start, event.target.value)
						}
					/>
					<Input
						type='text'
						value={end}
						placeholder='E.g. September 2019'
						onChange={(event) =>
							onExperienceChange(id, end, event.target.value)
						}
					/>
				</div>
			</section>
		);
	}
}

export default ExperienceItem;
