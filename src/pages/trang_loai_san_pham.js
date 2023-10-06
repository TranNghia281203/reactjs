import '../App.css';
import Header from '../components/header/header';
import Loaisanpham from '../components/content/loai_san_pham/loai_san_pham';
import '../bootstrap-5.2.3/css/bootstrap.min.css';
import Footer from '../components/footer/footer';
import Menu from '../components/header/menu';
function Trangloaisanpham(props){
    const dsLoaiSanPham=[
        {
            'ten':'Apple',
            'ds_san_pham':[
                {
                   'hinh_anh':'2.png',
                   'ten':'San pham 11',
                   'gia':50000000 
                },
                {
                    'hinh_anh':'2.png',
                    'ten':'San pham 12',
                    'gia':5000 
                 },
                 {
                    'hinh_anh':'2.png',
                    'ten':'San pham 13',
                    'gia':5000 
                 },
                 {
                  'hinh_anh':'2.png',
                  'ten':'San pham 13',
                  'gia':5000 
               },
            ]
        },
        {
            'ten':'Samsung',
            'ds_san_pham':[
                {
                   'hinh_anh':'2.png',
                   'ten':'San pham 21',
                   'gia':5000 
                },
                {
                  'hinh_anh':'2.png',
                  'ten':'San pham 21',
                  'gia':5000 
               },
               {
                'hinh_anh':'2.png',
                'ten':'San pham 21',
                'gia':5000 
             },
             {
              'hinh_anh':'2.png',
              'ten':'San pham 21',
              'gia':5000 
              },
                  ]
              }];
              const listLoaiSanPhams=dsLoaiSanPham.map(function(item)
            {
              return(
                <Loaisanpham data={item}/>
              );
            });
      return (
        <div className="App">
         <Header/>
          <Menu/><br/><br/>
         {listLoaiSanPhams}<br/>
         <div className='xemthem'>
         <button type="button" class="btn btn-secondary">Xem thêm (123 sản phẩm)</button></div>
         <Footer/>
        </div>
      );
    }
export default Trangloaisanpham;