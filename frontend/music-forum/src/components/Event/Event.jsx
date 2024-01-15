import { useState, useEffect } from 'react';
import photo from '../../assets/img/dj.jpg';

export function Event({ id, name, dateTime, place, image }) {
	const [isOpen, setIsOpen] = useState(false);
	const [eventInfo, setEventInfo] = useState(null);
	const [imageSource, setImageSource] = useState(null);

	useEffect(() => {
		if (image) {
			const binaryData = atob(image);
			const byteArray = new Uint8Array(binaryData.length);

			for (let i = 0; i < binaryData.length; i++) {
				byteArray[i] = binaryData.charCodeAt(i);
			}

			const blob = new Blob([byteArray], { type: 'image/jpeg' });
			const imageUrl = URL.createObjectURL(blob);
			setImageSource(imageUrl);
		}
	}, [image]);

	const dateObject = new Date(dateTime);
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	};
	const dateInfo = dateObject.toLocaleDateString('pl-PL', options);

	const handleShowMoreInfoClick = () => {
		fetch(`http://localhost:8080/api/event/${id}`)
			.then(res => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error('Nie można pobrać info o danym evencie!');
				}
			})
			.then(data => {
				setIsOpen(true);
				setEventInfo(data);
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<div className='event-card h-fit rounded-3xl overflow-hidden bg-coal text-white'>
			<div className='w-full h-[400px]'>
				<img src={imageSource || photo} alt='dj setup' className='w-full h-full object-cover' />
			</div>

			<div className='event-info p-8 space-y-4'>
				<h3 className='text-2xl md:text-3xl lg:text-4xl'>{name}</h3>
				<p className='text-lg md:text-xl lg:text-2xl'>{place}</p>
				<p>{dateInfo}</p>
				{isOpen ? (
					<>
						<p className='max-w-prose'>{eventInfo.description}</p>
						<ul className='list-disc ml-5'>
							{eventInfo.performers.map(artist => (
								<li key={artist}>{artist}</li>
							))}
						</ul>
						<button
							className='border px-8 py-4 rounded-xl w-full hover:bg-white hover:text-coal transition-colors duration-300'
							onClick={() => setIsOpen(false)}>
							zamknij
						</button>
					</>
				) : (
					<button
						className='border px-8 py-4 rounded-xl w-full hover:bg-white hover:text-coal transition-colors duration-300'
						onClick={handleShowMoreInfoClick}>
						Czytaj więcej
					</button>
				)}
			</div>
		</div>
	);
}
