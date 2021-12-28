import React from 'react'
import { NavBar, NavButton } from '../styles/NavigationBar.styled'
import { useNavigate } from 'react-router-dom'

const NavigationBar = () =>
{
	const navigate = useNavigate();
	return (
		<NavBar>
			<NavButton onClick={() => navigate('/')}>useReducer</NavButton>
			<NavButton onClick={() => navigate('/useEffect')}>useEffect</NavButton>
			<NavButton onClick={() => navigate('/useLayoutEffect')}>useLayoutEffect</NavButton>
			<NavButton onClick={() => navigate('/useRef')}>useRef</NavButton>
		</NavBar>
	)
}

export default NavigationBar
