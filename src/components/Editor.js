import React, { Component } from 'react';

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
			education: [],
			workExperience: [],
			skills: [],
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

	handleEducationChange = (event) => {
		const newEdu = [...this.state.education];
		newEdu[id] = {
			...newEdu[id],
			[field]: event.target.value,
		};
		this.setState({ education: newEdu });
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
				/>
				<WorkExperience />
				<Skills />
			</div>
		);
	}
}
