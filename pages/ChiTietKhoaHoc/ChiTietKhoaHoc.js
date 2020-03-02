import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layChiTietKhoaHoc } from "../../redux/actions/QuanLyKhoaHocAction";
import {withRouter} from 'react-router-dom'
const ChiTietKhoaHoc = (...props) => {
  const dispatch = useDispatch()
  const chiTietKhoaHoc = useSelector(state =>state.quanLyKhoaHoc.chiTietKhoaHoc)
  
  
  useEffect(()=>{
    
    
    const maKhoaHoc = props[0].match.params
    console.log(maKhoaHoc,'aaaaaaaaaaa');
    dispatch(layChiTietKhoaHoc(maKhoaHoc))
    
    
    
  },[])
  console.log(chiTietKhoaHoc);
  
  return (
    <div className='container my-5'>
      <div className="row container">
        
        <div className='col-md-7 text-left'>
          <div>page direction</div>
  <h3>{chiTietKhoaHoc.tenKhoaHoc}</h3>
          <p>{chiTietKhoaHoc.moTa}</p>
          <div className='mb-2'>
            <i class="fa fa-star mr-2" aria-hidden="true"></i>
            4.6 (23265) 217,393 students
            
          </div>
          <button className='btn mr-2'>Share <i class="fa fa-share ml-2"></i></button>
          <button className='btn'>Gift this course</button>
          <div className='my-3'>
            <h4 className='my-3'>What you'll learn</h4>
  <p><i class="fa fa-check mr-3"></i><span>Use {chiTietKhoaHoc.tenKhoaHoc}</span></p>
            <p><i class="fa fa-check mr-3"></i><span>Use SQL to perform data analysis</span></p>
            <p><i class="fa fa-check mr-3"></i><span>Be comfortable putting SQL and PostgreSQL on their resume</span></p>
          </div>
          
          <div className='my-3'>
            <h4 className='my-3'>What you'll learn</h4>
            <p><i class="fa fa-play mr-3"></i><span>8.5 hours on-demand video</span></p>
            <p><i class="fa fa-file mr-3"></i><span>25 articles</span></p>
            <p><i class="fa fa-download mr-3"></i><span>16 downloadable resources</span></p>
            <p><i class="fa fa-hourglass mr-3"></i><span>16 downloadable resources</span></p>
            
            <p><i class="fa fa-certificate mr-3"></i><span>16 downloadable resources</span></p>
          </div>
        </div>

        <div className="col-md-5">
          <div className="card text-center">
            <img className="card-img-top" src={chiTietKhoaHoc.hinhAnh} alt />
            <div className="card-body">
              <h5 className="card-title">199,99 $</h5>
              <div><button className='btn btn-success'> Buy now</button></div>
              <div><button className='btn  btn-primary'>Add to cart</button></div>
              <div className='display-5'>30-Day Money-Back Guarantee</div>
              <div><button className='btn'>Add to wishlist</button></div>
              <div><button className='btn'>Apply coupon</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiTietKhoaHoc
