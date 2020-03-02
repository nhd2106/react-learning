import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer/Footer';
import TrangChu from './pages/TrangChu/TrangChu';
import ChiTietKhoaHoc from './pages/ChiTietKhoaHoc/ChiTietKhoaHoc';
import DanhSachKhoaHoc from './pages/DanhSachKhoaHoc/DanhSachKhoaHoc';
import DangNhap from './pages/DangNhap/DangNhap';
import KhoaHocTheoDanhMuc from './pages/KhoaHocTheoDanhMuc/KhoaHocTheoDanhMuc';
import ScrollToTop from './AppEffect/ScrollToTop';
import UserAuth from './Auth/UserAuth';

function App() {
  return (
    <div className="App">
      <Header/>
     
      <ScrollToTop>
      <Switch>
     
     <Route path='/trang-chu' component={TrangChu}/>
     <Route path='/sign-in' component={DangNhap}/>
     <UserAuth path='/courses' component={DanhSachKhoaHoc}/>
     <Route path='/chi-tiet/:maKhoaHoc' component={ChiTietKhoaHoc}/>
     <Route path='/khoa-hoc-theo-danh-muc/:maDanhMuc' component={KhoaHocTheoDanhMuc}/>
      <Route path='/' component={TrangChu}/>
     
   </Switch>
      </ScrollToTop>
      <Footer/>
    </div>
  );
}

export default App;
