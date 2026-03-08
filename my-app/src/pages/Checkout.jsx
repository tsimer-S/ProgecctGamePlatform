import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

// Замени на свой публичный ключ из Stripe Dashboard
const stripePromise = loadStripe('pk_test_твой_ключ_здесь')

function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) return

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })

    if (error) {
      console.error(error)
    } else {
      console.log('PaymentMethod:', paymentMethod)
      // Здесь отправь token на бэкенд
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-gray-900/70 rounded-2xl border border-cyan-900/40 neon-glow">
      <h2 className="text-3xl font-bold text-center mb-8 text-[var(--neon-cyan)]">Оформление платежа</h2>
      
      <div className="p-4 mb-6 bg-gray-800/50 rounded-lg border border-cyan-800/50">
        <CardElement options={{
          style: {
            base: { fontSize: '18px', color: '#e0e0ff', '::placeholder': { color: '#aab7c4' } },
            invalid: { color: '#ff6b6b' },
          }
        }} />
      </div>

      <button 
        type="submit" 
        disabled={!stripe}
        className="w-full btn-neon py-4 text-xl rounded-xl disabled:opacity-50"
      >
        Оплатить
      </button>
    </form>
  )
}

export default function Checkout() {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-purple)] bg-clip-text text-transparent">
        Оплата заказа
      </h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}