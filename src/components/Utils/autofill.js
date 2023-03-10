import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const exampleData = {
	personal: {
		firstName: 'David',
		surname: 'Jones',
		address: '555 Locker Pass',
		website: 'http://davyjoneslocker.io',
		email: 'davyjones@locker.com',
		number: '555-555-5555',
		bio: 'A seasoned and dedicated Senior JavaScript Engineer with 6 years of experience in developing and maintaining complex web applications. Proficient in modern JavaScript frameworks such as React, libraries such as Vite, and experienced in using Node.js for server-side development. A strong believer in creating clean, maintainable, and scalable code, as well as adhering to Agile methodologies. Committed to delivering high-quality solutions to meet business requirements and improve user experience.',
	},
	education: [
		{
			id: uuidv4(),
			institution: 'University Of London',
			degree: 'BSc Computer Science',
			dates: '2017 - 2019',
		},
		{
			id: uuidv4(),
			institution: 'Belfast Royal College',
			degree: 'A-Levels: A* A* A* A*',
			dates: '2008 - 2015',
		},
	],
	workExperience: [
		{
			id: uuidv4(),
			company: 'Twitter',
			role: 'Senior Front-End Developer',
			desc: "As a Senior Front-End Developer at Twitter, I was responsible for building and maintaining the company's website and mobile applications. I worked with a team of designers and developers to create user-friendly interfaces and improve the overall user experience. I utilized my expertise in HTML, CSS, JavaScript, and React to build scalable and efficient front-end systems. I also collaborated with product managers to gather requirements and ensure that the final product met the needs of the business and its users.",
			start: 'November 2019',
			end: 'Present',
		},
		{
			id: uuidv4(),
			company: 'Netflix',
			role: 'Junior Front-End Developer',
			desc: 'As a junior front-end developer at Netflix, my role was to support the development of user-facing features on the platform. This involved collaborating with designers and other engineers to turn mockups into functional components, implementing animations, and ensuring a smooth and seamless user experience. I was also responsible for maintaining and improving existing features, fixing bugs, and conducting code reviews for other developers on the team.',
			start: 'November 2017',
			end: 'October 2019',
		},
	],
	skills: [
		{
			id: uuidv4(),
			skill: 'React',
		},
		{
			id: uuidv4(),
			skill: 'HTML5',
		},
		{
			id: uuidv4(),
			skill: 'CSS3',
		},
		{
			id: uuidv4(),
			skill: 'Javascript',
		},
		{
			id: uuidv4(),
			skill: 'Redux',
		},
		{
			id: uuidv4(),
			skill: 'Sass',
		},
		{
			id: uuidv4(),
			skill: 'Bootstrap',
		},
		{
			id: uuidv4(),
			skill: 'Vite',
		},
	],
};

export function autofill(state) {
	const newState = { ...state };
	const { personal, education, workExperience, skills } = exampleData;
	newState.personal = personal;
	newState.education = education;
	newState.workExperience = workExperience;
	newState.skills = skills;
	return newState;
}
