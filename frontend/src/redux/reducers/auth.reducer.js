import { authConstants } from "redux/constants/auth.constants"

let user = JSON.parse(localStorage.getItem("user"))
const initialState = user
	? { loggedIn: true, loggingIn: false, user }
	: { loggedIn: false, loggingIn: false, user: null }

export function auth(state = initialState, action) {
	switch (action.type) {
		case authConstants.LOGIN_REQUEST:
			return {
				...state,
				loggingIn: true,
				loggedIn: false,
				user: action.user,
			}
		case authConstants.LOGIN_SUCCESS:
			return {
				...state,
				loggingIn: false,
				loggedIn: true,
				user: action.user,
			}
		case authConstants.LOGIN_FAILURE:
		case authConstants.LOGOUT:
			return {
				...state,
				loggingIn: false,
				loggedIn: false,
				user: null,
			}
		default:
			return state
	}
}
