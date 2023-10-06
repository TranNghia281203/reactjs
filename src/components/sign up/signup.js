function Signup(){
    return(
        <>
        <main class="form-signin w-100 m-auto">
            <form>
                <div className="LogUp">
                <h1 class="h3 mb-3 fw-normal">ĐĂNG KÝ</h1>

                <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Nhập họ và tên</label>
                </div><br/>
                <div class="form-floating">
                <input type="password" class="form-control" id="" placeholder=""/>
                <label for="floatingPassword">Nhập số điện thoại</label>
                </div><br/>
                <div class="form-floating">
                <input type="password" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingPassword">Nhập Email</label>
                </div><br/>
                <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Nhập mật khẩu</label>
                </div><br/>
                <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Nhập lại mật khẩu</label>
                </div>
                <div class="form-check text-start my-3">
                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                   Tôi đồng ý với các điều khoản bảo mật cá nhân
                </label>
                </div>
               
                <button class="btn btn-primary w-100 py-2" type="submit">Đăng ký</button>
                <p>Bạn đã có tài khoản? <a href="">Đăng nhập ngay</a></p>
                </div>
            </form>
        </main>
        </>
    );
}
export default Signup;