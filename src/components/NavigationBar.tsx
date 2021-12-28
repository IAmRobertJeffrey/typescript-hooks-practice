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
		</NavBar>
	)
}

export default NavigationBar
