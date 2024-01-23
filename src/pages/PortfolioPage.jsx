import './PortfolioPage.css';
import Project from '../components/Projects';
import ComingSoon from '../assets/images/coming_soon.jpg';

export default function PortfolioPage() {
	// Array of my projects
	const gitHubRoot = 'https://github.com/trnigg/';
	const projects = [
		{
			id: 1,
			title: 'Project Name',
			description: 'Project description',
			imagePath: ComingSoon,
			deployedLink: 'link_to_project_1',
			gitHubLink: gitHubRoot + 'tech-blog',
		},
		{
			id: 2,
			title: 'Project Name',
			description: 'Project description',
			imagePath: ComingSoon,
			deployedLink: 'link_to_project_2',
			gitHubLink: 'link_to_project_2',
		},
		{
			id: 3,
			title: 'Project Name',
			description: 'Project description',
			imagePath: ComingSoon,
			deployedLink: 'link_to_project_3',
			gitHubLink: 'link_to_project_3',
		},
		{
			id: 4,
			title: 'Project Name',
			description: 'Project description',
			imagePath: ComingSoon,
			deployedLink: 'link_to_project_4',
			gitHubLink: 'link_to_project_4',
		},
		{
			id: 5,
			title: 'Project Name',
			description: 'Project description',
			imagePath: ComingSoon,
			deployedLink: 'link_to_project_5',
			gitHubLink: 'link_to_project_5',
		},
	];

	return (
		<>
			<h2>My Portfolio</h2>
			<div className="project-featured">
				<Project project={projects[0]} />
			</div>
			<div className="project-container">
				{projects.slice(1).map((project) => (
					<Project key={project.id} project={project} />
				))}
			</div>
		</>
	);
}
