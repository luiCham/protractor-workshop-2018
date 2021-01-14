import { browser } from 'protractor';
// tslint:disable-next-line: max-line-length
import { MenuContentPage, ProductListPage, ProductAddedModalPage, SummaryStepPage, SignInPage, AddressPage, ShippingPage, PaymentPage, BankPaymentPage, OrderSummaryPage } from '../src/page';

describe('Testing T-shirt buying process', () => {

  describe('opening web page', async () => {
    beforeAll(async () => {
      await browser.get('http://automationpractice.com/');
      await (browser.sleep(500));
    });

    describe('Buying T-shirt', async() => {
      beforeAll(async() => {
        const menuContentPage: MenuContentPage = new MenuContentPage();
        const productListPage: ProductListPage = new ProductListPage();
        const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
        const summaryStepPage: SummaryStepPage = new SummaryStepPage();

        await menuContentPage.goToTShirtMenu();
        await (browser.sleep(1000));

        await productListPage.goToShirt();
        await (browser.sleep(1000));

        await productAddedModalPage.goTocheckout();
        await (browser.sleep(500));

        await summaryStepPage.goToNextPage();
        await (browser.sleep(500));
      });

      describe('Signing in', async() => {
        beforeAll(async() => {
          const email = 'j.l-h@hotmail.com';
          const password = 'vkvkvkvk';
          const signInPage: SignInPage = new SignInPage();
          await signInPage.fillEmail(email);
          await signInPage.fillPassword(password);
          await signInPage.goToNextPage();
          await (browser.sleep(500));
        });

        describe('Select shipping address', async() => {
          beforeAll(async() => {
            const addressPage: AddressPage = new AddressPage();
            const shippingPage: ShippingPage = new ShippingPage();

            await addressPage.goToNextPage();
            await (browser.sleep(500));

            await shippingPage.checkTermsOfService();
            await shippingPage.goToNextPage();
            await (browser.sleep(500));
          });

          describe('Paying', async() => {
            beforeAll(async() => {
              const paymentPage: PaymentPage = new PaymentPage();
              const bankpaymentPage: BankPaymentPage = new BankPaymentPage();

              await paymentPage.goToBankPayment();
              await (browser.sleep(500));

              await bankpaymentPage.pay();
              await (browser.sleep(500));
            });

            it('Buying process is successful', async () => {
              const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
              await (expect(orderSummaryPage.getMessage())
              .toBe('Your order on My Store is complete.'));
            });
          });
        });
      });
    });
  });
});
