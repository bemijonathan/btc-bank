import axios from "axios";

const fetchclient = axios.create({
	baseURL: "https://",
});

const authToken = localStorage.getItem("auth-token");
// if(authToken){}
fetchclient.defaults.headers.common["Authorization"] = "Bearer " + authToken;

export default fetchclient;
