import React from 'react';
import { Routes, Route } from 'react-router-dom'
import UseReducerExample from '../pages/UseReducerExample';
import UseEffectExample from '../pages/UseEffectExample';
import NavigationBar from './NavigationBar';

function App()
{
	return (
		<div className="App">
			<NavigationBar />
			<Routes>
				<Route path="/" element={<UseReducerExample />} />
				<Route path="/useEffect" element={<UseEffectExample />} />
			</Routes>

		</div>
	);
}

export default App;
