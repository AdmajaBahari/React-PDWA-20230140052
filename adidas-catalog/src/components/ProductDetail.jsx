import React from 'react';

export default function ProductDetail({ onNavigate }) {
  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden min-h-screen flex flex-col justify-between">
      {/* TopNavBar */}
      <nav className="bg-surface border-b border-outline-variant sticky top-0 z-50">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-base max-w-container-max mx-auto w-full">
          <button onClick={() => onNavigate('home')} className="text-3xl font-display-xl tracking-tighter text-on-background hover:opacity-80 transition-all">
            ADIDAS
          </button>
          <div className="hidden md:flex gap-6 items-center">
            <button onClick={() => onNavigate('home')} className="text-sm font-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors">Samba</button>
            <a className="text-sm font-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors" href="#handball">Handball</a>
            <a className="text-sm font-label-sm uppercase text-primary border-b-2 border-primary pb-1 font-bold" href="#adizero">Adizero</a>
            <a className="text-sm font-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors" href="#new">New Arrivals</a>
          </div>
          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined cursor-pointer">search</span>
            <span className="material-symbols-outlined cursor-pointer">shopping_cart</span>
          </div>
        </div>
      </nav>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 w-full">
        {/* Hero Product Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-24 items-center">
          {/* Gallery / Visuals */}
          <div className="md:col-span-7 flex flex-col gap-4">
            <div className="bg-surface-container-lowest rounded-xl p-8 flex justify-center items-center relative overflow-hidden h-[450px] border border-outline-variant/30">
              {/* GAMBAR UTAMA ASLI - Adizero Evo SL */}
              <img alt="Adizero Evo SL" className="w-4/5 h-auto object-contain transform -rotate-12 z-10" 
                   src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-surface-container-lowest rounded-lg p-4 h-28 flex items-center justify-center border border-outline-variant/30">
                <img alt="Adizero Top View" className="max-h-full object-contain" src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=400&q=80" />
              </div>
              <div className="bg-surface-container-lowest rounded-lg p-4 h-28 flex items-center justify-center border border-outline-variant/30">
                <img alt="Adizero Sole" className="max-h-full object-contain" src="https://images.unsplash.com/photo-1584735174965-48c48d7cdfde?auto=format&fit=crop&w=400&q=80" />
              </div>
              <div className="bg-surface-container-lowest rounded-lg p-4 h-28 flex items-center justify-center border border-outline-variant/30">
                <img alt="Adizero Heel" className="max-h-full object-contain" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=400&q=80" />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <div className="mb-2">
              <span className="bg-primary text-on-primary text-xs font-label-sm uppercase px-3 py-1 rounded-full tracking-wider">Performance</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display-xl text-on-background mb-4 uppercase leading-none">ADIZERO<br/>EVO SL</h1>
            <p className="text-base font-body-md text-on-surface-variant mb-6 max-w-md">
              Engineered for maximum speed and minimal weight. Featuring our latest Lightstrike Pro cushioning for an energetic return on every strike.
            </p>
            <div className="flex items-end gap-4 mb-6">
              <span className="text-3xl font-headline-md font-bold text-primary">$150</span>
              <span className="text-on-surface-variant line-through pb-1">$180</span>
            </div>

            {/* Specs Bento */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-surface-container-low p-4 rounded-lg">
                <span className="text-xs font-label-sm text-on-surface-variant uppercase font-bold block mb-1">Weight</span>
                <div className="text-xl font-headline-md font-bold">188g</div>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg">
                <span className="text-xs font-label-sm text-on-surface-variant uppercase font-bold block mb-1">Drop</span>
                <div className="text-xl font-headline-md font-bold">6mm</div>
              </div>
            </div>

            <button className="w-full bg-primary text-white font-label-sm font-bold uppercase py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all">
              Add to Bag
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </section>

        {/* Complete The Kit */}
        <section className="py-12 border-t border-outline-variant/30">
          <h2 className="text-3xl font-display-xl text-center mb-12 uppercase">Complete The Kit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div onClick={() => onNavigate('home')} className="bg-surface border rounded-xl p-6 flex flex-col items-center cursor-pointer h-[350px] hover:shadow-md transition-all">
              <div className="h-40 flex items-center justify-center">
                <img alt="Samba OG Shoes" className="max-h-full object-contain" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=80" />
              </div>
              <div className="w-full text-left mt-auto border-t pt-2">
                <h3 className="font-bold font-headline-md text-base">Samba OG Shoes</h3>
                <p className="text-xs font-label-sm opacity-60 uppercase">Originals</p>
              </div>
            </div>
            <div className="bg-surface border rounded-xl p-6 flex flex-col items-center h-[350px]">
              <div className="h-40 flex items-center justify-center">
                <img alt="Handball Spezial" className="max-h-full object-contain" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" />
              </div>
              <div className="w-full text-left mt-auto border-t pt-2">
                <h3 className="font-bold font-headline-md text-base">Handball Spezial</h3>
                <p className="text-xs font-label-sm opacity-60 uppercase">Originals</p>
              </div>
            </div>
            <div className="bg-surface border rounded-xl p-6 flex flex-col items-center h-[350px]">
              <div className="h-40 flex items-center justify-center">
                <img alt="Adizero SL" className="max-h-full object-contain" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80" />
              </div>
              <div className="w-full text-left mt-auto border-t pt-2">
                <h3 className="font-bold font-headline-md text-base">Adizero SL</h3>
                <p className="text-xs font-label-sm opacity-60 uppercase">Performance</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 px-margin-mobile md:px-margin-desktop w-full">
        <div className="max-w-container-max mx-auto flex justify-between text-xs font-label-sm opacity-60">
          <p>© 2024 ADIDAS. ALL RIGHTS RESERVED.</p>
          <p>PDWA - 20230140052</p>
        </div>
      </footer>
    </div>
  );
}