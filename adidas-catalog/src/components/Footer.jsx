export default function Footer() {
  const cols = [
    {
      heading: 'PRODUCTS',
      links: ['Shoes', 'Clothing', 'Accessories', 'New Arrivals'],
    },
    {
      heading: 'SUPPORT',
      links: ['Contact Us', 'Returns & Exchanges', 'Order Tracker', 'Store Locator'],
    },
    {
      heading: 'COMPANY',
      links: ['Sustainability', 'Careers', 'Press', 'Mobile Apps', 'Privacy Policy'],
    },
  ];

  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-container mx-auto px-5 md:px-16 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-anton text-2xl tracking-tight mb-4">ADIDAS</p>
            <p className="font-lexend text-sm text-on-surface-variant leading-relaxed max-w-xs">
              High-performance gear designed for the modern athlete. Push your limits.
            </p>
            <div className="flex gap-4 mt-6">
              {/* Social icons */}
              {['instagram', 'twitter', 'youtube'].map(s => (
                <button key={s} className="w-8 h-8 rounded-full border border-on-surface-variant flex items-center justify-center text-on-surface-variant hover:text-inverse-on-surface hover:border-inverse-on-surface transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {s === 'instagram' && <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>}
                    {s === 'twitter' && <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>}
                    {s === 'youtube' && <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></>}
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.heading}>
              <p className="font-lexend text-[10px] font-semibold tracking-widest uppercase text-on-surface-variant mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="font-lexend text-sm text-on-surface-variant hover:text-inverse-on-surface transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-on-surface-variant/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-lexend text-xs text-on-surface-variant">
            © 2024 ADIDAS. ALL RIGHTS RESERVED.
          </p>
          <button className="font-lexend text-xs text-on-surface-variant hover:text-inverse-on-surface transition-colors uppercase tracking-widest">
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
