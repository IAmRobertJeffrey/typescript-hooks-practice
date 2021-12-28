import React, { useRef } from 'react'

const UseRefExample = () =>
{

	const inputRef = useRef<HTMLInputElement>(null);

	function clicked()
	{
		if (inputRef.current)
		{
			inputRef.current.focus();
		}

	}

	return (
		<div>
			<input type="text" placeholder='Example...' ref={inputRef} />
			<button onClick={clicked}>Change name</button>

		</div>
	)
}

export default UseRefExample
