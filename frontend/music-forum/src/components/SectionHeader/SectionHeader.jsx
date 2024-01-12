export function SectionHeader({ children }) {
	return (
		<h2 className='text-6xl font-extralight uppercase text-center text-white'>
			{children}
			<hr className='mx-auto mt-4 w-[250px] border-2' />
		</h2>
	);
}
