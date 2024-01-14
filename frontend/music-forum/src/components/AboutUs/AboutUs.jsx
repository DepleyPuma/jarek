import { OurOffers } from '../OurOffers/OurOffers';
import { SectionHeader } from '../SectionHeader/SectionHeader';

export function AboutUs() {
	return (
		<section id='about-us' className='py-24'>
			<SectionHeader>O nas</SectionHeader>

			<div className='mx-auto items-center text-box py-24 px-8 text-white max-w-prose space-y-12'>
				<h3 className='text-4xl text-center uppercase'>Odkryj Świat Dźwięków na Naszym Wyjątkowym Forum Muzycznym!</h3>

				<p className='py-10 leading-8 md:text-3xl'>
					<span className='p-2 text-3xl font-bold md:ml-4 md:text-5xl'>Witaj</span> w sercu muzycznej społeczności,
					gdzie pasjonaci dźwięków łączą się, by dzielić się swoją miłością do muzyki! Nasze forum to miejsce, w którym
					odnajdziesz inspirujące rozmowy, ciekawe dyskusje i pełne energii wydarzenia muzyczne. Dołącz do nas już dziś
					i uczestnicz w magicznym świecie dźwięków!
				</p>

				<OurOffers />
			</div>
		</section>
	);
}
