import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPlayers } from '../actions/playerAction';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Player from './Player';
const Home = () => {
	const dispatch = useDispatch();
	const { playerList, searched } = useSelector((state) => state);
	useEffect(() => {
		dispatch(loadPlayers()); //sends actions to the reducers which then sends to store
	}, [dispatch]);

	return (
		<PlayerList>
			{searched.length ? (
				<div className="searched">
					<h2>Search Results...</h2>
					<Players>
						{searched.map((player) => (
							<Player
								key={player.Id}
								id={player.Id}
								name={player.PFName}
								team={player.TName}
								skill={player.Skill}
								matchesList={player.UpComingMatchesList}
							/>
						))}
					</Players>
				</div>
			) : (
				''
			)}
			<h2>Players</h2>
			<Players>
				{playerList.map((player) => (
					<Player
						key={player.Id}
						id={player.Id}
						name={player.PFName}
						team={player.TName}
						skill={player.Skill}
						matchesList={player.UpComingMatchesList}
					/>
				))}
			</Players>
		</PlayerList>
	);
};
const PlayerList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0rem;
	}
`;
const Players = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;
`;
export default Home;
