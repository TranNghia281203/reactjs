function QLDH(){
    return(
        <>
           <h1>QUẢN LÝ ĐƠN HÀNG</h1>
           <button type="button" class="btn btn-primary">Thêm mới</button><br/><br/>
           <div className="quanlydonhang">
        <table class="table table-bordered">
        <thead>
    <tr>
      <th scope="col">MÃ ĐƠN ĐẶT HÀNG</th>
      <th scope="col">KHÁCH HÀNG</th>
      <th scope="col">NGÀY LẬP</th>
      <th scope="col">NGÀY GIAO</th>
      <th scope="col">NƠI GIAO</th>
      <th scope="col">HÌNH THỨC THANH TOÁN</th>
      <th scope="col">THÀNH TIỀN</th>
      <th scope="col">TRẠNG THÁI THANH TOÁN</th>
      <th scope="col">HÀNH ĐỘNG</th>

    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="row">1</th>
      <td>Trần Thành Nghĩa</td>
      <td> 6-10-2023</td>
      <td>10-10-2023</td>
      <td>Tôn Đản, Phường 8 Quận 4, Tp HCM</td>
      <td>COD</td>
      <td>25.000.000đ</td>
      <td><div className="alert">Chưa xử lý
        </div>
</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
  </table>
  </div>
        </>
    );
}
export default QLDH;