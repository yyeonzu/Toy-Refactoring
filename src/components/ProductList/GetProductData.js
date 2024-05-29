import {getBooks} from '../../services/api/productlist';
import {bookClassification} from './Classification';

// export const fetchAllBooks = async (productObjs = bookClassification, category = '건강/취미') => {
//   const categoryIndex = getIndex(category);
//   const topics = Object.keys(productObjs[category]);
//   const productlist = [];

//   for (const [topicIndex] of topics.entries()) {
//     const products = await getBooks(categoryIndex + 1, topicIndex + 1);
//     if (products) {
//       productlist.push(...products.booklist);
//     }
//     if (products.booklist.length === 0) {
//       console.error(products);
//     }
//   }
//   return productlist;
// };

// export const fetchAllRecords = async (productObjs = recordClassification, category = '아이돌') => {
//   const categoryIndex = getIndex(category);
//   const topics = Object.keys(productObjs[category]);
//   const productlist = [];

//   for (const [topicIndex] of topics.entries()) {
//     const products = await getRecords(categoryIndex + 1, topicIndex + 1);
//     if (products) {
//       productlist.push(...products.recordlist);
//     }
//     if (products.recordlist.length === 0) {
//       console.error(products);
//     }
//   }
//   return productlist;
// };

class ProductFetcher {
  constructor(productObjs, category, getIndex, getProducts) {
    this.productObjs = productObjs;
    this.category = category;
    this.getIndex = getIndex;
    this.getProducts = getProducts;
  }

  async fetchAllProducts() {
    const categoryIndex = this.getIndex(this.category);
    const topics = Object.keys(this.productObjs[this.category]);
    const productlist = [];

    for (const [topicIndex] of topics.entries()) {
      const products = await this.getProducts(categoryIndex + 1, topicIndex + 1);
      if (products) {
        productlist.push(...products.productlist);
      }
      if (products.productlist.length === 0) {
        console.error(products);
      }
    }

    return productlist;
  }
}

export class BookFetcher extends ProductFetcher {
  constructor(productObjs = bookClassification, category = '건강/취미', getIndex) {
    super(productObjs, category, getIndex, async (categoryIndex, topicIndex) => {
      const products = await getBooks(categoryIndex, topicIndex);
      if (products) {
        return {productlist: products.booklist}; // booklist 반환
      }
      return {productlist: []}; // 빈 리스트 반환
    });
  }
}
