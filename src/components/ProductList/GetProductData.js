import {getBooks} from '../../services/api/productlist';
import {bookClassification} from './Classification';

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
