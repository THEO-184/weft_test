import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../apis/users";
import { UserTableData } from "../interfaces/users.interfaces";
import { getUserPosts } from "../apis/posts";

export const useGetUserPosts = (id: number) => {
	const { data, isLoading } = useQuery({
		queryKey: ["posts", id],
		queryFn: () => getUserPosts(id),
		enabled: !!id,
	});

	return { data, isLoading };
};
