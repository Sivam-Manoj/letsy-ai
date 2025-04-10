"use client";
import { useState } from "react";
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [cardNumberComplete, setCardNumberComplete] = useState(false);
  const [cardExpiryComplete, setCardExpiryComplete] = useState(false);
  const [cardCvcComplete, setCardCvcComplete] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!email) {
      setError("Please enter your email address");
      setLoading(false);
      return;
    }

    if (!cardNumberComplete || !cardExpiryComplete || !cardCvcComplete) {
      setError("Please complete all card details");
      setLoading(false);
      return;
    }

    const cardNumber = elements?.getElement(CardNumberElement);
    const cardExpiry = elements?.getElement(CardExpiryElement);
    const cardCvc = elements?.getElement(CardCvcElement);

    if (!stripe || !cardNumber || !cardExpiry || !cardCvc) {
      setError("Payment system is not ready");
      setLoading(false);
      return;
    }

    try {
      const { paymentMethod, error: stripeError } = await stripe.createPaymentMethod({
        type: "card",
        card: cardNumber,
        billing_details: {
          email: email,
        },
      });

      if (stripeError) {
        setError(stripeError.message || "Payment failed");
        setLoading(false);
        return;
      }

      const res = await fetch("/api/payment/create-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          payment_method: paymentMethod?.id,
        }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || "Subscription creation failed");
      }

      // Handle successful subscription
      console.log("Subscription created:", data);
      window.location.href = "/success";
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const cardElementStyle = {
    base: {
      fontSize: "16px",
      color: "#424770",
      "::placeholder": {
        color: "#aab7c4",
      },
      iconColor: "#666EE8",
    },
    invalid: {
      color: "#9e2146",
      iconColor: "#9e2146",
    },
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Card Details
        </label>
        <div className="space-y-4">
          {/* Card Number */}
          <div>
            <label className="block text-xs text-gray-600 mb-1">Card Number</label>
            <div className="p-3 border border-gray-300 rounded-md bg-white">
              <CardNumberElement
                options={{
                  style: cardElementStyle,
                  showIcon: true,
                }}
                onChange={(e) => {
                  setCardNumberComplete(e.complete);
                  if (e.error) {
                    setError(e.error.message);
                  } else {
                    setError(null);
                  }
                }}
              />
            </div>
          </div>

          {/* Expiry and CVC */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Expiry Date</label>
              <div className="p-3 border border-gray-300 rounded-md bg-white">
                <CardExpiryElement
                  options={{
                    style: cardElementStyle,
                  }}
                  onChange={(e) => {
                    setCardExpiryComplete(e.complete);
                    if (e.error) {
                      setError(e.error.message);
                    } else {
                      setError(null);
                    }
                  }}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">CVC</label>
              <div className="p-3 border border-gray-300 rounded-md bg-white">
                <CardCvcElement
                  options={{
                    style: cardElementStyle,
                  }}
                  onChange={(e) => {
                    setCardCvcComplete(e.complete);
                    if (e.error) {
                      setError(e.error.message);
                    } else {
                      setError(null);
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Your card details are secure and encrypted
          </div>
        </div>
      </div>

      {error && (
        <div className="p-3 bg-red-50 text-red-600 rounded-md text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || loading || !cardNumberComplete || !cardExpiryComplete || !cardCvcComplete}
        className={`w-full py-3 px-4 rounded-md text-white font-medium ${
          loading || !cardNumberComplete || !cardExpiryComplete || !cardCvcComplete
            ? "bg-gray-400 cursor-not-allowed" 
            : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          "Subscribe Now"
        )}
      </button>
    </form>
  );
}
