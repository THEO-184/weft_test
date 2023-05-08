import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../apis/users";

export const useGetAllUsers = () => {
	return useQuery({
		queryKey: ["users"],
		queryFn: getAllUsers,
	});
};
