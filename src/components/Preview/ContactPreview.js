import React, { Component } from 'react';
import Website from '../../assets/website.svg';
import Email from '../../assets/email.svg';
import Number from '../../assets/phone.svg';
import Location from '../../assets/pin.svg';
import styled from 'styled-components';

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
			<StyledContact>
				<p className='sectionHeader'>CONTACT</p>
				<li>
					<img src={Website} alt='website-img'></img>
					<p>{this.website}</p>
				</li>
				<li>
					<img src={Email} alt='email-img'></img>
					<p>{this.email}</p>
				</li>
				<li>
					<img src={Location} alt='location-img'></img>
					<p>{this.location}</p>
				</li>
				<li>
					<img src={Number} alt='phone-img'></img>
					<p>{this.number}</p>
				</li>
			</StyledContact>
		);
	}
}

const StyledContact = styled.aside`
	background-color: #111;
	padding: 2rem 0.5rem 1rem 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.sectionHeader {
		letter-spacing: 0.1rem;
		font-size: 1.6ch;
		padding-bottom: 0.5rem;
	}

	li {
		list-style: none;
	}

	img {
		filter: ${({ theme }) => theme.filters.hoverFilter};
		height: 12px;
		width: 12px;
	}
`;

export default Contact;
