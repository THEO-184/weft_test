import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import ReactPaginate from "react-paginate";

interface Props {
	onPageChange?: (selectedItem: { selected: number }) => void;
	pageCount: number;
}

const Pagination = ({ onPageChange, pageCount }: Props) => {
	return (
		<div className="pagination_container">
			<ReactPaginate
				breakLabel="..."
				nextLabel={
					<div className="text-blue-700 flex text-sm items-center">
						<span>Next</span>
						<MdOutlineKeyboardArrowRight size={20} />
					</div>
				}
				previousClassName="previous-pagination"
				pageClassName="page-links"
				containerClassName="pagination"
				breakClassName="pagination-break"
				activeClassName="pagination-active"
				onPageChange={onPageChange}
				pageCount={pageCount}
				previousLabel={
					<div className="text-blue-700 flex text-sm items-center">
						<MdOutlineKeyboardArrowLeft size={20} />
						<span>Prev</span>
					</div>
				}
			/>
		</div>
	);
};

export default Pagination;
