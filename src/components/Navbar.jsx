import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	const [activeLink, setActiveLink] = useState('About');

	const handleClick = (page) => {
		setActiveLink(page);
	};

	return (
		<nav>
			<menu>
				<li className={activeLink === 'About' ? 'active-link' : ''}>
					<Link to="/" onClick={() => handleClick('About')}>
						About
					</Link>
				</li>
				<li className={activeLink === 'Portfolio' ? 'active-link' : ''}>
					<Link to="/portfolio" onClick={() => handleClick('Portfolio')}>
						Portfolio
					</Link>
				</li>
				<li className={activeLink === 'Contact' ? 'active-link' : ''}>
					<Link to="/contact" onClick={() => handleClick('Contact')}>
						Contact
					</Link>
				</li>
				<li className={activeLink === 'Resume' ? 'active-link' : ''}>
					<Link to="/resume" onClick={() => handleClick('Resume')}>
						Résumé
					</Link>
				</li>
			</menu>
		</nav>
	);
}

export default Navbar;
