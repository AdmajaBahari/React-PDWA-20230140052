import { useState } from 'react';

export default function ProductCard({ product, onProductClick, onAddToCart, onWishlist }) {
  const [hoveredColor, setHoveredColor] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const activeColor = hoveredColor || product.colors[0];
  const accent = activeColor.accent || product.accent;

  const handleWishlist = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    onWishlist && onWishlist(product, !isWishlisted);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setAddedToCart(true);
    onAddToCart && onAddToCart(product);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  return (
    <div
      onClick={() => onProductClick(product)}
      className="group bg-surface-container-lowest border border-surface-container rounded cursor-pointer transition-all duration-300 hover:shadow-[0px_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 relative overflow-hidden"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {product.new && (
          <span className="font-lexend text-[10px] font-semibold tracking-wider uppercase bg-on-surface text-surface px-2 py-0.5 rounded-sm">
            NEW
          </span>
        )}
        {product.sale && (
          <span className="font-lexend text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-sm"
            style={{ backgroundColor: accent, color: accent === '#CCFF00' ? '#1b1b1b' : '#ffffff' }}>
            SALE
          </span>
        )}
      </div>

      {/* Wishlist */}
      <button
        onClick={handleWishlist}
        className="absolute top-3 right-3 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-surface-container-lowest/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"
          fill={isWishlisted ? '#FF3131' : 'none'}
          stroke={isWishlisted ? '#FF3131' : 'currentColor'} strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </button>

      {/* Image */}
      <div className="bg-surface-container-low h-52 sm:h-56 flex items-center justify-center p-4 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          onError={e => {
            e.target.src = `https://placehold.co/400x300/eeeeee/1b1b1b?text=${encodeURIComponent(product.name)}`;
          }}
        />
      </div>

      {/* Info */}
      <div className="p-4">
        {/* Color swatches */}
        <div className="flex gap-1.5 mb-3">
          {product.colors.map((color, i) => (
            <button
              key={i}
              onMouseEnter={() => setHoveredColor(color)}
              onMouseLeave={() => setHoveredColor(null)}
              onClick={(e) => { e.stopPropagation(); setHoveredColor(color); }}
              title={color.name}
              className="w-4 h-4 rounded-full border-2 transition-transform hover:scale-110"
              style={{
                backgroundColor: color.hex,
                borderColor: hoveredColor === color ? color.accent : '#cfc4c5',
              }}
            />
          ))}
        </div>

        <p className="font-lexend text-[10px] font-semibold tracking-widest uppercase text-on-surface-variant mb-1">
          {product.category}
        </p>

        <h3 className="font-anton text-xl uppercase leading-tight text-on-surface mb-1 transition-colors group-hover:text-on-surface">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-baseline gap-2">
            <span className="font-lexend text-lg font-semibold" style={{ color: accent }}>
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="font-lexend text-sm text-on-surface-variant line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-on-surface text-on-surface transition-all duration-200 hover:scale-105"
            style={addedToCart ? { backgroundColor: accent, borderColor: accent, color: accent === '#CCFF00' ? '#1b1b1b' : '#ffffff' } : {}}
          >
            {addedToCart ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
