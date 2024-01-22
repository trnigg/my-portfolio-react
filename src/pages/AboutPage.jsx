import './AboutPage.css';
import MiniMe from '../assets/images/MiniMe.jpeg';

export default function AboutPage() {
	return (
		<>
			<h2>About Me</h2>
			<div className="section-content-container" id="about-content">
				<div className="intro">
					<p id="p-start">
						<span id="console">console</span>
						<span id="log">.log</span>
						{'("Hello World! I am")'};
					</p>
					<h3 id="p-center">Tim Nigg</h3>
					<p id="p-end">
						{'<'}
						<span className="future-code">future</span>
						{'>'}full-stack.dev{'</'}
						<span className="future-code">future</span>
						{'>'}
					</p>
				</div>
				<div className="headshot">
					<img id="little-me" src={MiniMe} alt="My mug" />
				</div>
				<div className="details">
					<p>
						I enjoy simple design, white space and walks on the beach. My
						creativity is not limited by my imagination, so keep an eye on this
						portfolio as it grows with me and my capabilities!
					</p>
				</div>
			</div>
		</>
	);
}
