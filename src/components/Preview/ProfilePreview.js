import React, { Component } from 'react';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bio: this.props.bio,
		};
	}

	render() {
		return (
			<>
				<h3>PROFILE</h3>
				<p>{this.state.bio}</p>
			</>
		);
	}
}

export default Profile;
