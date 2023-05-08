import React, { useMemo } from "react";
import { useGetAllUsers } from "../../services/users";
import { useTable } from "react-table";
import { UsersTableColumn } from "../../constants/users";
import Pagination from "../../components/Pagination";
import useTableData from "../../hooks/useTableData";
import Table from "../../components/Table";

const Users = () => {
	const { tableData, isLoading } = useGetAllUsers();
	const data = tableData ? useMemo(() => [...tableData], [tableData]) : [];
	// const columns = React.useMemo(() => [...UsersTableColumn], []);
	const { CustomPageCount, columns, currentItems, handleNavigation } =
		useTableData(UsersTableColumn, data);

	const tableInstance = useTable<any>({ columns, data: currentItems });
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		tableInstance;
	return (
		<div className="w-3/4 mx-auto my-8">
			<div className="flex flex-col">
				<h1 className="mb-7 text-center text-black text-xl">Users Data</h1>

				<Pagination
					pageCount={CustomPageCount}
					onPageChange={handleNavigation}
				/>
				<Table
					isLoading={isLoading}
					getTableProps={getTableProps}
					getTableBodyProps={getTableBodyProps}
					headerGroups={headerGroups}
					rows={rows}
					prepareRow={prepareRow}
				/>
			</div>
		</div>
	);
};

export default Users;
