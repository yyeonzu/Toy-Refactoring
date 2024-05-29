import {axiosInstance} from './index';

export const getSearch = async (keyword) => {
  try {
    const response = await axiosInstance.get(`/search?word=${keyword}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
