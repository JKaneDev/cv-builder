import React, { Component } from 'react';
import Website from '../../assets/website.svg';
import Email from '../../assets/email.svg';
import Number from '../../assets/phone.svg';
import Location from '../../assets/pin.svg';

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
					<img src={Website} alt='website-img'></img>
					<p>{this.website}</p>
				</div>
				<div>
					<img src={Email} alt='email-img'></img>
					<p>{this.email}</p>
				</div>
				<div>
					<img src={Location} alt='location-img'></img>
					<p>{this.location}</p>
				</div>
				<div>
					<img src={Number} alt='phone-img'></img>
					<p>{this.number}</p>
				</div>
			</aside>
		);
	}
}

export default Contact;
