import axios from "axios";
import { UserResponse } from "../interfaces/users.interfaces";

export async function getAllUsers(): Promise<UserResponse> {
	const res = await axios.get("https://jsonplaceholder.typicode.com/users");
	return res.data;
}
