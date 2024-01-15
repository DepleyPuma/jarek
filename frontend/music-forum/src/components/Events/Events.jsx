import { useState, useEffect } from 'react';
import { Event } from '../Event/Event';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import { Modal } from '../Modal/Modal';

export function Events() {
	const [events, setEvents] = useState([]);
	const [modalIsShown, setModalIsShown] = useState(false);

	const handleOnAddEventClick = formData => {
		fetch('http://localhost:8080/api/add-event', {
			method: 'POST',
			body: formData,
		})
			.then(res => res.json())
			.then(res => setEvents(prevData => [...prevData, res]));
	};

	useEffect(() => {
		fetch('http://localhost:8080/api/events')
			.then(res => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error('Błąd ładowania danych');
				}
			})
			.then(data => {
				setEvents(data);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<section id='events' className='flex flex-col items-center relative py-24 md:px-24'>
			<SectionHeader>Wydarzenia</SectionHeader>
			<div className='grid grid-cols-1 gap-16 py-24 px-8 xl:grid-cols-3'>
				{events.map(({ id, name, dateTime, place, image }) => (
					<Event key={id} id={id} name={name} dateTime={dateTime} place={place} image={image} />
				))}
			</div>
			{modalIsShown ? (
				<Modal
					onFormSubmit={handleOnAddEventClick}
					onCloseModalClick={() => {
						document.body.classList.remove('sticky-body');
						setModalIsShown(prevState => !prevState);
					}}
				/>
			) : (
				<button
					className='h-16 w-16 bg-white rounded-full'
					onClick={() => {
						// document.body.classList.add('sticky-body');
						setModalIsShown(prevState => !prevState);
					}}>
					+
				</button>
			)}
		</section>
	);
}
