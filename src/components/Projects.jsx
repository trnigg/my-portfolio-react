// import icons from react-feather
import { ExternalLink, GitHub } from 'react-feather';

// destructure props for project properties
export default function Project({ project }) {
	return (
		<div className="project">
			<img src={project.imagePath} alt={project.title} />
			<div className="project-overlay">
				<h4 className="project-title">{project.title}</h4>
				<p className="project-description">{project.description}</p>
				<div className="project-links">
					{/* conditionally render link to deployed page only if it exists */}
					{project.deployedLink !== 'N/A' && (
						<a
							href={project.deployedLink}
							target="_blank"
							rel="noopener noreferrer"
						>
							<ExternalLink />
						</a>
					)}
					<a
						href={project.gitHubLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<GitHub />
					</a>
				</div>
			</div>
		</div>
	);
}
