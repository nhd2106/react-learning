import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LayDanhSachKhoaHoc, changePageAction, LayDanhMucKhoaHoc } from "../../redux/actions/QuanLyKhoaHocAction";
import Slider from 'react-slick'
import PaginationComponent from "../../Layout/Pagination/Pagination";


const DanhSachKhoaHoc = (...props) => {
  const dispatch = useDispatch();
  
  
  const onChangePage = page => dispatch(changePageAction(page));
  const {danhSachKhoaHoc,currentPage, totalCount,danhMucKhoaHoc} = useSelector(
    state => state.quanLyKhoaHoc
  );

  useEffect(() => {
    dispatch(LayDanhSachKhoaHoc(currentPage,9))
    dispatch(LayDanhMucKhoaHoc())
    
  }, [currentPage]);


  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    centerPadding: 30
}

  console.log(props[0].history);
  

  return (
    <div className="container">
      <div className="text-left my-5">
        <h2>All Courses</h2>
        <h3>Courses to get you started</h3>
      </div>
           
      <div>
        <div>
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
             
              {
                danhMucKhoaHoc.map(item=>(
                  <a
                className="nav-item nav-link"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-profile"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                {item.tenDanhMuc}
              </a>
                ))
              }
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div >
                <Slider {...settings}>
                {danhSachKhoaHoc.map(item => (
                  <div type='button' onClick = {()=> props[0].history.push(`/chi-tiet/${item.maKhoaHoc}`)}>
                      <div className="card text-left">
                    <img
                      className="card-img-top"
                      src={item.hinhAnh}
                      alt
                      width='100%' height='150px'
                    />
                    <div className="card-body">
                <h5 className="card-title text-truncate">{item.tenKhoaHoc}</h5>
                <p className="card-text text-truncate">{item.moTa}</p>
                <p> <span>4.5</span>
                    <i class="fa fa-star ml-2" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half" aria-hidden="true"></i>
                </p>
                <p>
                    $189.99
                </p>
                <p>
                    Best seller
                </p>
                    </div>
                  </div>
                  </div>
                ))}
                </Slider>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div>
              <Slider {...settings}>
                {danhSachKhoaHoc.map(item => (
                  <div type='button' onClick = {()=> props[0].history.push(`/chi-tiet/${item.maKhoaHoc}`)} >
                      <div className="card text-left">
                    <img
                      className="card-img-top"
                      src={item.hinhAnh}
                      alt
                      width='100%' height='150px'
                    />
                    <div className="card-body">
                <h5 className="card-title text-truncate">{item.tenKhoaHoc}</h5>
                <p className="card-text text-truncate">{item.moTa}</p>
                <p> <span>4.5</span>
                    <i class="fa fa-star ml-2" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half" aria-hidden="true"></i>
                </p>
                <p>
                    $189.99
                </p>
                <p>
                    Best seller
                </p>
                    </div>
                  </div>
                  </div>
                ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* danh sách tất cả khóa học */}
    <div className='row mt-5'>
        <div className='col-md-3'>

        </div>
        <div className='col-md-9'>
           {
               danhSachKhoaHoc.map(item=>(
                <div className='row' type="button" onClick = {()=> props[0].history.push(`/chi-tiet/${item.maKhoaHoc}`)}>
                    <div className='col-md-4 mb-3'>
                            <img src={item.hinhAnh} width="100%"/>
                    </div>
                    <div className='col-md-8 text-left'>
               <p><strong>{item.tenKhoaHoc}</strong></p>
               <p>{item.moTa}</p>
               <p>by cybersoft team</p>
               <p>  4.7
                   <i class="fa fa-star ml-2" aria-hidden="true"></i>
                   <i class="fa fa-star" aria-hidden="true"></i>
                   <i class="fa fa-star" aria-hidden="true"></i>
                   <i class="fa fa-star" aria-hidden="true"></i>
                   <i class="fa fa-star-half mr-3" aria-hidden="true"></i>
                   <span>19 total hours</span>
               </p>
                    </div>

                </div>
               ))
           }
        </div>

    </div>
    </div>
  );
};

export default DanhSachKhoaHoc;
