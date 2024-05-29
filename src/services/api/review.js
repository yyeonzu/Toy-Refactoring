import {axiosInstance} from './index';

export const postReview = async (data) => {
  console.log(data)
  try {
    const res = await axiosInstance.post('review', data, {
      headers: {'content-type': 'multipart/form-data'},
    });
    return true
  } catch (e) {
    console.log(e)
    if (e.response) {
      console.log(e.response.status);
    }
  }
};

export const getReview = async () => {
  try {
    const res = await axiosInstance.get('review', {
      headers: {'content-type': 'multipart/form-data'},
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteReview = async (reviewID) => {
  try {
    const res = await axiosInstance.delete(`review/${reviewID}`);
    return true
  } catch (e) {
    console.log(e.response);
  }
};
