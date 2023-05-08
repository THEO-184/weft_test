import { TableInstance } from "react-table";
import { UserTableData } from "../interfaces/users.interfaces";

interface ITableProps
	extends Pick<
		TableInstance<any>,
		| "getTableProps"
		| "getTableBodyProps"
		| "headerGroups"
		| "rows"
		| "prepareRow"
	> {
	isLoading: boolean;
}

const Table = ({
	getTableProps,
	getTableBodyProps,
	headerGroups,
	rows,
	prepareRow,
	isLoading,
}: ITableProps) => {
	// const { CustomPageCount, handleNavigation } = useTableData(
	// 	tableColumns,
	// 	data
	// );

	return (
		<div>
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
			{/* <Pagination pageCount={CustomPageCount} onPageChange={handleNavigation} /> */}
		</div>
	);
};

export default Table;
