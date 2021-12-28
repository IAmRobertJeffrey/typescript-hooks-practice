
import React, { useEffect, useState } from 'react'

const UseEffectExample = () =>
{
	interface apiResponseItem
	{
		postId: number,
		id: number,
		name: string,
		email: string,
		body: string
	}
	interface apiResponseItems extends Array<apiResponseItem> { }


	const [data, setData] = useState<apiResponseItems>();
	const [count, setCount] = useState(0);
	const [current, setCurrent] = useState("");

	useEffect(() =>
	{
		async function getData()
		{
			const response = await fetch("https://jsonplaceholder.typicode.com/comments")
			const data = await response.json();
			setData(data)
			console.log(data);

		}
		getData();
	}, [])

	useEffect(() =>
	{
		if (data && data.length > 0)
		{
			setCurrent(data[count].email)
		}
	}, [count, data])



	return (
		<div>
			<h1>UseEffect Example</h1>
			<p>{count}</p>
			<p>{current}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	)
}

export default UseEffectExample
