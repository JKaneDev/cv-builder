import React, { Component } from 'react';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			website: this.props.website,
			email: this.props.email,
			location: this.props.location,
			number: this.props.number,
		};
	}

	render() {
		return (
			<aside>
				<p>CONTACT</p>
				<div>
					<img src='' alt='website-img'></img>
					<p>{this.website}</p>
				</div>
				<div>
					<img src='' alt='email-img'></img>
					<p>{this.email}</p>
				</div>
				<div>
					<img src='' alt='location-img'></img>
					<p>{this.location}</p>
				</div>
				<div>
					<img src='' alt='phone-img'></img>
					<p>{this.number}</p>
				</div>
			</aside>
		);
	}
}

export default Contact;
