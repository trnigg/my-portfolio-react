// This is a static page checking if it works, for now
import './ResumePage.css';
import { Check, Download } from 'react-feather';

export default function ResumePage() {
	const frontendSkills = [
		'HTML',
		'CSS',
		'Javascript',
		'React',
		'Responsive Design',
	];
	const backendSkills = [
		'Node.js',
		'Express',
		'MongoDB',
		'MySQL + Sequelize',
		'MongoDB + Mongoose',
		'REST APIs',
		'GraphQL',
	];

	return (
		<>
			<h2>My Résumé</h2>
			<a href="/path/to/your/resume.pdf" download className="download-link">
				Download my resume <Download />
			</a>
			<div className="skills-container">
				<h3>Back End Skills</h3>

				<ul className="skills-list">
					{frontendSkills.map((skill, index) => (
						<li key={index}>
							<Check /> {skill}
						</li>
					))}
				</ul>
				<h3>Front End Skills</h3>
				<ul className="skills-list">
					{backendSkills.map((skill, index) => (
						<li key={index}>
							<Check /> {skill}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
