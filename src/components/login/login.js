function Login(){
    return(
        <>     
        <main class="form-signin w-100 m-auto">
            <form>
                <div className="Login">
                <h1 class="h3 mb-3 fw-normal">ĐĂNG NHẬP</h1>

                <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Nhập Email</label>
                </div><br/>
                <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Nhập mật khẩu</label>
                </div>
                <div class="form-check text-start my-3">
                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    Remember me
                </label>
                </div>
               
                <button class="btn btn-primary w-100 py-2" type="submit">Đăng nhập</button>
                <p>Bạn chưa có tài khoản? <a href="">Đăng ký ngay</a></p>
                </div>
            </form>
        </main>
        </>
    );
}
export default Login;