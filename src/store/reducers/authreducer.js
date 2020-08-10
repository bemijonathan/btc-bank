export const authReducer = (state = isAuthenticated(), action) => {
	switch (action.type) {
		case "LOGIN":
			state = true;
			return state;
		case "LOGOUT":
			state = false;
			return state;
		default:
			return state;
	}
};

const isAuthenticated = () => {
	let token = localStorage.getItem("auth-token");
	if (token) {
		return true;
	}
	return false;
};
