
import './App.css';
import Trangchu from './pages/trang_chu';
import Chitietsanpham from './pages/chi_tiet_san_pham';
import './bootstrap-5.2.3/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Trangloaisanpham from './pages/trang_loai_san_pham';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import GioHangPage from './pages/gio_hang';
import ThanhtoanPage from './pages/thanh_toan';
import ChitietsanphamPage from './pages/chi_tiet_san_pham';
import QLDHPage from './pages/quan_ly_don_hang';
import tttkPage from './pages/thong_tin_tai_khoan';
import ChangePasswordPage from './pages/change_password';
function App() {
  
  
  return (
  <Routes>
    <Route path="/Login" element={<LoginPage/>}/>
    <Route path="/Signup" element={<SignupPage/>}/>
    <Route path="/" element={<Trangchu/>}/>
    <Route path="/Danh-sach-san-pham" element={<Trangloaisanpham/>}/>
    <Route path="/Gio-hang" element={<GioHangPage/>}/>
    <Route path="/Thanh-toan" element={<ThanhtoanPage/>}/>
    <Route path="/Chi-tiet-san-pham" element={<ChitietsanphamPage/>}/>
    <Route path="/Quan-ly-don-hang" element={<QLDHPage/>}/> 
    <Route path="/Thong-tin-tai-khoan" element={<tttkPage/>}/>
    <Route path="/Thay-doi-mat-khau" element={<ChangePasswordPage/>}/>
  </Routes>

  );
}

export default App;
