function thongtintaikhoan(){
    return(
        <>
        <main class="form-signin w-100 m-auto">
            <form>
                <div className="LogUp">
                <h1 class="h3 mb-3 fw-normal">THÔNG TIN TÀI KHOẢN</h1>

                <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Họ và tên</label>
                </div><br/>
                <div class="form-floating">
                <input type="password" class="form-control" id="" placeholder=""/>
                <label for="floatingPassword">Số điện thoại</label>
                </div><br/>
                <div class="form-floating">
                <input type="password" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingPassword">Email</label>
                </div><br/>
               
                </div>
            </form>
        </main>
        </>
    );
}
export default thongtintaikhoan;