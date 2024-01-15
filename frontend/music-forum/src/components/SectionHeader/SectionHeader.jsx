export function SectionHeader({ children }) {
	return (
		<h2 className='text-4xl font-extralight uppercase text-center text-white md:text-6xl'>
			{children}
			<hr className='mx-auto mt-4 w-[150px] border-2' />
		</h2>
	);
}
