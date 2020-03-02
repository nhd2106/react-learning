import axios from '../../utils/axios';
import { LAY_THONG_TIN_NGUOI_DUNG } from '../constants/QuanLyNguoiDung';

export const LayThongTinNguoiDung = nguoiDung =>{
    return{
        type: LAY_THONG_TIN_NGUOI_DUNG,
        data: nguoiDung
    }
}

export const DangNhapAction = (values,handleSuccess) => {
     return dispatch => {
         axios.request({
             method: 'post',
             url:"QuanLyNguoiDung/DangNhap",
             data: values
         }).then(result =>{
             localStorage.setItem("UserInfo",JSON.stringify(result.data))
             dispatch(LayThongTinNguoiDung(result.data))
             handleSuccess()
         })
     }
}