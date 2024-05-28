import {axiosInstance} from './index';

export const postCart = async (data) => {
  try {
    const res = await axiosInstance.post('carts', data);
    return true
  } catch (e) {
    console.log(e)
    alert(e.response.data.message);
  }
};

export const addtoCart = async (data) => {
  const res = await postCart(data);
  if (res) {
    const ans = window.confirm('장바구니 페이지로 이동하시겠습니까?');
    if (ans) {
      window.location('/basket');
    }
  }
};