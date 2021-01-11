import { browser } from 'protractor';
// tslint:disable-next-line: max-line-length
import { MenuContentPage, ProductListPage, ProductAddedModalPage, SummaryStepPage, SignInPage, AddressPage, ShippingPage, PaymentPage, BankPaymentPage, OrderSummaryPage } from '../src/page';

describe('Buy a t-shirt', () => {
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

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(3000));

    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));

    await productListPage.goToShirt();
    await(browser.sleep(3000));

    await productAddedModalPage.goTocheckout();
    await(browser.sleep(3000));

    await summaryStepPage.goToNextPage();
    await(browser.sleep(3000));

    await signInPage.fillEmail();
    await signInPage.fillPassword();
    await signInPage.goToNextPage();
    await(browser.sleep(3000));

    await addressPage.goToNextPage();
    await(browser.sleep(3000));

    await shippingPage.checkTermsOfService();
    await(browser.sleep(3000));
    await shippingPage.goToNextPage();
    await(browser.sleep(3000));

    await paymentPage.goToBankPayment();
    await(browser.sleep(3000));

    await bankpaymentPage.pay();
    await(browser.sleep(3000));

    expect(orderSummaryPage.getMessage()).toBe('Your order on My Store is complete.');
  });
});
