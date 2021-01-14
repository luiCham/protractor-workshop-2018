import { browser } from 'protractor';
// tslint:disable-next-line: max-line-length
import { MenuContentPage, ProductListPage, ProductAddedModalPage, SummaryStepPage, SignInPage, AddressPage, ShippingPage, PaymentPage, BankPaymentPage, OrderSummaryPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const email = 'j.l-h@hotmail.com';
  const password = 'vkvkvkvk';
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInPage: SignInPage = new SignInPage();
  const addressPage: AddressPage = new AddressPage();
  const shippingPage: ShippingPage = new ShippingPage();
  const paymentPage: PaymentPage = new PaymentPage();
  const bankpaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await (browser.sleep(1000));

    await menuContentPage.goToTShirtMenu();
    await (browser.sleep(1000));

    await productListPage.goToShirt();
    await (browser.sleep(1000));

    await productAddedModalPage.goTocheckout();

    await summaryStepPage.goToNextPage();

    await signInPage.fillEmail(email);
    await signInPage.fillPassword(password);
    await signInPage.goToNextPage();

    await addressPage.goToNextPage();

    await shippingPage.checkTermsOfService();
    await shippingPage.goToNextPage();

    await paymentPage.goToBankPayment();

    await bankpaymentPage.pay();

    await (expect(orderSummaryPage.getMessage()).toBe('Your order on My Store is complete.'));
  });
});
