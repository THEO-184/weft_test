import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetUserPosts } from "../../services/posts";

const Posts = () => {
	const { id } = useParams();
	const { data, isLoading } = useGetUserPosts(Number(id));
	const [posts, setPosts] = useState([...data!]);
	return (
		<div className="w-3/4 mx-auto my-8">
			{isLoading ? (
				<h1>Fething post for User {id}</h1>
			) : (
				<div className="flex flex-col my-7">
					<h1 className="text-center font-bold">Posts Made by User {id}</h1>
					{posts?.map((post) => {
						return (
							<div
								key={post.id}
								className="my-4 lock rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
							>
								<h1>Title: {post.title}</h1>
								<p>Description: {post.body}</p>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Posts;
