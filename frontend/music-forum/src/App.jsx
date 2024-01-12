import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { AboutUs } from './components/AboutUs/AboutUs';

const links = {
	home: '#',
	aboutUs: '#about-us',
	events: '#events',
};

function App() {
	const [navIsOpen, setNavIsOpen] = useState(false);

	return (
		<>
			<Nav links={links} navIsOpen={navIsOpen} onClick={() => setNavIsOpen(prevState => !prevState)} />
			<Header links={links} navIsOpen={navIsOpen} />
			<main>
				<AboutUs />
			</main>
			<div className='min-h-[200svh] bg-gradient-to-r from-violet to-[#120a27]'></div>
		</>
	);
}

export default App;
