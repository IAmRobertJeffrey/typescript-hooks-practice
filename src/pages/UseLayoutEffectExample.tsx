import React from 'react'
import { useLayoutEffect, useEffect } from 'react';

const UseLayoutEffect = () =>
{
	useEffect(() =>
	{
		console.log("useEffect")
	}, []);

	useLayoutEffect(() =>
	{
		console.log("useLayoutEffect")
	}, []);





	return (
		<div>


		</div>
	)
}

export default UseLayoutEffect
