import { GitHub, Linkedin, Twitter } from 'react-feather';

export default function Footer() {
	return (
		<footer>
			<a
				href="https://github.com/trnigg"
				target="_blank"
				rel="noopener noreferrer"
			>
				<GitHub />
			</a>
			<a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
				<Twitter />
			</a>
			<a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
				<Linkedin />
			</a>
		</footer>
	);
}
