'use client'

const paymentMethods = [
  {
    title: 'PayPal',
    src: '/icons/paypal.svg',
  },
  {
    title: 'Vorkasse',
    src: '/icons/vorkasse.png',
  },
  {
    title: 'Mastercard',
    src: '/icons/mastercard.svg',
  },
  {
    title: 'VISA',
    src: '/icons/visa.svg',
  },
  {
    title: 'AMEX',
    src: '/icons/american-express.svg',
  },
];

export default function PaymentMethods() {
  return (
    <div className="flex flex-wrap gap-3">
      {paymentMethods.map((method, index) => (
        <div
          key={index}
          title={method.title}
          className="w-20 h-12 bg-gray-100 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer group"
        >
          <img
            src={method.src}
            alt={method.title}
            className="h-7 w-auto"
          />
        </div>
      ))}
    </div>
  );
}
