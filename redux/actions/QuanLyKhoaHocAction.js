import {
  LAY_DANH_SACH_KHOA_HOC,
  LAY_CHI_TIET_KHOA_HOC,
  CHANGE_PAGE,
  LAY_DANH_MUC_KHOA_HOC,
  LAY_KHOA_HOC_THEO_DANH_MUC
} from "../constants/QuanLyKhoaHoc";
import axios from "../../utils/axios";

export const layDanhSachKhoaHocAction = danhSachKhoaHoc => {
  return {
    type: LAY_DANH_SACH_KHOA_HOC,
    data: danhSachKhoaHoc
  };
};

export const layChiTietKhoaHocAction = khoaHoc => {
  return {
    type: LAY_CHI_TIET_KHOA_HOC,
    data: khoaHoc
  };
};
export const layDanhMucKhoaHocAction = danhMucKhoaHoc => {
  return {
    type: LAY_DANH_MUC_KHOA_HOC,
    data: danhMucKhoaHoc
  };
};
export const layKhoaHocTheoDanhMucAction = danhSachKhoaHocDm => {
  return {
    type: LAY_KHOA_HOC_THEO_DANH_MUC,
    data: danhSachKhoaHocDm
  };
};
export const layChiTietKhoaHoc = ({ maKhoaHoc }) => {
  return dispatch => {
    axios
      .request({
        method: "get",
        url: `QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
      })
      .then(result => {
        dispatch(layChiTietKhoaHocAction(result.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const LayDanhMucKhoaHoc = () => {
  return dispatch => {
    axios
      .request({
        method: "get",
        url: "QuanLyKhoaHoc/LayDanhMucKhoaHoc"
      })
      .then(result => {
        dispatch(layDanhMucKhoaHocAction(result.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
export const LayKhoaHocTheoDanhMuc = ({ maDanhMuc }) => {
  return dispatch => {
    axios
      .request({
        method: "get",
        url: `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP09`
      })
      .then(result => {
        dispatch(layKhoaHocTheoDanhMucAction(result.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
export const LayDanhSachKhoaHocBT = () => {
  return dispatch => {
    axios
      .request({
        method: "get",
        url:
          "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09"
      })
      .catch(result => {
        dispatch(layDanhMucKhoaHocAction(result.data));
      })
      .then(error => {});
  };
};
export const LayDanhSachKhoaHoc = (currentPage, pageSize) => {
  return dispatch => {
    //gọi API
    axios
      .request({
        method: "get",
        url: `QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${currentPage}&pageSize=${pageSize}&MaNhom=GP09`
      })
      .then(result => {
        dispatch(layDanhSachKhoaHocAction(result.data));
        
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const changePageAction = page => {
  return {
    type: CHANGE_PAGE,
    data: page
  };
};
