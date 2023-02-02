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

	handleFirstNameChange = (event) => {
		const newFirstName = event.target.value;
		this.setState((prevState) => ({
			personal: {
				...prevState.personal,
				firstName: newFirstName,
			},
		}));
	};

	handleSurnameChange = (event) => {
		const newSurname = event.target.value;
		this.setState((prevState) => ({
			personal: {
				...prevState.personal,
				surname: newSurname,
			},
		}));
	};

	handleAddressChange = (event) => {
		const newAddress = event.target.value;
		this.setState((prevState) => ({
			personal: {
				...prevState.personal,
				address: newAddress,
			},
		}));
	};

	handleWebsiteChange = (event) => {
		const newWebsite = event.target.value;
		this.setState((prevState) => ({
			personal: {
				...prevState.personal,
				website: newWebsite,
			},
		}));
	};

	handleEmailChange = (event) => {
		const newEmail = event.target.value;
		this.setState((prevState) => ({
			personal: {
				...prevState.personal,
				email: newEmail,
			},
		}));
	};

	handleNumberChange = (event) => {
		const newNumber = event.target.value;
		this.setState((prevState) => ({
			personal: {
				...prevState.personal,
				number: newNumber,
			},
		}));
	};

	handleBioChange = (event) => {
		const newBio = event.target.value;
		this.setState((prevState) => ({
			personal: {
				...prevState.personal,
				bio: newBio,
			},
		}));
	};

	render() {
		return;
	}
}
