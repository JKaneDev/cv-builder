import React, { Component } from 'react';
import Input from './UIElements/InputField';

class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {
			education: this.props.education,
		};
		this.handleEducationChange = this.props.onEducationChange.bind(this);
		this.handleEducationAdd = this.props.onEducationAdd.bind(this);
		this.handleEducationDelete = this.props.onEducationDelete.bind(this);
	}

	render() {
		return (
			<div>
				<h2>Educational Information</h2>
				<img src='' alt='university svg' id='uni-img' />
				<h3>University</h3>
				<Input
					type='text'
					value={this.props.education[0].institution}
					placeholder="E.g. Queen's University Belfast"
					onChange={(event) =>
						this.props.onEducationChange(id, 'institution', event)
					}
				/>
				<Input
					type='text'
					value={this.props.education[0].degree}
					placeholder='E.g. BEng Software Engineering'
					onChange={(event) =>
						this.props.onEducationChange(id, 'degree', event)
					}
				/>
				<Input
					type='text'
					value={this.props.education[0].dates}
					placeholder='E.g. 2015 - 2019'
					onChange={(event) => this.props.onEducationChange(id, 'dates', event)}
				/>
				<img src='' alt='school svg' id='school-img' />
				<h3>School</h3>
				<Input
					type='text'
					value={this.props.education[1].institution}
					placeholder='E.g. Rathmore Grammar School'
					onChange={(event) =>
						this.props.onEducationChange(id, 'institution', event)
					}
				/>
				<Input
					type='text'
					value={this.props.education[1].degree}
					placeholder='E.g. A-Levels: A A B'
					onChange={(event) =>
						this.props.onEducationChange(id, 'degree', event)
					}
				/>
				<Input
					type='text'
					value={this.props.education[1].dates}
					placeholder='E.g. 2008 - 2015'
					onChange={(event) => this.props.onEducationChange(id, 'dates', event)}
				/>
			</div>
		);
	}
}

export default Education;
