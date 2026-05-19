import { useState } from 'react';
import { navLinks } from '../data/products';

export default function Navbar({ activeFilter, onFilterChange, cartCount, wishlistCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filterMap = {
    'SAMBA': 'originals',
    'HANDBALL': 'originals',
    'ADIZERO': 'adizero',
    'NEW ARRIVALS': 'new-arrivals',
    'SALE': 'sale',
  };

  return (
    <nav className="sticky top-0 z-50 bg-surface border-b border-outline-variant">
      <div className="max-w-container mx-auto px-5 md:px-16">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <button
            onClick={() => onFilterChange('all')}
            className="font-anton text-2xl md:text-3xl tracking-tight text-on-surface hover:opacity-70 transition-opacity"
          >
            ADIDAS
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link}
                onClick={() => onFilterChange(filterMap[link] || 'all')}
                className={`font-lexend text-xs font-semibold tracking-widest uppercase transition-all duration-200 pb-0.5 ${
                  activeFilter === filterMap[link]
                    ? 'border-b-2 border-on-surface text-on-surface'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* Search */}
            {searchOpen ? (
              <div className="flex items-center border-b border-on-surface">
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="bg-transparent font-lexend text-sm text-on-surface placeholder-outline w-32 md:w-48 outline-none pb-0.5"
                />
                <button onClick={() => { setSearchOpen(false); setSearchQuery(''); }} className="ml-2 text-on-surface-variant hover:text-on-surface">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
            ) : (
              <button onClick={() => setSearchOpen(true)} className="text-on-surface-variant hover:text-on-surface transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </button>
            )}

            {/* Wishlist */}
            <button className="relative text-on-surface-variant hover:text-on-surface transition-colors hidden sm:block">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-on-surface text-surface text-[10px] font-lexend font-semibold w-4 h-4 rounded-full flex items-center justify-center">{wishlistCount}</span>
              )}
            </button>

            {/* Cart */}
            <button className="relative text-on-surface-variant hover:text-on-surface transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-on-surface text-surface text-[10px] font-lexend font-semibold w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>
              )}
            </button>

            {/* Account */}
            <button className="text-on-surface-variant hover:text-on-surface transition-colors hidden sm:block">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-on-surface">
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-outline-variant py-4 space-y-1">
            {navLinks.map(link => (
              <button
                key={link}
                onClick={() => { onFilterChange(filterMap[link] || 'all'); setMenuOpen(false); }}
                className="block w-full text-left font-lexend text-sm font-semibold tracking-widest uppercase py-2 text-on-surface-variant hover:text-on-surface transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
