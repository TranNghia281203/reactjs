function Thanhtoan(){
    return(
        <>
        <h1>THANH TOÁN </h1>
        <h5>Danh sách sản phẩm:</h5>
        <table class="table table-bordered">
        <thead>
            <tr>
            <th scope="col">SẢN PHẨM</th>
            <th scope="col">ĐƠN GIÁ</th>
            <th scope="col">SỐ LƯỢNG</th>
            <th scope="col">THÀNH TIỀN</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>
                <div class="row g-0">
                        <div class="col-md-4">
                            <div className="anhthanhtoan">
                        <img src="2.png" class="img-fluid rounded-start" alt="..."/></div>
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
        </table><br/>
        <div>
        <div className="hinhthuc"> <h4> Hình thức thanh toán:</h4>
            <form>
          <input type="radio" id="cod" name="fav_language" value="COD"/>
          <label for="cod">COD</label><br/>
          <input type="radio" id="chuyenkhoan" name="fav_language" value="Chuyenkhoan"/>
          <label for="">Chuyển khoản ngân hàng</label><br/>
          <input type="radio" id="momo" name="fav_language" value="Momo"/>
          <label for="momo">Thanh toán qua momo</label>
        </form>
        </div>
        <h4> Thông tin người nhận hàng:</h4></div>
        <div className="tt">
            <div className="thongtin">
                <div class="mb-3">
                <label for="basic-url" class="form-label">Họ tên</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"/>
                    </div>
                </div>
                <div class="mb-3">
                <label for="basic-url" class="form-label">Điện thoại</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"/>
                    </div>
                </div>
                <div class="mb-3">
                <label for="basic-url" class="form-label">Địa chỉ</label>
                    <div class="input-group">
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"/>
                    </div>
                </div>
            </div>
            
         
        </div>
       

       
       

        <div className="Thanhtoan">
        <button type="button" class="btn btn-primary">Thanh toán</button></div>
        </>
    );
}
export default Thanhtoan;