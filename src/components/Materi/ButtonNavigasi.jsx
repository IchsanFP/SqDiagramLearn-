import { Link } from "react-router-dom";

export default function ButtonNavigasi({ to, icon, children }) {
    return (
        <Link to={to} className="flex items-center justify-center p-2 text-sm font-medium text-white transition ease-in-out rounded-lg font-poppins bg-btn hover:shadow-lg hover:opacity-80 duration-300 max-w-fit hover:bg-[#005071]">
            {icon === "left" && <i className="ri-arrow-left-s-line"></i>}
            {children}
            {icon === "right" && <i className="ri-arrow-right-s-line"></i>}
        </Link>
        
    );
}
  
 