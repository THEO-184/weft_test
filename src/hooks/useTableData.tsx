import React from "react";
import { Column } from "react-table";
import { UserTableData } from "../interfaces/users.interfaces";

const useTableData = <T extends UserTableData>(
	tableColumn: Column<T>[],
	tabledata: T[]
) => {
	const [itemOffset, setItemOffset] = React.useState(0);
	const columns = React.useMemo(() => [...tableColumn], []);
	const data = React.useMemo(() => [...tabledata], [tabledata]);
	const CustomPageCount = Math.ceil(data.length / 4);
	const endOffset = itemOffset + 4;
	const currentItems = React.useMemo(
		() => tabledata.slice(itemOffset, endOffset),
		[itemOffset, endOffset, tabledata]
	);
	const handleNavigation = React.useCallback(
		(event: any) => {
			const newOffset = (event.selected * 4) % data.length;
			setItemOffset(newOffset);
		},
		[setItemOffset]
	);
	return { handleNavigation, currentItems, CustomPageCount, data, columns };
};

export default useTableData;
