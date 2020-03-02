import { combineReducers } from "redux";
import quanLyKhoaHoc from './quanLyKhoaHocReducer'
import quanLyNguoiDungReducer from './quanLyNguoiDungReducer'
export default combineReducers ({
    quanLyKhoaHoc,
    quanLyNguoiDungReducer
})