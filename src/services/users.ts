import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../apis/users";
import { UserTableData } from "../interfaces/users.interfaces";

export const useGetAllUsers = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["users"],
		queryFn: getAllUsers,
	});

	const tableData: UserTableData[] = data
		? data.map((user) => {
				return {
					id: user.id,
					name: user.name,
					email: user.email,
					address: `${user.address.street}, ${user.address.suite}, ${user.address.city},  ${user.address.zipcode}`,
				};
		  })
		: [];

	return { tableData, isLoading };
};
