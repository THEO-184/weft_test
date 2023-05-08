import { Column } from "react-table";
import { UserTableData } from "../interfaces/users.interfaces";

export const UsersTableColumn: Column<UserTableData>[] = [
	{
		Header: "FullName",
		accessor: "name",
	},
	{
		Header: "Email",
		accessor: "email",
	},
	{
		Header: "Address",
		accessor: "address",
	},
];
