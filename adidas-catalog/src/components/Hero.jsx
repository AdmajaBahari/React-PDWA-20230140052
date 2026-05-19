export default function Hero({ onShopNow }) {
  return (
    <section className="relative bg-surface overflow-hidden">
      {/* Background large text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-anton text-[clamp(6rem,20vw,18rem)] uppercase text-surface-container leading-none tracking-tight opacity-60">
          SAMBA
        </span>
      </div>

      <div className="max-w-container mx-auto px-5 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
          {/* Left */}
          <div className="order-2 md:order-1">
            <span className="inline-block font-lexend text-[10px] font-semibold tracking-widest uppercase bg-on-surface text-surface px-3 py-1 rounded-sm mb-6">
              ORIGINALS
            </span>
            <h1 className="font-anton text-[clamp(3rem,8vw,5rem)] uppercase leading-none tracking-tight text-on-surface mb-6">
              SAMBA OG<br />SHOES
            </h1>
            <p className="font-lexend text-base md:text-lg text-on-surface-variant leading-relaxed mb-8 max-w-md">
              Born on the pitch, the Samba is a timeless icon of street style. This silhouette stays true to its legacy with a tasteful, low-profile, soft leather upper, suede overlays and gum sole.
            </p>

            {/* Color swatches */}
            <div className="flex items-center gap-3 mb-8">
              {[
                { hex: '#1b1b1b', label: 'Core Black' },
                { hex: '#1b1b1b', border: true, label: 'Core Black / Cloud White' },
                { hex: '#ffffff', label: 'Cloud White' },
              ].map((c, i) => (
                <button key={i} title={c.label}
                  className="w-6 h-6 rounded-full border-2 hover:scale-110 transition-transform"
                  style={{ backgroundColor: c.hex, borderColor: i === 0 ? '#0051FF' : '#cfc4c5' }}
                />
              ))}
              <span className="font-lexend text-xs text-on-surface-variant ml-1">Core Black / Cloud White</span>
            </div>

            <div className="flex items-center gap-6 flex-wrap">
              <button
                onClick={() => onShopNow('originals')}
                className="font-lexend text-sm font-semibold tracking-widest uppercase bg-on-surface text-on-primary px-8 py-4 rounded-lg hover:bg-[#0051FF] transition-colors duration-200 flex items-center gap-3"
              >
                SHOP NOW
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
              <span className="font-lexend text-2xl font-semibold text-on-surface">$100</span>
            </div>
          </div>

          {/* Right: Product image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg aspect-square rounded-xl overflow-hidden bg-surface-container-low flex items-center justify-center">
              <img
                src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f37a4deb2d3c4f31be36acd7013df3c6_9366/Samba_OG_Shoes_Black_B75807_01_standard.jpg"
                alt="Samba OG Shoes"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                onError={e => { e.target.src = 'https://placehold.co/600x600/eeeeee/1b1b1b?text=SAMBA+OG'; }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
