import React, { useState } from 'react';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';
import { motion } from 'framer-motion';

const Player = ({ id, name, team, skill, matchesList }) => {
	const [isFlipped, setIsFlipped] = useState(false);

	function importAll(r) {
		return r.keys().map(r);
	}

	const images = importAll(
		require.context('../player-images', false, /\.(png|jpe?g|svg)$/)
	);
	const convertToTimeZone = (dateTime) => {
		let date = new Date(dateTime);
		return date.toString();
	};
	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
			<StyledPlayer onClick={() => setIsFlipped((prev) => !prev)}>
				<h3>{name}</h3>
				<p>Skill : {skill}</p>
				{images &&
					images
						.filter((img) => img.default.split('/')[3].split('.')[0] === id)

						.map((img) => <img src={img.default} alt={name} key={id} />)}
			</StyledPlayer>
			<StyledBackPlayer onClick={() => setIsFlipped((prev) => !prev)}>
				<h3>{team}</h3>
				{matchesList &&
					matchesList.map((matchTiming) => (
						<h3>Time: {convertToTimeZone(`${matchTiming.MDate} UTC`)}</h3>
					))}
				{matchesList &&
					matchesList.map((matchTiming) => (
						<h3>
							{matchTiming.CCode} VS. {matchTiming.VsCCode}
						</h3>
					))}
			</StyledBackPlayer>
		</ReactCardFlip>
	);
};
const StyledPlayer = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
	text-align: center;
	border-radius: 1rem;
	cursor: pointer;
	overflow: hidden;
	background-color: #202020;
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`;
const StyledBackPlayer = styled(motion.div)`
	min-height: 51vh;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);
	text-align: center;
	border-radius: 1rem;
	cursor: pointer;
	overflow: hidden;
	background-color: #202020;
`;
export default Player;
