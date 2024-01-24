import './PortfolioPage.css';
import Project from '../components/Projects';

// Portfolio Images:
import techBlog from '../assets/images/tech-blog.png';
import socialNet from '../assets/images/social-net-api.png';
import jate from '../assets/images/jate.png';
import svgGenerator from '../assets/images/SVG-logo-generator.png';
import eComm from '../assets/images/e-commerce-back-end.png';

export default function PortfolioPage() {
	// Array of my projects
	const gitHubRoot = 'https://github.com/trnigg/';
	const projects = [
		{
			id: 1,
			title: "Joe Blogg's Tech Blog!",
			description: 'A simple, yet functional full-stack CMS-style blog site.',
			imagePath: techBlog,
			deployedLink: 'https://joe-bloggs-tech-blog-35241527d339.herokuapp.com/',
			gitHubLink: gitHubRoot + 'tech-blog',
		},
		{
			id: 2,
			title: 'Social Network API',
			description: 'A basic NoSQL backend for social network sites.',
			imagePath: socialNet,
			deployedLink: 'N/A',
			gitHubLink: gitHubRoot + 'social-net-api',
		},
		{
			id: 3,
			title: 'Text Editor PWA',
			description: 'A text editor that is installable and available offline.',
			imagePath: jate,
			deployedLink: 'https://text-editor-pwa-trn-89aeae7a4cf4.herokuapp.com/',
			gitHubLink: gitHubRoot + 'text-editor-PWA',
		},
		{
			id: 4,
			title: 'SVG Logo Generator',
			description:
				'A command-line tool to generate a simple SVG logo via prompts.',
			imagePath: svgGenerator,
			deployedLink: 'N/A',
			gitHubLink: gitHubRoot + 'SVG-logo-generator',
		},
		{
			id: 5,
			title: 'E-commerce Back-end',
			description:
				'A functioning backend using mysql databasing and API routing.',
			imagePath: eComm,
			deployedLink: 'N/A',
			gitHubLink: gitHubRoot + 'e-commerce-back-end',
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
