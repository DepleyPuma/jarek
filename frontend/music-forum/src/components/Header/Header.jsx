import video from '../../assets/video/party.mp4';

export function Header({ navIsOpen, links }) {
	return (
		<>
			<header className='relative'>
				<video className='w-full h-screen object-cover' muted loop src={video}></video>
				{!navIsOpen && (
					<div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center text-white'>
						<h1 className='my-16 text-4xl uppercase font-bold md:text-6xl lg:text-8xl'>Baw się z nami</h1>
						<button className='py-4 border border-zinc-300 rounded-full animate-bounce'>
							<a href={links.aboutUs} className='px-16'>
								Sprawdź
							</a>
						</button>
					</div>
				)}
			</header>
		</>
	);
}
