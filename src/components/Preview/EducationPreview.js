import React, { Component } from 'react';

class Education extends Component {
	constructor(props) {
		super(props);
		this.state = {
			university: this.props.university,
			degree: this.props.degree,
			uniDates: this.props.uniDates,
			school: this.props.school,
			diploma: this.props.diploma,
			schoolDates: this.props.schoolDates,
		};
	}

	render() {
		return (
			<aside>
				<p>EDUCATION</p>
				<div>
					<h3>{this.state.degree}</h3>
					<p>{this.state.university}</p>
					<p>{this.state.uniDates}</p>
				</div>
				<div>
					<h3>{this.state.diploma}</h3>
					<p>{this.state.school}</p>
					<p>{this.state.schoolDates}</p>
				</div>
			</aside>
		);
	}
}

export default Education;
