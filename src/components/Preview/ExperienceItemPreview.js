import React, { Component } from 'react';

class ExperienceItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			experience: this.props.experience,
		};
	}

	render() {
		const { id, company, role, desc, start, end } = this.state;
		return (
			<div>
				<h4>{role}</h4>
				<div>
					<p>
						{company} | {start} - {end}
					</p>
					<p>{desc}</p>
				</div>
			</div>
		);
	}
}

export default ExperienceItem;
