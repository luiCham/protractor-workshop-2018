import { browser } from 'protractor';
// tslint:disable-next-line: max-line-length
import { MenuContentPage, ProductListPage, ProductAddedModalPage, SummaryStepPage, SignInPage, AddressPage, ShippingPage, PaymentPage, BankPaymentPage, OrderSummaryPage } from '../src/page';
describe('Buying a T-shirt', () => {

  describe('Opening web page', () => {
    it('Web page loads correctly', async() => {
      await (browser.get('http://automationpractice.com/'));
      await (browser.sleep(1000));
    });
  });

  describe('Start buy process', async () => {
    const summaryStepPage: SummaryStepPage = new SummaryStepPage();
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const productListPage: ProductListPage = new ProductListPage();
    const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();

    it('Choose a t-shirt and start purchase process', async() => {
      await menuContentPage.goToTShirtMenu();
      await (browser.sleep(1000));

      await productListPage.goToShirt();
      await (browser.sleep(1000));

      await productAddedModalPage.goTocheckout();

      await summaryStepPage.goToNextPage();
    });

  });

  describe('sign in', async () => {
    const signInPage: SignInPage = new SignInPage();
    const email = 'j.l-h@hotmail.com';
    const password = 'vkvkvkvk';
    it('Signed in', async () => {
      await signInPage.fillEmail(email);
      await signInPage.fillPassword(password);
      await signInPage.goToNextPage();
    });
  });

  describe('Selecting Address', () => {
    const addressPage: AddressPage = new AddressPage();
    it('Continue with default address', async () => {
      await addressPage.goToNextPage();

    });
  });

  describe('Payment', () => {
    const shippingPage: ShippingPage = new ShippingPage();
    const paymentPage: PaymentPage = new PaymentPage();
    const bankpaymentPage: BankPaymentPage = new BankPaymentPage();
    const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
    it('Successfully purchased', async () => {
      await shippingPage.checkTermsOfService();
      await shippingPage.goToNextPage();

      await paymentPage.goToBankPayment();

      await bankpaymentPage.pay();

      await (expect(orderSummaryPage.getMessage()).toBe('Your order on My Store is complete.'));
    });
  });
});
