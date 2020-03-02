import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LayDanhSachKhoaHoc, LayDanhMucKhoaHoc } from '../../../redux/actions/QuanLyKhoaHocAction';
import {withRouter} from 'react-router-dom'
import Slider from 'react-slick'
const  Categories =(...props) => {
    const dispatch = useDispatch();
    const {danhSachKhoaHoc,currentPage, totalCount,danhMucKhoaHoc} = useSelector(
        state => state.quanLyKhoaHoc
      );

      useEffect(() => {
        dispatch(LayDanhSachKhoaHoc(currentPage,20))
        dispatch(LayDanhMucKhoaHoc())
      }, [currentPage]);
      
      
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        centerPadding: 30
    }

    return (
        <div className='container mt-5 mb-5'>

        <div>
            <h3>Popular Courses</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui neque sint eveniet tempore sapiente.</p>
          
        </div>

        <div className='row'>
              
                {
                    danhMucKhoaHoc.map(item=>(
                          
                    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'> <div className='py-2 my-3' type='button' onClick={()=> props[0].history.push(`/khoa-hoc-theo-danh-muc/${item.maDanhMuc}`)} style={{boxShadow:'0 0 1px 1px rgba(20,23,28,.1)'}}>{item.tenDanhMuc}</div></div>
                    
                    
                    
              
                    ))
                }
               




        </div>
        {/* các khóa học nè */}
        <Slider className='mt-5 ' {...settings} >

            {
                danhSachKhoaHoc.map(item => (
                    <div key={item} >
                        <div className="card text-right text-dark bg-light " type='button' onClick = {()=> props[0].history.push(`/chi-tiet/${item.maKhoaHoc}`)} >
                            <img className="card-img-top overflow-hidden" src={item.hinhAnh} alt='hinh-anh-khoa-hoc.' width='100%' height='208px' />
                            <div className="card-body text-left">
                                <h6 className="card-title  text-truncate">{item.tenKhoaHoc}</h6>
                                <p className="card-text text-truncate" >{item.moTa}</p>
                                <div className='d-flex justify-content-between'>
                                    <div className='text-left'>
                                        <div>Rates</div>
                                        <div>
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-half" />
                                        </div>


                                    </div>
                                    <div>
                                        <div>2219/6000</div>
                                        <div>$4.99</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }


        </Slider>

    </div>
    )
}

export default withRouter(Categories);
