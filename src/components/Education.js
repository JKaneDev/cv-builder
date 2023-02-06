import React, { Component } from 'react';
import Input from './UIElements/InputField';
import University from '../assets/university.svg';
import School from '../assets/school.svg';

class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { onEducationChange, education } = this.props;
		const [university, school] = education;
		return (
			<div>
				<h2>Educational Information</h2>
				<div>
					<img src={University} alt='university svg' id='uni-img' />
					<h3>University</h3>
				</div>
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
				<div>
					<img src={School} alt='school svg' id='school-img' />
					<h3>School</h3>
				</div>
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
