import { useState } from 'react';

export function Modal({ onFormSubmit, onCloseModalClick }) {
	const [name, setName] = useState('');
	const [place, setPlace] = useState('');
	const [time, setTime] = useState('');
	const [image, setImage] = useState('');
	const [artistsInput, setArtistsInput] = useState('');
	const [description, setDescription] = useState('');
	const [artists, setArtists] = useState([]);
	const [errorName, setErrorName] = useState(false);
	const [errorPlace, setErrorPlace] = useState(false);
	const [errorTime, setErrorTime] = useState(false);
	const [errorImage, setErrorImage] = useState(false);
	const [errorDescription, setErrorDescription] = useState('');
	const [errorArtists, setErrorArtists] = useState(false);
	let errors = 0;

	const checkForm = () => {
		errors = 0;

		if (name === '') {
			setErrorName(true);
			errors++;
		} else {
			setErrorName(false);
		}

		if (place === '') {
			setErrorPlace(true);
			errors++;
		} else {
			setErrorPlace(false);
		}

		if (time === '') {
			setErrorTime(true);
			errors++;
		} else {
			setErrorTime(false);
		}

		if (description === '') {
			setErrorDescription(true);
			errors++;
		} else {
			setErrorDescription(false);
		}

		if (artists.length === 0) {
			setErrorArtists(true);
			errors++;
		} else {
			setErrorArtists(false);
		}

		if (image === '') {
			setErrorImage(true);
			errors++;
		} else {
			setErrorImage(false);
		}
	};

	const handleSubmit = e => {
		e.preventDefault();

		checkForm();

		if (errors === 0) {
			onCloseModalClick();
			document.body.classList.remove('sticky-body');
			const newEvent = {
				name: name,
				place: place,
				dateTime: time,
				description: description,
				performers: artists,
				image: image,
			};

			const formData = new FormData();
			// formData.append('name', name);

			for (const name in newEvent) {
				formData.append(name, newEvent[name]);
			}

			onFormSubmit(formData);
		} else {
			return;
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[-10%] flex flex-col items-center p-12 space-y-12 bg-gradient-to-r to-violet from-[#120a27] border border-zinc-500 rounded-xl md:px-24 md:pt-24'>
			<div>
				{errorName && <p className='mb-4 text-red-500'>Wpisz nazwę wydarzenia!</p>}
				<input
					onChange={e => setName(e.target.value)}
					className='px-8 py-4 bg-slate-100 bg-opacity-25 focus:outline-purple-950 text-white placeholder-white rounded-xl'
					type='text'
					id='name'
					placeholder='Nazwę wydarzenia'
				/>
			</div>
			<div>
				{errorPlace && <p className='mb-4 text-red-500'>Wpisz lokalizację wydarzenia!</p>}
				<input
					onChange={e => setPlace(e.target.value)}
					className='px-8 py-4 bg-slate-100 bg-opacity-25 focus:outline-purple-950 text-white placeholder-white rounded-xl'
					type='text'
					id='place'
					placeholder='Miejsce wydarzenia'
				/>
			</div>
			<div>
				{errorTime && <p className='mb-4 text-red-500'>Wybierz datę wydarzenia!</p>}
				<input
					onChange={e => setTime(e.target.value)}
					className='px-8 py-4 bg-slate-100 bg-opacity-25 focus:outline-purple-950 text-white rounded-xl'
					type='datetime-local'
					id='time'
				/>
			</div>
			<div className='flex flex-col gap-4'>
				{errorArtists && <p className='mb-4 text-red-500'>Musisz wpisać artysów!</p>}
				<input
					value={artistsInput}
					onChange={e => setArtistsInput(e.target.value)}
					className='px-8 py-4 bg-slate-100 bg-opacity-25 focus:outline-purple-950 placeholder-white text-white rounded-xl'
					type='text'
					id='artists'
					placeholder='Wpisz artystę'
				/>
				<button
					className='px-4 py-2 text-white border rounded-xl'
					onClick={() => {
						setArtists(prevData => [...prevData, artistsInput]);
						setArtistsInput('');
					}}>
					dodaj
				</button>
			</div>
			<div>
				{errorImage && <p className='mb-4 text-red-500'>Wybierz zdjęcie dla wydarzenia!</p>}
				<input
					onChange={e => setImage(e.target.files[0])}
					className='w-full bg-slate-100 bg-opacity-25 focus:outline-purple-950 text-white rounded-xl'
					type='file'
					id='image'
				/>
			</div>
			<div>
				{errorDescription && <p className='mb-4 text-red-500'>Opis nie możę być pusty!</p>}
				<textarea
					className='p-2 w-full bg-slate-100 bg-opacity-25 focus:outline-purple-950 text-white rounded-xl'
					onChange={e => setDescription(e.target.value)}
				/>
			</div>

			<div className='flex gap-6 md:flex-row'>
				<button
					className='px-8 py-4 bg-transparent text-white border border-zinc-400 rounded-xl hover:bg-white hover:text-black transition-colors duration-300'
					onClick={handleSubmit}>
					Dodaj
				</button>
				<button
					className='px-8 py-4 bg-transparent text-white border border-zinc-400 rounded-xl hover:bg-white hover:text-black transition-colors duration-300'
					onClick={onCloseModalClick}>
					Anuluj
				</button>
			</div>
		</form>
	);
}
