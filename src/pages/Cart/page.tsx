import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'
import { imagePath } from '../../assets/imagePath'

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  img: string
  category: string
  size: string
  customization: string
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Triple Chocolate Cake', price: 7000.00, quantity: 1, img: imagePath('triple.jpg'), category: 'Cakes', size: 'Large', customization: 'Extra chocolate' },
    { id: 2, name: 'Salted Caramel Scoop', price: 4500.50, quantity: 2, img: imagePath('salt.jpg'), category: 'Ice Cream', size: 'Regular', customization: 'None' },
    { id: 3, name: 'Classic Tiramisu', price: 4000.00, quantity: 1, img: imagePath('tir.jpg'), category: 'Desserts', size: 'Medium', customization: 'Extra coffee' },
    { id: 4, name: 'French Macarons', price: 5500.00, quantity: 1, img: imagePath('french.jpg'), category: 'Pastries', size: 'Box of 12', customization: 'Mixed flavors' },
  ])

  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState<{code: string, discount: number} | null>(null)
  const [deliveryOption, setDeliveryOption] = useState<'standard' | 'express' | 'pickup'>('standard')
  const [showPromoInput, setShowPromoInput] = useState(false)
  const [savedForLater, setSavedForLater] = useState<CartItem[]>([])

  const promoCodes = {
    'SWEET10': 10,
    'FIRST20': 20,
    'BIRTHDAY15': 15,
    'WEEKEND5': 5
  }

  const deliveryOptions = {
    standard: { name: 'Standard Delivery', fee: 200, time: '45-60 mins' },
    express: { name: 'Express Delivery', fee: 400, time: '20-30 mins' },
    pickup: { name: 'Store Pickup', fee: 0, time: '15-20 mins' }
  }

  function updateQuantity(id: number, newQuantity: number) {
    if (newQuantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== id))
    } else {
      setCartItems(prev => prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  function saveForLater(id: number) {
    const item = cartItems.find(item => item.id === id)
    if (item) {
      setSavedForLater(prev => [...prev, item])
      setCartItems(prev => prev.filter(item => item.id !== id))
    }
  }

  function moveToCart(id: number) {
    const item = savedForLater.find(item => item.id === id)
    if (item) {
      setCartItems(prev => [...prev, item])
      setSavedForLater(prev => prev.filter(item => item.id !== id))
    }
  }

  function applyPromoCode() {
    const code = promoCode.toUpperCase()
    if (promoCodes[code as keyof typeof promoCodes]) {
      setAppliedPromo({ code, discount: promoCodes[code as keyof typeof promoCodes] })
      setPromoCode('')
      setShowPromoInput(false)
    } else {
      alert('Invalid promo code!')
    }
  }

  function removePromoCode() {
    setAppliedPromo(null)
  }

  function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
      setCartItems([])
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const deliveryFee = deliveryOptions[deliveryOption].fee
  const discountAmount = appliedPromo ? (subtotal * appliedPromo.discount) / 100 : 0
  const total = subtotal + deliveryFee - discountAmount

  const btnLg = "px-8 py-3.5 text-[17px] font-semibold bg-[#3E2723] text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] hover:-translate-y-0.5 transition-all duration-300 dark:bg-[#2a1810] dark:hover:bg-[#D4AF37]"
  const btnSecondary = "px-6 py-2.5 text-[15px] font-semibold bg-transparent text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] transition-all duration-300 dark:hover:bg-[#D4AF37] dark:hover:text-[#2a1810]"

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[calc(100vh-70px)] px-8 py-7 max-w-[1280px] mx-auto w-full dark:bg-[#1a1a1a]">

        <section className="flex flex-col items-center text-center px-5 py-16 bg-gradient-to-br from-[#3E2723] to-[#5D4037] rounded-[10px] mb-8 dark:from-[#2a1810] dark:to-[#3d2b1f]">
          <h1 className="text-[42px] font-bold text-[#D4AF37] mb-3">Shopping Cart</h1>
          <p className="text-[#D4AF37] text-[15px]">Review your sweet selections before checkout.</p>
          {cartItems.length > 0 && (
            <div className="flex gap-4 mt-4">
              <span className="text-[#D4AF37] text-[15px]">{cartItems.length} items in cart</span>
              <span className="text-[#D4AF37] text-[15px]">•</span>
              <span className="text-[#D4AF37] text-[15px]">Total: Rs. {total.toFixed(2)}</span>
            </div>
          )}
        </section>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-[80px] mb-4">🛒</div>
            <h2 className="text-[30px] font-bold text-[#5D4037] mb-3 dark:text-[#D4AF37]">Your cart is empty</h2>
            <p className="text-[#5D4037] text-[15px] mb-5 dark:text-[#FAF3E0]">Add some delicious treats to get started!</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link to="/menu">
                <button className={btnLg}>Browse Menu</button>
              </Link>
              <Link to="/gallery">
                <button className={btnSecondary}>View Gallery</button>
              </Link>
            </div>
            {savedForLater.length > 0 && (
              <div className="mt-8 p-4 bg-white border border-[#D7B98E] rounded-[10px] dark:bg-[#2a2a2a] dark:border-[#4a4a4a]">
                <h3 className="text-[22px] font-bold text-[#5D4037] mb-3 dark:text-[#D4AF37]">Saved for Later ({savedForLater.length})</h3>
                <div className="flex flex-wrap gap-3">
                  {savedForLater.map(item => (
                    <div key={item.id} className="flex items-center gap-2 p-2 border border-[#D7B98E] rounded-[6px] dark:border-[#4a4a4a]">
                      <img src={item.img} alt={item.name} className="w-[40px] h-[40px] object-cover rounded" />
                      <span className="text-[15px] text-[#5D4037] dark:text-[#FAF3E0]">{item.name}</span>
                      <button 
                        onClick={() => moveToCart(item.id)}
                        className="text-[13px] text-[#D4AF37] hover:underline"
                      >
                        Move to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* LEFT COLUMN - CART ITEMS */}
            <div className="flex-1">
              {/* CART HEADER */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-[30px] font-bold text-[#5D4037] dark:text-[#D4AF37]">Cart Items ({cartItems.length})</h2>
                <button 
                  onClick={clearCart}
                  className="text-[15px] text-[#8B0000] hover:text-[#FF0000] font-semibold transition-colors duration-300"
                >
                  Clear Cart
                </button>
              </div>

              {/* CART ITEMS */}
              <div className="flex flex-col gap-4 mb-8">
                {cartItems.map(item => (
                  <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white border border-[#D7B98E] rounded-[10px] p-4 shadow-[0_4px_12px_rgba(62,39,35,0.08)] dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                    <img src={item.img} alt={item.name} className="w-[100px] h-[100px] object-cover rounded-[6px]" />
                    <div className="flex-1">
                      <h3 className="text-[22px] font-bold text-[#5D4037] mb-1 dark:text-[#D4AF37]">{item.name}</h3>
                      <p className="text-[15px] text-[#8D6E63] mb-1 dark:text-[#D7B98E]">{item.category} • {item.size}</p>
                      {item.customization !== 'None' && (
                        <p className="text-[14px] text-[#8D6E63] mb-2 dark:text-[#D7B98E]">Customization: {item.customization}</p>
                      )}
                      <p className="text-[17px] font-semibold text-[#5D4037] dark:text-[#D4AF37]">Rs. {item.price.toFixed(2)} each</p>
                      <p className="text-[15px] text-[#5D4037] dark:text-[#FAF3E0]">Subtotal: Rs. {(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-[#D4AF37] text-[#3E2723] rounded font-bold hover:bg-[#B8941F] transition-colors duration-300"
                        >
                          -
                        </button>
                        <span className="text-[17px] font-semibold text-[#5D4037] min-w-[30px] text-center dark:text-[#D4AF37]">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-[#D4AF37] text-[#3E2723] rounded font-bold hover:bg-[#B8941F] transition-colors duration-300"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => saveForLater(item.id)}
                          className="text-[13px] text-[#D4AF37] hover:underline"
                        >
                          Save for Later
                        </button>
                        <button 
                          onClick={() => updateQuantity(item.id, 0)}
                          className="text-[13px] text-[#8B0000] hover:text-[#FF0000] transition-colors duration-300"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* SAVED FOR LATER */}
              {savedForLater.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-[22px] font-bold text-[#5D4037] mb-4 dark:text-[#D4AF37]">Saved for Later ({savedForLater.length})</h3>
                  <div className="flex flex-wrap gap-4">
                    {savedForLater.map(item => (
                      <div key={item.id} className="flex items-center gap-3 p-3 bg-white border border-[#D7B98E] rounded-[8px] dark:bg-[#2a2a2a] dark:border-[#4a4a4a]">
                        <img src={item.img} alt={item.name} className="w-[50px] h-[50px] object-cover rounded" />
                        <div className="flex-1">
                          <h4 className="text-[15px] font-semibold text-[#5D4037] dark:text-[#D4AF37]">{item.name}</h4>
                          <p className="text-[13px] text-[#8D6E63] dark:text-[#D7B98E]">Rs. {item.price.toFixed(2)}</p>
                        </div>
                        <button 
                          onClick={() => moveToCart(item.id)}
                          className="text-[13px] text-[#D4AF37] hover:underline font-semibold"
                        >
                          Move to Cart
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN - ORDER SUMMARY */}
            <div className="w-full lg:w-[400px]">
              {/* DELIVERY OPTIONS */}
              <div className="bg-white border border-[#D7B98E] rounded-[10px] p-6 shadow-[0_4px_12px_rgba(62,39,35,0.08)] mb-6 dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                <h3 className="text-[22px] font-bold text-[#5D4037] mb-4 dark:text-[#D4AF37]">Delivery Options</h3>
                {Object.entries(deliveryOptions).map(([key, option]) => (
                  <label key={key} className="flex items-center gap-3 mb-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="delivery" 
                      value={key}
                      checked={deliveryOption === key}
                      onChange={(e) => setDeliveryOption(e.target.value as 'standard' | 'express' | 'pickup')}
                      className="w-4 h-4 text-[#D4AF37] border-[#8D6E63] focus:ring-[#D4AF37]"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-[15px] font-semibold text-[#5D4037] dark:text-[#D4AF37]">{option.name}</span>
                        <span className="text-[15px] text-[#5D4037] dark:text-[#FAF3E0]">
                          {option.fee === 0 ? 'Free' : `Rs. ${option.fee}`}
                        </span>
                      </div>
                      <span className="text-[13px] text-[#8D6E63] dark:text-[#D7B98E]">{option.time}</span>
                    </div>
                  </label>
                ))}
              </div>

              {/* PROMO CODE */}
              <div className="bg-white border border-[#D7B98E] rounded-[10px] p-6 shadow-[0_4px_12px_rgba(62,39,35,0.08)] mb-6 dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                <h3 className="text-[22px] font-bold text-[#5D4037] mb-4 dark:text-[#D4AF37]">Promo Code</h3>
                {appliedPromo ? (
                  <div className="flex items-center justify-between p-3 bg-green-100 border border-green-300 rounded-[6px] dark:bg-green-900 dark:border-green-700">
                    <div>
                      <span className="text-[15px] font-semibold text-green-800 dark:text-green-200">{appliedPromo.code}</span>
                      <p className="text-[13px] text-green-600 dark:text-green-300">{appliedPromo.discount}% discount applied</p>
                    </div>
                    <button 
                      onClick={removePromoCode}
                      className="text-[13px] text-red-600 hover:text-red-800 font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <>
                    {!showPromoInput ? (
                      <button 
                        onClick={() => setShowPromoInput(true)}
                        className="text-[15px] text-[#D4AF37] hover:underline font-semibold"
                      >
                        + Add promo code
                      </button>
                    ) : (
                      <div className="flex gap-2">
                        <input 
                          type="text"
                          placeholder="Enter promo code"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          className="flex-1 px-3 py-2 text-[15px] bg-[#FAF3E0] text-[#3E2723] border border-[#8D6E63] rounded-[6px] outline-none focus:border-[#D4AF37] dark:bg-[#2a2a2a] dark:text-[#FAF3E0] dark:border-[#4a4a4a]"
                        />
                        <button 
                          onClick={applyPromoCode}
                          className="px-4 py-2 text-[13px] font-semibold bg-[#D4AF37] text-[#3E2723] rounded-[6px] hover:bg-[#B8941F] transition-colors duration-300"
                        >
                          Apply
                        </button>
                      </div>
                    )}
                    <div className="mt-3">
                      <p className="text-[13px] text-[#8D6E63] mb-2 dark:text-[#D7B98E]">Available codes:</p>
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(promoCodes).map(([code, discount]) => (
                          <button
                            key={code}
                            onClick={() => {setPromoCode(code); applyPromoCode();}}
                            className="text-[12px] px-2 py-1 bg-[#D4AF37] text-[#3E2723] rounded hover:bg-[#B8941F] transition-colors duration-300"
                          >
                            {code} ({discount}%)
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* ORDER SUMMARY */}
              <div className="bg-white border border-[#D7B98E] rounded-[10px] p-6 shadow-[0_4px_12px_rgba(62,39,35,0.08)] dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                <h2 className="text-[30px] font-bold text-[#5D4037] mb-4 dark:text-[#D4AF37]">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-[17px] text-[#5D4037] dark:text-[#FAF3E0]">Subtotal ({cartItems.length} items):</span>
                    <span className="text-[17px] font-semibold text-[#5D4037] dark:text-[#D4AF37]">Rs. {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[17px] text-[#5D4037] dark:text-[#FAF3E0]">{deliveryOptions[deliveryOption].name}:</span>
                    <span className="text-[17px] text-[#5D4037] dark:text-[#D4AF37]">
                      {deliveryFee === 0 ? 'Free' : `Rs. ${deliveryFee.toFixed(2)}`}
                    </span>
                  </div>
                  {appliedPromo && (
                    <div className="flex justify-between items-center text-green-600">
                      <span className="text-[17px]">Discount ({appliedPromo.code}):</span>
                      <span className="text-[17px] font-semibold">-Rs. {discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-[15px] text-[#8D6E63] dark:text-[#D7B98E]">Tax (included):</span>
                    <span className="text-[15px] text-[#8D6E63] dark:text-[#D7B98E]">Rs. 0.00</span>
                  </div>
                </div>
                <div className="border-t border-[#D7B98E] pt-4 mb-6 dark:border-[#4a4a4a]">
                  <div className="flex justify-between items-center">
                    <span className="text-[22px] font-bold text-[#5D4037] dark:text-[#D4AF37]">Total:</span>
                    <span className="text-[30px] font-bold text-[#D4AF37]">Rs. {total.toFixed(2)}</span>
                  </div>
                  <p className="text-[13px] text-[#8D6E63] mt-1 dark:text-[#D7B98E]">
                    Estimated {deliveryOptions[deliveryOption].time}
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Link to="/order">
                    <button className={`w-full ${btnLg}`}>Proceed to Checkout</button>
                  </Link>
                  <Link to="/menu">
                    <button className={`w-full ${btnSecondary}`}>Continue Shopping</button>
                  </Link>
                </div>
                <div className="mt-4 p-3 bg-[#FAF3E0] rounded-[6px] dark:bg-[#1a1a1a]">
                  <p className="text-[13px] text-[#5D4037] dark:text-[#FAF3E0]">
                    🔒 Secure checkout • 💳 Multiple payment options • 🚚 Free delivery on orders over Rs. 5000
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
      <Footer />
    </>
  )
}