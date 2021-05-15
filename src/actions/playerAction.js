import axios from 'axios';

// Action Creator
export const loadPlayers = () => async (dispatch) => {
	// Fetch Axios
	const playerData = await axios.get(
		`https://api.npoint.io/20c1afef1661881ddc9c`
	);
	dispatch({
		type: 'FETCH_PLAYERS',
		payload: {
			playerList: playerData.data.playerList,
		},
	}); //sends this object data to gamesReducer
};

export const fetchSearch = (player_name) => async (dispatch) => {
	const searchPlayer = await axios.get(
		`https://api.npoint.io/20c1afef1661881ddc9c`
	);
	console.log(searchPlayer.data.playerList);
	dispatch({
		type: 'FETCH_SEARCHED',
		payload: {
			searched: searchPlayer.data.playerList,
		},
	});
};
