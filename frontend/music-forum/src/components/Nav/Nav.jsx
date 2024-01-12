import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Nav({ navIsOpen, onClick }) {
	console.log(navIsOpen);

	return (
		<nav className='fixed w-full z-50'>
			{!navIsOpen && (
				<div className='container flex justify-between items-center px-8 py-4 mt-5 rounded-full backdrop-blur-md border border-zinc-400 text-white'>
					<a href='#' className='font-bold'>
						MusicForum
					</a>

					<FontAwesomeIcon icon={faBars} className='p-2 text-lg hover:cursor-pointer md:hidden' onClick={onClick} />

					<ul className='desktop-nav hidden gap-6 text-lg md:flex'>
						<li>
							<a href='#' className='hover:text-white transition-colors duration-300'>
								Home
							</a>
						</li>
						<li>
							<a href='#' className='hover:text-white transition-colors duration-300'>
								O nas
							</a>
						</li>
						<li>
							<a href='#' className='hover:text-white transition-colors duration-300'>
								Wydarzenia
							</a>
						</li>
					</ul>
				</div>
			)}

			{navIsOpen && (
				<div className='absolute w-full top-0 z-40 text-white'>
					<ul className='mobile-nav flex flex-col justify-center items-center gap-20 h-screen text-3xl md:hidden backdrop-blur-md uppercase'>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#'>O nas</a>
						</li>
						<li>
							<a href='#'>Wydarzenia</a>
						</li>
					</ul>
					<FontAwesomeIcon
						icon={faXmark}
						className='absolute p-2 text-4xl top-10 right-10 hover:cursor-pointer md:hidden'
						onClick={onClick}
					/>
				</div>
			)}
		</nav>
	);
}
