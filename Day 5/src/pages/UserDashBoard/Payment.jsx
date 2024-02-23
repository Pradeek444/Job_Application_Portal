
import UserNav from '../../Components/UserNav';
import '../../assets/css/Payment.css'
import { useEffect, useState } from 'react';





const Payment = () => {
  const [paymentData, setPaymentData] = useState(null);

  // Function to load the Google Pay API library dynamically
  const loadGooglePayScript = () => {
    const script = document.createElement('script');
    script.src = 'https://pay.google.com/gp/p/js/pay.js';
    script.onload = () => {
      // Google Pay API library loaded successfully
      // Initialize Google Pay button
      initializeGooglePayButton();
    };
    script.onerror = () => {
      // Error occurred while loading Google Pay API library
      console.error('Error loading Google Pay API library.');
    };
    document.body.appendChild(script);
  };

  // Function to initialize Google Pay button
  const initializeGooglePayButton = () => {
    const paymentsClient = new window.google.payments.api.PaymentsClient({
      environment: 'TEST', // Change to 'PRODUCTION' for production environment
    });

    const paymentRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['AMEX', 'DISCOVER', 'JCB', 'MASTERCARD', 'VISA'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'stripe', // Change to your payment processor
              gatewayMerchantId: 'YOUR_GATEWAY_MERCHANT_ID', // Replace with your gateway merchant ID
            },
          },
        },
      ],
      merchantInfo: {
        merchantName: 'Example Merchant',
        merchantId: 'YOUR_MERCHANT_ID', // Replace with your Google Merchant ID
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPrice: '10.00', // Replace with the actual amount
        currencyCode: 'USD', // Replace with the currency code
      },
    };

    const button = paymentsClient.createButton({
      onClick: () => {
        // Handle button click event
        paymentsClient.loadPaymentData(paymentRequest)
          .then((paymentData) => {
            console.log('Payment data:', paymentData);
            setPaymentData(paymentData);
          })
          .catch((error) => {
            console.error('Error loading payment data:', error);
          });
      },
    });

    document.getElementById('google-pay-button-container').appendChild(button);
  };

  useEffect(() => {
    // Load Google Pay API library when component mounts
    loadGooglePayScript();

    // Clean up function to remove Google Pay button when component unmounts
    return () => {
      const buttonContainer = document.getElementById('google-pay-button-container');
      if (buttonContainer) {
        buttonContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
    <UserNav/>
    <div className='gpay'>
      <h2>Google Pay</h2>
      <div id="google-pay-button-container"></div>
      {paymentData && (
        <div>
          <h3>Payment Success!</h3>
          <pre>{JSON.stringify(paymentData, null, 1)}</pre>
        </div>
      )}
    </div>
    </>
  );
};

export default Payment;