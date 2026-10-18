import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-lg w-full text-center border border-gray-100">
        
        {/* Logo & Wordmark */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <img src="/Alby LOGO Final.png" alt="Alby Rentals" className="w-20 h-14 object-contain" />
          <div className="brand-wordmark">
            <span className="text-2xl font-bold text-gray-900">Alby</span>
            <span className="text-2xl font-light text-blue-600"> Rentals</span>
          </div>
        </div>

        {/* Thank You Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
          Fa&apos;afetai lava!
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Your inquiry has been successfully received. We will check our vehicle availability and reply to your email or WhatsApp shortly with your booking details and next steps.
        </p>
        <p className="text-gray-500 text-sm mb-8 italic">
          Manuia le aso! (Have a wonderful day!)
        </p>

        {/* Return Home Button */}
        <Link 
          href="/"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
