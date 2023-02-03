import React, { Component } from 'react';
import Input from './UIElements/InputField';

class Personal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			personal: this.props.personal,
		};
		this.handlePersonalChange = this.props.onPersonalChange.bind(this);
	}

	render() {
		return (
			<div>
				<h2>Personal Information</h2>
				<Input
					type='text'
					value={this.props.personal.firstName}
					onChange={(event) => this.props.onPersonalChange('firstName', event)}
				/>
				<Input
					type='text'
					value={this.props.personal.surname}
					onChange={(event) => this.props.onPersonalChange('surname', event)}
				/>
				<Input
					type='text'
					value={this.props.personal.address}
					onChange={(event) => this.props.onPersonalChange('address', event)}
				/>
				<Input
					type='text'
					value={this.props.personal.website}
					onChange={(event) => this.props.onPersonalChange('website', event)}
				/>
				<Input
					type='text'
					value={this.props.personal.email}
					onChange={(event) => this.props.onPersonalChange('email', event)}
				/>
				<Input
					type='number'
					value={this.props.personal.number}
					onChange={(event) => this.props.onPersonalChange('number', event)}
				/>
				<Input
					type='text'
					value={this.props.personal.bio}
					onChange={(event) => this.props.onPersonalChange('bio', event)}
				/>
			</div>
		);
	}
}
