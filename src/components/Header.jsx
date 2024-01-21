import Navbar from './Navbar';

function Header() {
	const title = 'Welcome!';

	return (
		<header>
			<div className="header-container">
				<h1>{title}</h1>
				<Navbar />
			</div>
		</header>
	);
}

export default Header;
