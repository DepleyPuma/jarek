import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Nav.module.css';

export function Nav({ navIsOpen, onClick, links }) {
	console.log(navIsOpen);

	return (
		<nav className='fixed w-full z-50'>
			{!navIsOpen && (
				<div className='container flex justify-between items-center px-8 py-4 mt-5 rounded-full backdrop-blur-md border border-zinc-400 text-white'>
					<a href={links.home} className='font-bold'>
						MusicForum
					</a>

					<FontAwesomeIcon icon={faBars} className='p-2 text-lg hover:cursor-pointer md:hidden' onClick={onClick} />

					<ul className='desktop-nav hidden gap-6 text-lg md:flex'>
						<li>
							<a href={links.home} className='p-4'>
								Home
							</a>
						</li>
						<li>
							<a href={links.aboutUs} className='p-4'>
								O nas
							</a>
						</li>
						<li>
							<a href={links.events} className='p-4'>
								Wydarzenia
							</a>
						</li>
					</ul>
				</div>
			)}

			{navIsOpen && (
				<div className='absolute w-full top-0 z-40 text-white'>
					<ul className='mobile-nav flex flex-col justify-center items-center gap-20 h-screen text-3xl md:hidden backdrop-blur-md uppercase'>
						<li className={styles.slideLeft}>
							<a href={links.home} onClick={onClick}>
								Home
							</a>
						</li>
						<li className={styles.slideLeft}>
							<a href={links.aboutUs} onClick={onClick}>
								O nas
							</a>
						</li>
						<li className={styles.slideLeft}>
							<a href={links.events} onClick={onClick}>
								Wydarzenia
							</a>
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
