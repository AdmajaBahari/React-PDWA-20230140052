import { filterTags } from '../data/products';

export default function FilterBar({ activeFilter, onFilterChange, productCount }) {
  return (
    <div className="border-b border-outline-variant">
      <div className="max-w-container mx-auto px-5 md:px-16 py-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {/* Filter chips */}
          <div className="flex items-center gap-2 flex-wrap">
            {filterTags.map(tag => (
              <button
                key={tag.value}
                onClick={() => onFilterChange(tag.value)}
                className={`font-lexend text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeFilter === tag.value
                    ? 'bg-on-surface text-on-primary border-on-surface'
                    : 'bg-transparent text-on-surface border-on-surface hover:bg-surface-container'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="font-lexend text-xs text-on-surface-variant">
            {productCount} {productCount === 1 ? 'product' : 'products'}
          </p>
        </div>
      </div>
    </div>
  );
}
