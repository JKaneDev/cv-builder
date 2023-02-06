import React, { Component } from 'react';
import Input from './UIElements/InputField';

class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {
			education: this.props.education,
		};
	}

	render() {
		const { onEducationChange } = this.props;
		const { education } = this.state;
		const [university, school] = education;
		return (
			<div>
				<h2>Educational Information</h2>
				<img src='' alt='university svg' id='uni-img' />
				<h3>University</h3>
				<Input
					type='text'
					value={university.institution}
					placeholder="E.g. Queen's University Belfast"
					onChange={(event) =>
						onEducationChange(university.id, 'institution', event)
					}
				/>
				<Input
					type='text'
					value={university.degree}
					placeholder='E.g. BEng Software Engineering'
					onChange={(event) =>
						onEducationChange(university.id, 'degree', event)
					}
				/>
				<Input
					type='text'
					value={university.dates}
					placeholder='E.g. 2015 - 2019'
					onChange={(event) => onEducationChange(university.id, 'dates', event)}
				/>
				<img src='' alt='school svg' id='school-img' />
				<h3>School</h3>
				<Input
					type='text'
					value={school.institution}
					placeholder='E.g. Rathmore Grammar School'
					onChange={(event) =>
						onEducationChange(school.id, 'institution', event)
					}
				/>
				<Input
					type='text'
					value={school.degree}
					placeholder='E.g. A-Levels: A A B'
					onChange={(event) => onEducationChange(school.id, 'degree', event)}
				/>
				<Input
					type='text'
					value={school.dates}
					placeholder='E.g. 2008 - 2015'
					onChange={(event) => onEducationChange(school.id, 'dates', event)}
				/>
			</div>
		);
	}
}

export default Education;
