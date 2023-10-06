import { NavLink } from "react-router-dom";
function Timkiem(){
    return (
        <>
       <div className="search">
            <form action="#">
                <input type="text"
                       placeholder=" Tìm kiếm tại đây"
                       name="search"/>
                <button>
                    <i className="fa fa-search">
                    </i>
                </button>
            </form>
        </div>
          {/* <div>
          <NavLink to="/Login" class="btn btn-primary">Đăng nhập</NavLink>
         <button type="button" class="btn btn-primary">Đăng ký</button></div> */}
        <div className="container1">
          <div>
          <NavLink to="/Login">
            <button class="log">ĐĂNG NHẬP</button></NavLink>
            <NavLink to="/Signup"><button class="reg">ĐĂNG KÝ</button></NavLink>
          </div>
        </div>
        </>
    );
}
export default Timkiem;