import {axiosInstance} from './index';

export const getBookDetail = async (bookId) => {
  try {
    const res = await axiosInstance.get(`books/${bookId}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getRecordDetail = async (recordId) => {
  try {
    const res = await axiosInstance.get(`records/${recordId}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getMerchDetail = async (merchId) => {
  try {
    const res = await axiosInstance.get(`goods/${merchId}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
