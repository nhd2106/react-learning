import {
  LAY_DANH_SACH_KHOA_HOC,
  LAY_CHI_TIET_KHOA_HOC,
  CHANGE_PAGE,
  LAY_DANH_MUC_KHOA_HOC,
  LAY_KHOA_HOC_THEO_DANH_MUC
} from "../constants/QuanLyKhoaHoc";

const initialState = {
  danhSachKhoaHoc: [],
  chiTietKhoaHoc: {},
  danhMucKhoaHoc: [],
  danhSachKhoaHocDm: [],
  currentPage: 1,
  totalCount: 0
  
};

const quanLyKhoaHocReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAY_DANH_SACH_KHOA_HOC:
      return {
        ...state,
        danhSachKhoaHoc: action.data.items
      };

    case LAY_CHI_TIET_KHOA_HOC:
      return {
        ...state,
        chiTietKhoaHoc: action.data
      };
    case LAY_DANH_MUC_KHOA_HOC: 
    return {
        ...state,
        danhMucKhoaHoc: action.data
    };
    case LAY_KHOA_HOC_THEO_DANH_MUC:
      return{
        ...state,
        danhSachKhoaHocDm: action.data
      }
    case CHANGE_PAGE: {
      return {
        ...state,
        currentPage: action.data,
        
      };
    }

    default:
      return state;
  }
};
export default quanLyKhoaHocReducer;
