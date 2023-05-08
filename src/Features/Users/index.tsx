import React, { useMemo } from "react";
import { useGetAllUsers } from "../../services/users";
import { useTable } from "react-table";
import { UsersTableColumn } from "../../constants/users";
import Pagination from "../../components/Pagination";
import useTableData from "../../hooks/useTableData";

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
				<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
						{isLoading ? (
							"Loading..."
						) : (
							<div className="overflow-hidden">
								<table
									{...getTableProps()}
									className="min-w-full text-left text-sm font-light"
								>
									<thead className="border-b font-medium dark:border-neutral-500">
										{headerGroups.map((headerGroup) => (
											<tr {...headerGroup.getHeaderGroupProps()}>
												{headerGroup.headers.map((column) => (
													<th
														{...column.getHeaderProps()}
														scope="col"
														className="px-6 py-4"
													>
														{column.render("Header")}
													</th>
												))}
											</tr>
										))}
									</thead>
									<tbody {...getTableBodyProps()}>
										{rows.map((row: any) => {
											prepareRow(row);
											return (
												<tr
													{...row.getRowProps()}
													className="border-b dark:border-neutral-500"
												>
													{row.cells.map((cell: any) => {
														return (
															<td
																{...cell.getCellProps()}
																className="whitespace-nowrap px-6 py-4 font-medium"
															>
																{cell.render("Cell")}
															</td>
														);
													})}
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>
						)}
					</div>
				</div>
				<Pagination
					pageCount={CustomPageCount}
					onPageChange={handleNavigation}
				/>
			</div>
		</div>
	);
};

export default Users;
