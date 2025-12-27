import { MdShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-blue-500">
            <div className="flex flex-row justify-between">
                
                <NavLink to="/">
                <div>
                    <img src="../logo.png" className="h-14" alt="logo-of-Navbar"/>
                    </div>

                </NavLink>
                <div>
                    <NavLink to="/">   <p className="text-red-500 bg-blue-600 text-white rounded">HOME</p>   </NavLink>  
                   <NavLink to="/cart"><div> <MdShoppingCart/></div>    </NavLink> 
                  
                </div>
            </div>
        </div>
    )
};

export default Navbar;  