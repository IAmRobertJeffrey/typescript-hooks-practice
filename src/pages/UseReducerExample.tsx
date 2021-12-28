import React, { useReducer } from 'react'

const UseReducerExample = () =>
{
	interface reducerTypes
	{
		count: number,
		showText: boolean
	}

	interface reducerAction
	{
		type: string,
	}



	const reducer = (state: reducerTypes, action: reducerAction) =>
	{
		switch (action.type)
		{
			case "increment":
				return { count: state.count + 1, showText: state.showText }
			case "toggleShowText":
				return { count: state.count, showText: !state.showText }
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

	return (
		<div>
			<h1>UseReducer Example</h1>
			<h1>{state.count}</h1>
			<button
				onClick={() =>
				{
					dispatch({ type: "increment" })
					dispatch({ type: "toggleShowText" })
				}}
			>
				Increment
			</button>
			{state.showText && <p>This is text</p>}
		</div>
	)
}

export default UseReducerExample
