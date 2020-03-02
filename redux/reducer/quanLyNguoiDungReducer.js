import { LAY_THONG_TIN_NGUOI_DUNG } from "../constants/QuanLyNguoiDung";

const initialValue = {
    userInfo: {}
}

const quanLyNguoiDungReducer = (state= initialValue, action) => {
     
    switch (action.type) {
        case LAY_THONG_TIN_NGUOI_DUNG :{
            return{
                ...state,
                userInfo: action.data  

            }
        }
            
        
    
        default:
            return state
    }

}
export default quanLyNguoiDungReducer