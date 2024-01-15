import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Events } from './components/Events/Events';

const links = {
	home: '#',
	aboutUs: '#about-us',
	events: '#events',
};

function App() {
	const [navIsOpen, setNavIsOpen] = useState(false);

	return (
		<>
			<Nav
				links={links}
				navIsOpen={navIsOpen}
				onClick={() => {
					if (document.body.classList.contains('sticky-body')) {
						document.body.classList.remove('sticky-body');
					} else {
						document.body.classList.add('sticky-body');
					}
					setNavIsOpen(prevState => !prevState);
				}}
			/>
			<Header links={links} navIsOpen={navIsOpen} />
			<main>
				<AboutUs />
				<Events />
			</main>
		</>
	);
}

export default App;
