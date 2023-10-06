import Header from '../components/header/header';
import chitietsanpham1 from '../components/content/chi_tiet_san_pham/chi_tiet_san_pham';
import Menu from '../components/header/menu';
import Loaisanpham from '../components/content/loai_san_pham/loai_san_pham';
import Footer from '../components/footer/footer';
function ChitietsanphamPage(){
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
        }
        
              
              ];
              const listLoaiSanPhams=dsLoaiSanPham.map(function(item)
            {
              return(
                <Loaisanpham data={item}/>
              );
            });
    return(
        <>
         <Header/>
         <Menu/>
         <div class="containerchitiet">
		<div className="card1">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src="15.jpg" /></div>
						  <div class="tab-pane" id="pic-2"><img src="16.png" /></div>
						  <div class="tab-pane" id="pic-3"><img src="17.png" /></div>
						  <div class="tab-pane" id="pic-4"><img src="19.jpg" /></div>
						</div>
						<ul class="preview-thumbnail nav nav-tabs">
						  <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="15.jpg" /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img src="16.png" /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src="17.png" /></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img src="19.jpg" /></a></li>
						</ul>
						
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">Iphone 15</h3>
						<div class="rating">
							<div class="stars">
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<span class="review-no">41 reviews</span>
						</div>
						<p class="product-description">Hôm nay, Apple đã ra mắt iPhone 15 và iPhone 15 Plus, giúp chụp ảnh chân dung dễ dàng hơn với chi tiết rõ nét và khả năng chụp ảnh trong điều kiện ánh sáng yếu. Với chip A16 Bionic mang lại hiệu năng mạnh mẽ đã được chứng minh, cổng kết nối USB‑C, tính năng Tìm Chính Xác dành cho Tìm Bạn, cùng các tính năng về độ bền hàng đầu trong ngành,</p>
						<br/><h4 class="price">Giá: <span>24.490.000đ</span></h4>
						<h5 class="colors">Màu sắc:
							<span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
							<span class="color green"></span>
							<span class="color blue"></span>
						</h5>
						<div class="action">
							<button class="add-to-cart btn btn-default" type="button">Thêm vào giỏ hàng</button>
							<button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    {listLoaiSanPhams}
        <Footer/>
        </>
    );
}
export default ChitietsanphamPage;