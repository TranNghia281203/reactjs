import Timkiem from "./timkiem";
import Menu from "./menu";
import { NavLink } from "react-router-dom";
function Header(){
    return(
        <>
        <div className="header">
            <img src="logoapple.png" className="img" alt="img"></img>
            <Timkiem/><div>
            <NavLink to="/Gio-hang">
            <img src="shopping-cart.png" className="logoGioHang" alt="img"></img></NavLink> 
            <NavLink to="/Gio-hang">Giỏ hàng</NavLink></div>
        </div><br/>
        </>
    );
}
export default Header;