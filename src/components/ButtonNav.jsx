import { Link } from "react-router-dom";

export default function ButtonNav({ to, children }) {
    return (
        <Link to={to} className="flex items-center justify-center px-3 py-2 text-sm font-medium text-white transition ease-in-out rounded-lg md:text-base font-poppins bg-btn hover:shadow-lg hover:opacity-80 duration-300 max-w-fit hover:bg-[#005071]">
            {children}
        </Link>  
    );
}
  
 
 