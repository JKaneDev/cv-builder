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
		const { onEducationChange, onEducationAdd, onEducationDelete, education } =
			this.props;
		return (
			<div>
				<h2>Educational Information</h2>
				<img src='' alt='university svg' id='uni-img' />
				<h3>University</h3>
				<Input
					type='text'
					value={education[0].institution}
					placeholder="E.g. Queen's University Belfast"
					onChange={(event) => onEducationChange(id, 'institution', event)}
				/>
				<Input
					type='text'
					value={education[0].degree}
					placeholder='E.g. BEng Software Engineering'
					onChange={(event) => onEducationChange(id, 'degree', event)}
				/>
				<Input
					type='text'
					value={education[0].dates}
					placeholder='E.g. 2015 - 2019'
					onChange={(event) => onEducationChange(id, 'dates', event)}
				/>
				<img src='' alt='school svg' id='school-img' />
				<h3>School</h3>
				<Input
					type='text'
					value={education[1].institution}
					placeholder='E.g. Rathmore Grammar School'
					onChange={(event) => onEducationChange(id, 'institution', event)}
				/>
				<Input
					type='text'
					value={education[1].degree}
					placeholder='E.g. A-Levels: A A B'
					onChange={(event) => onEducationChange(id, 'degree', event)}
				/>
				<Input
					type='text'
					value={education[1].dates}
					placeholder='E.g. 2008 - 2015'
					onChange={(event) => onEducationChange(id, 'dates', event)}
				/>
			</div>
		);
	}
}

export default Education;
