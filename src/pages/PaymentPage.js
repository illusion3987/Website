import React, { useEffect } from 'react';

const PaymentPage = () => {
  useEffect(() => {
    const loadGooglePayApi = () => {
      const script = document.createElement('script');
      script.src = 'https://pay.google.com/gp/p/js/pay.js';
      script.onload = initializeGooglePay;
      document.body.appendChild(script);
    };

    const initializeGooglePay = () => {
      const paymentRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['VISA', 'MASTERCARD'],
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'your_payment_gateway',
                gatewayMerchantId: 'your_merchant_id',
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: 'your_merchant_id',
          merchantName: 'Your Merchant Name',
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPrice: '50.00',
          currencyCode: 'USD',
        },
      };

      const paymentsClient = new google.payments.api.PaymentsClient({
        environment: 'TEST',
      });

      const button = paymentsClient.createButton({
        onClick: () => {
          paymentsClient.loadPaymentData(paymentRequest)
            .then((paymentData) => {
              console.log('Payment data', paymentData);
              // Process the payment data
            })
            .catch((error) => {
              console.error('Error', error);
              // Handle errors
            });
        },
      });

      document.getElementById('google-pay-button').appendChild(button);
    };

    loadGooglePayApi();
  }, []);

  return (
    <div>
      <h1>Donate Page</h1>
      <div id="google-pay-button"></div>
    </div>
  );
};

export default PaymentPage;

