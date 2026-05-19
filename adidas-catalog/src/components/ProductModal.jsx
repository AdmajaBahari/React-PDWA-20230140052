import { useState, useEffect } from 'react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  const accent = selectedColor.accent || product.accent;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleAddToBag = () => {
    if (!selectedSize) {
      setSizeError(true);
      setTimeout(() => setSizeError(false), 2000);
      return;
    }
    setAddedToCart(true);
    onAddToCart && onAddToCart(product);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-surface w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-xl shadow-2xl animate-slide-up">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Images */}
          <div className="bg-surface-container-low p-6 md:p-10 flex flex-col gap-4">
            <div className="aspect-square flex items-center justify-center rounded-lg overflow-hidden">
              <img
                src={product.images?.[activeImage] || product.imageUrl}
                alt={product.name}
                className="w-full h-full object-contain transition-all duration-300"
                onError={e => {
                  e.target.src = `https://placehold.co/600x600/eeeeee/1b1b1b?text=${encodeURIComponent(product.name)}`;
                }}
              />
            </div>
            {product.images && product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-16 h-16 rounded border-2 overflow-hidden transition-all ${activeImage === i ? 'border-on-surface' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain"
                      onError={e => { e.target.src = 'https://placehold.co/64x64/eeeeee/1b1b1b?text=img'; }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info */}
          <div className="p-6 md:p-10 flex flex-col gap-5">
            {/* Category badge */}
            <span className="inline-block font-lexend text-[10px] font-semibold tracking-widest uppercase bg-on-surface text-surface px-3 py-1 rounded-sm w-fit">
              {product.category}
            </span>

            <h2 className="font-anton text-5xl uppercase leading-none text-on-surface">
              {product.name}
            </h2>

            <p className="font-lexend text-base text-on-surface-variant leading-relaxed">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-lexend text-3xl font-semibold" style={{ color: accent }}>
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="font-lexend text-lg text-on-surface-variant line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Specs */}
            {product.specs && (
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(product.specs).map(([k, v]) => (
                  <div key={k} className="bg-surface-container rounded-md p-3">
                    <p className="font-lexend text-[10px] font-semibold tracking-widest uppercase text-on-surface-variant mb-1">{k}</p>
                    <p className="font-lexend text-lg font-semibold text-on-surface">{v}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Color picker */}
            <div>
              <p className="font-lexend text-[10px] font-semibold tracking-widest uppercase text-on-surface-variant mb-2">
                Color: {selectedColor.name}
              </p>
              <div className="flex gap-2">
                {product.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(color)}
                    title={color.name}
                    className="w-6 h-6 rounded-full border-2 transition-all hover:scale-110"
                    style={{
                      backgroundColor: color.hex,
                      borderColor: selectedColor === color ? (color.accent || product.accent) : '#cfc4c5',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Size picker */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <p className={`font-lexend text-[10px] font-semibold tracking-widest uppercase ${sizeError ? 'text-red-500' : 'text-on-surface-variant'}`}>
                  {sizeError ? 'Please select a size' : 'Select Size (US)'}
                </p>
                <button className="font-lexend text-[10px] font-semibold tracking-wider uppercase text-on-surface-variant underline underline-offset-2 hover:text-on-surface transition-colors">
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {product.sizes.map(size => {
                  const oos = product.outOfStock.includes(size);
                  return (
                    <button
                      key={size}
                      disabled={oos}
                      onClick={() => !oos && setSelectedSize(size)}
                      className={`font-lexend text-sm py-2 rounded border transition-all ${
                        selectedSize === size
                          ? 'border-on-surface bg-on-surface text-on-primary font-semibold'
                          : oos
                          ? 'border-outline-variant text-outline-variant cursor-not-allowed line-through'
                          : 'border-outline-variant text-on-surface hover:border-on-surface'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Add to bag */}
            <button
              onClick={handleAddToBag}
              className="w-full py-4 rounded-lg font-lexend text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-300"
              style={
                addedToCart
                  ? { backgroundColor: accent, color: accent === '#CCFF00' ? '#1b1b1b' : '#ffffff' }
                  : { backgroundColor: '#1b1b1b', color: '#ffffff' }
              }
            >
              {addedToCart ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Added to Bag
                </>
              ) : (
                <>
                  Add to Bag
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.3s ease-out; }
      `}</style>
    </div>
  );
}
