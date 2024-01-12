import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';

function App() {
	const [navIsOpen, setNavIsOpen] = useState(false);

	return (
		<>
			<Nav navIsOpen={navIsOpen} onClick={() => setNavIsOpen(prevState => !prevState)} />
			<Header navIsOpen={navIsOpen} />
			<div className='min-h-[200svh] bg-violet'></div>
		</>
	);
}

export default App;
