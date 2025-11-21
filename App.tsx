
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';

import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Journal from './components/Journal';
import Contact from './components/Contact';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import JournalDetail from './components/JournalDetail';
import CartDrawer from './components/CartDrawer';
import Checkout from './components/Checkout';
import Toast from './components/Toast';
import CompareBar from './components/CompareBar';
import ComparisonView from './components/ComparisonView';
import { Product, ViewState } from './types';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState<{ visible: boolean, message: string }>({ visible: false, message: '' });
  const [compareList, setCompareList] = useState<Product[]>([]);

  // Handle navigation (clicks on Navbar or Footer links)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // If we are not home, go home first
    if (view.type !== 'home') {
      setView({ type: 'home' });
      // Allow state update to render Home before scrolling
      setTimeout(() => scrollToSection(targetId), 0);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      // Manual scroll calculation to account for fixed header
      const headerOffset = 85; // Standard Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
        // Ignore SecurityError in restricted environments
      }
    }
  };

  const showToast = (message: string) => {
      setToast({ visible: true, message });
  };

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
    showToast(`${product.name} añadido al carrito.`);
  };

  const removeFromCart = (index: number) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  // Comparison Logic
  const toggleCompare = (product: Product) => {
      if (compareList.find(p => p.id === product.id)) {
          setCompareList(compareList.filter(p => p.id !== product.id));
          showToast('Producto eliminado de la comparación.');
      } else {
          if (compareList.length >= 3) {
              showToast('Máximo 3 productos para comparar.');
              return;
          }
          setCompareList([...compareList, product]);
          showToast('Añadido a comparar.');
      }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      
      <Toast 
        message={toast.message}
        isVisible={toast.visible}
        onClose={() => setToast({ ...toast, visible: false })}
      />

           
      <main>
        {view.type === 'home' && (
          <>
            <Hero />
            <ProductGrid 
                onProductClick={(p) => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setView({ type: 'product', product: p });
                }}
                onToggleCompare={toggleCompare}
                compareListIds={compareList.map(p => p.id)}
            />
            <About />
            <Journal onArticleClick={(a) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'journal', article: a });
            }} />
            <Contact />
          </>
        )}

        {view.type === 'product' && (
          <ProductDetail 
            product={view.product} 
            onBack={() => {
              setView({ type: 'home' });
              setTimeout(() => scrollToSection('products'), 50);
            }}
            onAddToCart={addToCart}
            onProductClick={(p) => {
               window.scrollTo({ top: 0, behavior: 'smooth' });
               setView({ type: 'product', product: p });
            }}
            onToggleCompare={toggleCompare}
            isInCompare={compareList.some(p => p.id === view.product.id)}
          />
        )}

        {view.type === 'compare' && (
            <ComparisonView 
                products={compareList}
                onBack={() => setView({ type: 'home' })}
                onAddToCart={addToCart}
                onRemove={(id) => setCompareList(compareList.filter(p => p.id !== id))}
            />
        )}

        {view.type === 'journal' && (
          <JournalDetail 
            article={view.article} 
            onBack={() => setView({ type: 'home' })}
          />
        )}

        {view.type === 'checkout' && (
            <Checkout 
                items={cartItems}
                onBack={() => setView({ type: 'home' })}
            />
        )}
      </main>

      {view.type !== 'checkout' && view.type !== 'compare' && (
          <CompareBar 
            compareList={compareList}
            onRemove={(id) => setCompareList(compareList.filter(p => p.id !== id))}
            onClear={() => setCompareList([])}
            onCompare={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'compare' });
            }}
          />
      )}

      {view.type !== 'checkout' && <Footer onLinkClick={handleNavClick} />}
      
      <Assistant />
      
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onCheckout={() => {
            setIsCartOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setView({ type: 'checkout' });
        }}
      />
    </div>
  );
}

export default App;
