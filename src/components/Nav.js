import React, { useState } from 'react';
//Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { fetchSearch } from '../actions/playerAction';
import { useDispatch } from 'react-redux';
import { fadeIn } from '../animations';

const Nav = () => {
	const dispatch = useDispatch();
	const [textInput, setTextInput] = useState('');

	const inputHandler = (e) => {
		setTextInput(e.target.value);
		// if (e.target.value === '') clearSearch();
	};
	const submitSearch = (e) => {
		e.preventDefault();
		dispatch(fetchSearch(textInput));
	};
	const clearSearch = () => {
		dispatch({ type: 'CLEAR_SEARCHED' });
		setTextInput('');
	};
	return (
		<StyledNav variants={fadeIn} initial="hidden" animate="show">
			<Logo onClick={clearSearch}>
				<h1>FootBuzz</h1>
			</Logo>
			<form className="search">
				<input value={textInput} onInput={inputHandler} type="text" />
				<button onClick={submitSearch} type="submit">
					Search
				</button>
			</form>
		</StyledNav>
	);
};
const StyledNav = styled(motion.nav)`
	padding: 3rem 5rem;
	text-align: center;
	input {
		width: 30%;
		font-size: 1.5rem;
		border: none;
		padding: 0.5rem;
		margin-top: 1rem;
		outline: none;

		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
	}
	button {
		font-size: 1.5rem;
		border: none;
		padding: 0.5rem 2rem;
		color: white;
		background: #252424;
	}
`;
const Logo = styled(motion.div)`
	display: flex;
	justify-content: center;
	padding: 1rem;
	cursor: pointer;
	img {
		height: 3rem;
		width: 3rem;
	}
`;
export default Nav;
