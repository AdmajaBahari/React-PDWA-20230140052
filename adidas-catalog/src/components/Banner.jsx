export default function Banner() {
  return (
    <section className="bg-surface-container-highest py-16 md:py-24 overflow-hidden relative">
      {/* Decorative text */}
      <div className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden">
        <span className="font-anton text-[clamp(5rem,15vw,14rem)] uppercase text-surface-container leading-none tracking-tight whitespace-nowrap opacity-50">
          VELOCITY DEFINED.&nbsp;VELOCITY DEFINED.
        </span>
      </div>

      <div className="max-w-container mx-auto px-5 md:px-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-anton text-[clamp(3rem,8vw,5.5rem)] uppercase leading-none tracking-tight text-on-surface mb-6">
              VELOCITY<br />DEFINED.
            </h2>
            <p className="font-lexend text-base md:text-lg text-on-surface-variant leading-relaxed mb-8 max-w-sm">
              Experience the next generation of speed. Engineered for precision, designed for the bold. Step into the future of performance footwear.
            </p>
            <button className="font-lexend text-sm font-semibold tracking-widest uppercase bg-on-surface text-on-primary px-8 py-4 rounded-lg hover:bg-[#CCFF00] hover:text-on-surface transition-colors duration-200">
              EXPLORE TECH
            </button>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="rounded-xl overflow-hidden border border-surface-container-high w-full max-w-sm aspect-[4/3] bg-surface-container-low flex items-center justify-center">
              <img
                src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/11e52e96f14f42d69427ae5b00b5d9cf_9366/Adizero_Evo_SL_Running_Shoes_Yellow_IG5936_01_standard.jpg"
                alt="Performance shoe"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                onError={e => { e.target.src = 'https://placehold.co/400x300/e2e2e2/1b1b1b?text=ADIZERO'; }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
