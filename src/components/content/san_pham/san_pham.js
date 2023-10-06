import Anh_san_pham from './anh_san_pham';
import Ten_san_pham from './ten_san_pham';
import Gia_san_pham from './gia_san_pham';
import { NavLink } from 'react-router-dom';
function Sanpham(props){
//     return(<div className="card">
//     <div>
//         <Anh_san_pham url={props.data.hinh_anh}/>
//     </div>
//     <div className="body-card" >
//         
//         
//         <button type="button" class="btn btn-primary btn-lg">Chọn mua</button>
//     </div>
//   </div>);
  return(
    <>
    <div className="container2">
 <div className="wrapper1">
   <div className="banner-image"><Anh_san_pham url={props.data.hinh_anh}/> </div>
    <Ten_san_pham name={props.data.ten}/>
   <Gia_san_pham price={props.data.gia}/>
  </div>
  <div className="button-wrapper"> 
  <NavLink to="/Chi-tiet-san-pham">
  <button className="btn outline">Chi tiết</button></NavLink>
    <button className="btn fill">Thêm vào giỏ hàng</button>
  </div>
    </div>
   </>
  );
}
export default Sanpham;