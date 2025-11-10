'use client';

import React, { useState } from 'react';
import { ShoppingCart, X, Plus, Minus, Send } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { cart, getTotalItems, getTotalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    if (!phoneNumber || phoneNumber.length < 10) {
      alert('Please enter a valid phone number');
      return;
    }

    // Format the order message
    let message = '🛒 *New Order from HomeNeeds*\n\n';
    message += '*Order Details:*\n';
    
    cart.forEach((item, index) => {
      message += `\n${index + 1}. ${item.name}\n`;
      message += `   Price: ₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}\n`;
      message += `   Unit: ${item.unit}\n`;
    });
    
    message += `\n*Total Amount: ₹${getTotalPrice()}*\n`;
    message += `\n📱 Customer Phone: ${phoneNumber}`;
    message += '\n\nPlease confirm this order!';

    // Replace with your WhatsApp business number
    const whatsappNumber = '918686391991'; // Change this to your actual WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Clear cart after order
    setTimeout(() => {
      clearCart();
      setIsCartOpen(false);
      setPhoneNumber('');
    }, 1000);
  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600">🏪 HomeNeeds</h1>
              <span className="ml-3 text-sm text-gray-500 hidden sm:block">Quick Commerce</span>
            </div>
            
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)} />
          
          <div className="absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl cart-slide-in">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Your Cart ({getTotalItems()} items)</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-3 bg-gray-50 p-3 rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-sm">{item.name}</h3>
                          <p className="text-xs text-gray-500">{item.unit}</p>
                          <p className="text-sm font-semibold text-primary-600 mt-1">
                            ₹{item.price * item.quantity}
                          </p>
                          
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="text-sm font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 bg-white border border-gray-300 rounded hover:bg-gray-100"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto text-red-500 text-xs hover:text-red-700"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {cart.length > 0 && (
                <div className="border-t p-4 space-y-3">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total:</span>
                    <span className="text-primary-600">₹{getTotalPrice()}</span>
                  </div>
                  
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    maxLength={10}
                  />
                  
                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send className="h-5 w-5" />
                    Order on WhatsApp
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
