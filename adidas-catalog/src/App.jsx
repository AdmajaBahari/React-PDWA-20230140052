import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { products } from './data/products';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [toast, setToast] = useState(null);

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'all') return products;
    return products.filter(p => p.tag === activeFilter);
  }, [activeFilter]);

  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product]);
    showToast(`${product.name} added to bag`);
  };

  const handleWishlist = (product, add) => {
    if (add) {
      setWishlist(prev => [...prev, product]);
    } else {
      setWishlist(prev => prev.filter(p => p.id !== product.id));
    }
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navbar
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        cartCount={cart.length}
        wishlistCount={wishlist.length}
      />

      {/* Hero — only on 'all' filter */}
      {activeFilter === 'all' && (
        <Hero onShopNow={setActiveFilter} />
      )}

      {/* Catalog section */}
      <section className="flex-1">
        <FilterBar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          productCount={filteredProducts.length}
        />

        <div className="max-w-container mx-auto px-5 md:px-16 py-12 md:py-16">
          {/* Section heading */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-anton text-4xl md:text-5xl uppercase text-on-surface leading-none">
                {activeFilter === 'all' ? 'TRENDING NOW' : activeFilter.replace('-', ' ').toUpperCase()}
              </h2>
              <p className="font-lexend text-sm text-on-surface-variant mt-2">
                The latest drops and absolute classics.
              </p>
            </div>
            <button
              onClick={() => setActiveFilter('all')}
              className="font-lexend text-xs font-semibold tracking-widest uppercase text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              VIEW ALL
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onProductClick={setSelectedProduct}
                  onAddToCart={handleAddToCart}
                  onWishlist={handleWishlist}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="font-anton text-3xl uppercase text-on-surface-variant mb-2">No Products Found</p>
              <p className="font-lexend text-sm text-on-surface-variant">Try a different filter category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Banner */}
      <Banner />

      <Footer />

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-inverse-surface text-inverse-on-surface font-lexend text-sm font-semibold px-6 py-3 rounded-full shadow-lg animate-fade-in whitespace-nowrap">
          {toast}
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translate(-50%, 10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
      `}</style>
    </div>
  );
}
