import { NavLink } from "react-router-dom";
function GioHang(){
    return(
        <>

        <h1>GIỎ HÀNG </h1>
        <table class="table table-bordered">
        <thead>
    <tr>
      <th scope="col">SẢN PHẨM</th>
      <th scope="col">ĐƠN GIÁ</th>
      <th scope="col">SỐ LƯỢNG</th>
      <th scope="col">THÀNH TIỀN</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="row g-0">
                <div class="col-md-4">
                <img src="2.png" class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h6 class="card-title">Tên sản phẩm</h6>
                </div>
                </div>
            </div></td>
      <td>2.000</td>
      <td> <input type="number" id="quantity" name="quantity" min="1" max="99"/></td>
      <td>20.000</td>
      <td>
          <button type="button" class="btn btn-danger">XÓA</button>
          <button type="button" class="btn btn-info">CẬP NHẬT</button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
  </table>
        <button type="button" class="btn btn-primary">Tiếp tục mua hàng</button>
        <div className="Thanhtoan">
            <NavLink to="/Thanh-toan">
                <button type="button" class="btn btn-primary">Thanh toán</button>
            </NavLink>
        </div>
        </>
    );
}
export default GioHang;