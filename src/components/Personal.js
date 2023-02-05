import React, { Component } from 'react';
import Input from './UIElements/InputField';

class Personal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			personal: this.props.personal,
		};
	}

	render() {
		const { onPersonalChange, personal } = this.props;
		return (
			<div>
				<h2>Personal Information</h2>
				<Input
					type='text'
					value={personal.firstName}
					onChange={(event) => onPersonalChange('firstName', event)}
				/>
				<Input
					type='text'
					value={personal.surname}
					onChange={(event) => onPersonalChange('surname', event)}
				/>
				<Input
					type='text'
					value={personal.address}
					onChange={(event) => onPersonalChange('address', event)}
				/>
				<Input
					type='text'
					value={personal.website}
					onChange={(event) => onPersonalChange('website', event)}
				/>
				<Input
					type='text'
					value={personal.email}
					onChange={(event) => onPersonalChange('email', event)}
				/>
				<Input
					type='number'
					value={personal.number}
					onChange={(event) => onPersonalChange('number', event)}
				/>
				<Input
					type='text'
					value={personal.bio}
					onChange={(event) => onPersonalChange('bio', event)}
				/>
			</div>
		);
	}
}

export default Personal;
