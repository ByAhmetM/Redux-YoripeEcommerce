import { FaBars } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { AiFillBell } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  filterParameter,
  searchParameter,
} from "../redux/actions/productActions";

const Header = ({ toggle }) => {
  const dispatch = useDispatch();

  const state = useSelector((store) => store);
  console.log(state);
  const getSearchParameter = (value) => {
    dispatch(searchParameter(value));
  };

  const getCategoryName = (category) => {
    dispatch(filterParameter(category));
  };

  return (
    <div className="flex flex-col gap-3">
      {/* head */}
      <div className="flex justify-center items-center gap-10 p-3">
        <span onClick={toggle} className="text-3xl cursor-pointer">
          <FaBars />
        </span>
        <form className="headerInput relative flex-1">
          <span className="absolute text-3xl left-2 top-2 cursor-pointer">
            <IoMdSearch />
          </span>
          <input
            className=" w-full border p-2 pl-12 focus:outline-blue-400"
            type="search"
            placeholder="Search Products"
            onChange={(e) => getSearchParameter(e.target.value.toLowerCase())}
          />
        </form>
        <div className="relative">
          <span className="text-3xl cursor-pointer">
            <AiFillBell />
          </span>
          <span className="absolute top-[-15px] right-[-5px] h-[20px] w-[20px] flex items-center justify-center text-md  bg-[#f50057]  rounded-full text-white">
            2
          </span>
        </div>
      </div>

      {/* menu */}

      <div className="flex justify-between items-center px-10 text-xs font-bold">
        <span
          onClick={() => getCategoryName("popular")}
          className={
            state.filterItem === "popular"
              ? "bg-yellow-500 p-1 rounded cursor-pointer"
              : "cursor-pointer"
          }
        >
          Popular
        </span>
        <span
          onClick={() => getCategoryName("auction")}
          className={
            state.filterItem === "auction"
              ? "bg-yellow-500 p-1 rounded cursor-pointer"
              : "cursor-pointer"
          }
        >
          Auction
        </span>
        <span
          onClick={() => getCategoryName("flatRate")}
          className={
            state.filterItem === "flatRate"
              ? "bg-yellow-500 p-1 rounded cursor-pointer"
              : "cursor-pointer"
          }
        >
          Flat-rate
        </span>
        <span
          onClick={() => getCategoryName("scheduled")}
          className={
            state.filterItem === "scheduled"
              ? "bg-yellow-500 p-1 rounded cursor-pointer"
              : "cursor-pointer"
          }
        >
          Scheduled
        </span>
      </div>
    </div>
  );
};

export default Header;
