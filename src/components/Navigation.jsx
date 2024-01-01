import { FaHome } from "react-icons/fa";
import { AiOutlineCompass } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { PiChats } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { filterParameter } from "./../redux/actions/productActions";

const Navigation = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white fixed bottom-0 w-full shadow ">
      <div className="flex justify-between text-2xl p-7 px-[150px]">
        <span
          onClick={() => dispatch(filterParameter("popular"))}
          className="text-yellow-600 cursor-pointer"
        >
          <FaHome />
        </span>
        <span className="text-green-700 cursor-pointer">
          <AiOutlineCompass />
        </span>
        <span className="text-red-600 cursor-pointer">
          <HiShoppingCart />
        </span>
        <span className="text-teal-400 cursor-pointer ">
          <PiChats />
        </span>
        <span className=" cursor-pointer">
          <FaRegUser />
        </span>
      </div>
    </div>
  );
};

export default Navigation;
