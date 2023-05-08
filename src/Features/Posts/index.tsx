import React from "react";
import { useParams } from "react-router-dom";

const Posts = () => {
	const { id } = useParams();
	console.log("id", id);
	return <div>Posts</div>;
};

export default Posts;
