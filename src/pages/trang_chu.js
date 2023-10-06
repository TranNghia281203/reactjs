import '../App.css';
import Header from '../components/header/header';
import Banner from '../components/banner/banner';
import Loaisanpham from '../components/content/loai_san_pham/loai_san_pham';
import Sanpham from '../components/content/san_pham/san_pham';
import Trangloaisanpham from './trang_loai_san_pham';
import '../bootstrap-5.2.3/css/bootstrap.min.css';
import Footer from '../components/footer/footer';
import Menu from '../components/header/menu';
import { useEffect, useState } from 'react';
function Trangchu() {
  const [dsLoaiSanPham,setDSLoaiSanPham]=useState([]);
    useEffect(()=>{
      fetch('http://localhost:9000/get-data.php')
      .then(response=>response.json())
      .then(json=>setDSLoaiSanPham(json))
    },[]);
          const listLoaiSanPhams=dsLoaiSanPham.map(function(item)
        {
          return(
            <Loaisanpham data={item}/>
          );
        });
  return (
    <div className="App">
     <Header/><br/>
     <Menu/>
     <Banner/>
     {listLoaiSanPhams}
     <Footer/>
    </div>
  );
}

export default Trangchu;
