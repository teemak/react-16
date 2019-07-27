import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS } from "../types";

export default (state, action) => {
	switch (action.type) {
		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				loading: false,
			};
		case CLEAR_USERS:
			break;
		case GET_USER:
			break;
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case GET_REPOS:
			break;
		default:
			return;
	}
};
