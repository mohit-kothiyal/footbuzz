const initialState = {
	playerList: [],
	searched: [],
};

const playerReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_PLAYERS':
			return {
				...state,
				playerList: action.payload.playerList,
			};
		case 'FETCH_SEARCHED':
			return {
				...state,
				searched: action.payload.searched,
			};

		case 'CLEAR_SEARCHED':
			return {
				...state,
				searched: [],
			};
		default:
			return { ...state };
	}
};

export default playerReducer;
