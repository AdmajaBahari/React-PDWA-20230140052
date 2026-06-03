import React from 'react';

export default function CatalogHome({ onNavigate }) {
  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden min-h-screen flex flex-col justify-between">
      {/* TopNavBar */}
      <nav className="bg-surface border-b border-outline-variant sticky top-0 z-50">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-base max-w-container-max mx-auto w-full">
          <button onClick={() => onNavigate('home')} className="text-3xl font-display-xl tracking-tighter text-on-background hover:opacity-80 transition-all">
            ADIDAS
          </button>
          <div className="hidden md:flex space-x-8 items-center">
            <a className="text-sm font-label-sm uppercase text-primary border-b-2 border-primary pb-1" href="#samba">Samba</a>
            <a className="text-sm font-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors" href="#handball">Handball</a>
            <button onClick={() => onNavigate('detail')} className="text-sm font-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors font-semibold">
              Adizero
            </button>
            <a className="text-sm font-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors" href="#new">New Arrivals</a>
            <a className="text-sm font-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors" href="#sale">Sale</a>
          </div>
          <div className="flex items-center space-x-4 text-primary">
            <span className="material-symbols-outlined cursor-pointer hover:opacity-80">favorite</span>
            <span className="material-symbols-outlined cursor-pointer hover:opacity-80">shopping_cart</span>
            <span className="material-symbols-outlined cursor-pointer hover:opacity-80 hidden md:block">person</span>
            <span className="material-symbols-outlined cursor-pointer md:hidden">menu</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-32 overflow-hidden px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center w-full">
          <div className="space-y-8 max-w-xl">
            <div>
              <span className="inline-block py-1 px-3 border border-primary rounded-full text-xs font-label-sm uppercase mb-4 tracking-widest bg-primary text-on-primary">Originals</span>
              <h2 className="text-5xl md:text-6xl font-display-xl mb-4">SAMBA OG SHOES</h2>
              <p className="text-base font-body-md text-on-surface-variant">Born on the pitch, the Samba is a timeless icon of street style. This silhouette stays true to its legacy with a tasteful, low-profile, soft leather upper, suede overlays and gum sole.</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <button aria-label="Black color" className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center"><div className="w-6 h-6 rounded-full bg-[#1b1b1b]"></div></button>
                <button aria-label="White color" className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center"><div className="w-6 h-6 rounded-full bg-[#ffffff] border"></div></button>
              </div>
              <span className="text-sm font-label-sm font-medium">Core Black / Cloud White</span>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <button onClick={() => onNavigate('detail')} className="bg-primary text-on-primary px-8 py-4 rounded-lg text-sm font-label-sm uppercase hover:bg-neutral-800 transition-all flex items-center space-x-2">
                <span>Shop Now</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <span className="text-2xl font-headline-md font-bold">$100</span>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
            {/* GAMBAR ASLI - Adidas Samba */}
            <img alt="Adidas Samba Shoe" className="object-cover w-full h-full rounded-2xl shadow-xl" 
                 src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80" />
          </div>
        </div>
      </header>

      {/* Product Grid Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full bg-surface-container-lowest">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h3 className="text-3xl font-display-xl mb-2">TRENDING NOW</h3>
            <p className="text-sm font-body-md text-on-surface-variant">The latest drops and absolute classics.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Card 1 - Samba OG */}
          <div className="bg-surface border border-surface-container-high rounded-xl p-8 flex flex-col h-[480px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-md">
            <div className="flex-grow flex items-center justify-center">
              <img alt="Samba OG" className="max-h-[220px] object-contain" 
                   src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=80" />
            </div>
            <div className="mt-auto pt-4 border-t border-surface-variant">
              <h4 className="text-xl font-headline-md mb-1">Samba OG Shoes</h4>
              <p className="text-sm font-body-md text-on-surface-variant mb-4">Classic indoor football style.</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-headline-md font-bold">$100</span>
                <button className="bg-primary text-on-primary w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-80">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 - Handball Spezial */}
          <div className="bg-surface border border-surface-container-high rounded-xl p-8 flex flex-col h-[480px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-md">
            <div className="flex-grow flex items-center justify-center">
              <img alt="Handball Spezial" className="max-h-[220px] object-contain" 
                   src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" />
            </div>
            <div className="mt-auto pt-4 border-t border-surface-variant">
              <h4 className="text-xl font-headline-md mb-1">Handball Spezial Shoes</h4>
              <p className="text-sm font-body-md text-on-surface-variant mb-4">Vintage terrace vibes.</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-headline-md font-bold">$110</span>
                <button className="bg-primary text-on-primary w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-80">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 - Adizero Evo SL */}
          <div onClick={() => onNavigate('detail')} className="bg-surface border border-surface-container-high rounded-xl p-8 flex flex-col h-[480px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-md cursor-pointer">
            <div className="flex-grow flex items-center justify-center">
              <img alt="Adizero Evo SL" className="max-h-[220px] object-contain" 
                   src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80" />
            </div>
            <div className="mt-auto pt-4 border-t border-surface-variant">
              <h4 className="text-xl font-headline-md mb-1">Adizero Evo SL</h4>
              <p className="text-sm font-body-md text-on-surface-variant mb-4">Lightweight daily trainer.</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-headline-md font-bold">$150</span>
                <button className="bg-primary text-on-primary w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-80">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-margin-mobile md:px-margin-desktop w-full">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
          <p className="font-label-sm">© 2024 ADIDAS. ALL RIGHTS RESERVED.</p>
          <p className="font-label-sm">PDWA - 20230140052</p>
        </div>
      </footer>
    </div>
  );
}