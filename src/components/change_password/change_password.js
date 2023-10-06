function ChangePassword(){
    return (
        <>
        <main class="form-signin w-100 m-auto">
            <form>
                <div className="ChangePassword">
                <h1 class="h3 mb-3 fw-normal">THAY ĐỔI MẬT KHẨU</h1>
                <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Nhập mật khẩu cũ</label>
                </div><br/>
                <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Nhập mật khẩu mới</label>
                </div><br/>
                <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Nhập lại mật khẩu mới</label>
                </div>
                <button class="btn btn-primary w-100 py-2" type="submit">Xác nhận</button>
                </div>
            </form>
        </main>
        </>
    );
}
export default ChangePassword;