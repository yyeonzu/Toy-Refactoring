import {axiosInstance} from './index';

export const getBooks = async (category, topic, is_domestic = 1) => {
  try {
    const response = await axiosInstance.get(`/books/${is_domestic}/${category}/${topic}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getRecords = async (category, topic) => {
  try {
    const response = await axiosInstance.get(`/records/${category}/${topic}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getGoods = async () => {
  try {
    const response = await axiosInstance.get(`/goods`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
