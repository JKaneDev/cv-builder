import React, { Component } from 'react';
import Website from '../../assets/website.svg';
import Email from '../../assets/email.svg';
import Number from '../../assets/phone.svg';
import Location from '../../assets/pin.svg';
import styled from 'styled-components';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { website, email, location, number } = this.props;
		return (
			<StyledContact>
				<p className='sectionHeader'>CONTACT</p>
				<li>
					<img src={Website} alt='website-img'></img>
					<p>{website}</p>
				</li>
				<li>
					<img src={Email} alt='email-img'></img>
					<p>{email}</p>
				</li>
				<li>
					<img src={Location} alt='location-img'></img>
					<p>{location}</p>
				</li>
				<li>
					<img src={Number} alt='phone-img'></img>
					<p>{number}</p>
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
	line-height: 1rem;

	.sectionHeader {
		letter-spacing: 0.1rem;
		font-size: 1.6ch;
		padding-bottom: 0.5rem;
	}

	li {
		list-style: none;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.25ch;
		letter-spacing: 0.05rem;
		color: #808080;
	}

	img {
		filter: ${({ theme }) => theme.filters.hoverFilter};
		height: 12px;
		width: 12px;
	}

	@media (min-width: 992px) and (max-width: 1199px) {
		li p {
			font-size: 2ch;
			padding: 0.25rem;
		}
	}

	@media (min-width: 1200px) {
		li p {
			font-size: 2ch;
			padding: 0.25rem;
		}
	}
`;

export default Contact;
