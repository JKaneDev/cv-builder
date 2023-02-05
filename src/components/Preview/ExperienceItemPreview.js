import React, { Component } from 'react';

class ExperienceItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.id,
			experience: this.props.experience,
		};
	}

	const;

	render() {
		const { id } = this.props;
		const { experience } = this.state;
		const expItem = experience.find((item) => item.id === id);
		return (
			<>
				<h4>{expItem.role}</h4>
				<div>
					<p>
						{expItem.company} | {expItem.start} - {expItem.end}
					</p>
					<p>{expItem.desc}</p>
				</div>
			</>
		);
	}
}
