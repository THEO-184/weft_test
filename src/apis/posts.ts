import axios from "axios";
import { PostResponse } from "../interfaces/posts.interface";
export async function getUserPosts(id: number): Promise<PostResponse> {
	const res = await axios.get(
		`https://jsonplaceholder.typicode.com/posts?userId=${id}`
	);

	return res.data;
}
