import React from 'react';
import { Routes, Route } from 'react-router-dom'
import UseReducerExample from '../pages/UseReducerExample';
import UseEffectExample from '../pages/UseEffectExample';
import NavigationBar from './NavigationBar';
import UseRefExample from '../pages/UseRefExample';
import UseLayoutEffectExample from '../pages/UseLayoutEffectExample';

function App()
{
	return (
		<div className="App">
			<NavigationBar />
			<Routes>
				<Route path="/" element={<UseReducerExample />} />
				<Route path="/useEffect" element={<UseEffectExample />} />
				<Route path="/useLayoutEffect" element={<UseLayoutEffectExample />} />
				<Route path="/useRef" element={<UseRefExample />} />
			</Routes>

		</div>
	);
}

export default App;
