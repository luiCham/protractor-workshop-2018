import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private shirt: ElementFinder;

  constructor () {
    this.shirt = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToShirt(): Promise<void> {
    await this.shirt.click();
  }
}
