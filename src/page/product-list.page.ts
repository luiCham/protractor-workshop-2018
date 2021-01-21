import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private products: ElementFinder;
  private addButton: ElementFinder;

  constructor () {
    this.products = $('#center_column ul.product_list');
    this.addButton = $('#add_to_cart > button');
  }

  public async findByProduct(name:string) {
    return await this.products.$$('.product-container').filter(async (product) => {
      return await product.$('.product-name').getText().then((productName) => {
        return productName === name;
      });
    }).first();
  }

  public async selectProduct(name:string) {
    const product = this.findByProduct(name);
    await (await product).$('.product-image-container .replace-2x').click();
  }

  public async addSelectedToCart() {
    await this.addButton.click();
  }
}
