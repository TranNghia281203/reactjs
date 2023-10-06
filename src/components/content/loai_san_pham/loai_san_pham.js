import Sanpham from "../san_pham/san_pham";
function Loaisanpham(props){
    const listSanPhams=props.data.ds_san_pham.map(function(item){
        return(
            <Sanpham data={item}/>
        );
    });
    return(
        <>
        <div className="LSP">
        <h3 className="ten-loai-san-pham">{props.data.ten}</h3>
        </div>
        <a href="">Xem tất cả</a>
        <div className='sp'>{listSanPhams}</div>
        </>
    );
}
export default Loaisanpham;