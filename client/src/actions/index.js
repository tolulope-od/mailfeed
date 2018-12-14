import axios from "axios";
import { FETCH_USER } from "./types";

// Get current user
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

// Update credits
export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripePayment", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};
