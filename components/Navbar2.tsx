'use client';

import { useState } from 'react';
import Cart from "../components/Cart";
import { useBooleanValue } from '../app/context/CartBoolContext';
import { useCart } from '../app/context/CartContext';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useCart();
  const { isBooleanValue, setBooleanValue } = useBooleanValue();

  const handleClickc = () => {
    var cartb2 = document.getElementById("cartid2");
    setBooleanValue(!isBooleanValue);
    if (cartb2) {
      if (isBooleanValue) {
        cartb2.className += " MiniCart_Cart-visible";
      } else {
        cartb2.classList.remove("MiniCart_Cart-visible");
      }
    }
  };

  return (
    <>
      <Cart />

      <header className="w-full   top-9 mynewNavpad" style={{ background: '#fafafa' }}>
        <div className="px-4 flex items-center text-black relative mynavidhere">

          {/* Hamburger - only on mobile */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex items-center space-x-2"
          >
            <Menu className="w-6 h-6 stroke-[1]" id='myColorblack' />
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 sm:static sm:translate-x-0 flex justify-center sm:justify-start items-center flex-1 sm:flex-none">
            <a href="/">
              <img
                src="https://res.cloudinary.com/dusvquybw/image/upload/v1755882293/ksqnjjiw0smwkv3ahael_luwp88.webp"
                alt="Logo"
                className="h-12"
                style={{ maxHeight: '40px' }}
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden sm:flex flex-1 justify-center items-center gap-10" id='mynewNavNav'>
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/shop" className="hover:underline">Shop</a>
            <a href="/contact" className="hover:underline">Contact Us</a>
          </nav>

          {/* Search & Cart */}
          <div className="flex-1 flex justify-end items-center space-x-4">

            {/* Search Button */}
            <button onClick={() => setSearchOpen(true)} aria-label="Search" id='mySearchColor'>
              <Search className="w-6 h-6 stroke-[2] text-black" />
            </button>

            {/* Cart Button */}
            <span onClick={handleClickc} className="menuicon cursor-pointer">
              <svg
  role="presentation"
  strokeWidth={2}
  focusable="false"
  width={22}
  height={22}
  className="icon icon-cart"
  viewBox="0 0 22 22"
>
  <path
    d="M11 7H3.577A2 2 0 0 0 1.64 9.497l2.051 8A2 2 0 0 0 5.63 19H16.37a2 2 0 0 0 1.937-1.503l2.052-8A2 2 0 0 0 18.422 7H11Zm0 0V1"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>


              {cart && cart.length > 0 && (
                <span className="MiniCart_CartIndicator_Badge1"></span>
              )}
            </span>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white text-black flex flex-col items-center justify-center z-50 sm:hidden">
            <button onClick={() => setMenuOpen(false)} className="absolute top-10 right-4" aria-label="Close menu">
              <X className="w-8 h-8 stroke-[1]" id='myColorblack' />
            </button>
            <nav className="flex flex-col items-center gap-6 mt-12 text-3xl font-bold">
              <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="/shop" onClick={() => setMenuOpen(false)}>Shop</a>
              <a href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
            </nav>
          </div>
        )}

        {/* Search Overlay */}
        {searchOpen && (
          <div className="fixed inset-0 bg-white text-black flex flex-col items-center justify-center z-50">
            <button onClick={() => setSearchOpen(false)} className="absolute top-10 right-4" aria-label="Close search">
              <X className="w-8 h-8 stroke-[1]" id='myColorblack' />
            </button>
            <form action={'/search'} method="get" className="searchOverlay">
              <input
                type="text"
                name="q"
                placeholder="Search..."
                className="w-3/4 max-w-md text-2xl border-b-2 border-gray-400 outline-none py-2 text-center"
                autoFocus
              />
            </form>
          </div>
        )}

        {/* Cart Overlay */}
        {cartOpen && (
          <div className="fixed inset-0 bg-white text-black z-50 overflow-y-auto">
            <button onClick={() => setCartOpen(false)} className="absolute top-4 right-4" aria-label="Close cart">
              <X className="w-8 h-8 stroke-[1]" />
            </button>
            <div className="mt-20 px-4">
              <Cart />
            </div>
          </div>
        )}
      </header>
    </>
  );
}
