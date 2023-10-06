import { NavLink } from "react-router-dom";
function Menu() {
  // return (<div className="menu">
  //   <div className="row">
  //     <div className="col-md-12">
  //       <div className="row">
  //         <div className="col">
  //           <NavLink to="/" class="navbar-brand" aria-current="page">TRANG CHỦ</NavLink>
  //         </div>
  //         <div className="col">
  //           <NavLink to="/Danh-sach-san-pham" class="nav-link">SẢN PHẨM</NavLink>
  //         </div>
  //         <div className="col-md-3">
  //           <a class="nav-link" href="">VỀ CHÚNG TÔI</a>
  //         </div>
  //         <div className="col-md-3">
  //           <a class="nav-link" href="">TIN TỨC</a>
  //         </div>
  //         <div className="col">
  //           <a class="nav-link ">LIÊN HỆ</a>
  //         </div>
  //         <div className="col">
  //           <NavLink to="/Gio-hang" class="nav-link">GIỎ HÀNG</NavLink>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>);

    return(
      <>
      <div className="menugroup">
        <ul>
        <NavLink to="/">
          <li><a href="">Home</a></li></NavLink>
          <NavLink to="/Danh-sach-san-pham">
          <li><a href="">LOAISP</a></li></NavLink>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          <NavLink to="/Quan-ly-don-hang">
          <li><a href="">Quản lý đơn hàng</a></li></NavLink>
          <NavLink to="/Thay-doi-mat-khau">
          <li><a href="">Thay đổi mật khẩu</a></li></NavLink>
        </ul>
      </div>
      <br/><br/>
      </>
      );
    }
export default Menu;

