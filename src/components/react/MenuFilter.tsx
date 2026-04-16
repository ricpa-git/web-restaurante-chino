import { useState, useEffect } from 'react';
import type { Category } from '../../types';

interface MenuFilterProps {
  categories: Category[];
  initialCategory?: string;
}

export default function MenuFilter({ categories, initialCategory }: MenuFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(initialCategory || null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#categoria-')) {
        setActiveCategory(hash.replace('#categoria-', ''));
      } else if (hash === '' || hash === '#') {
        setActiveCategory(null);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleClick = (id: string | null) => {
    if (id === null) {
      window.location.hash = '';
      setActiveCategory(null);
    } else {
      window.location.hash = `#categoria-${id}`;
      setActiveCategory(id);
    }
  };

  const sorted = [...categories].filter(c => c.activo).sort((a, b) => a.orden - b.orden);

  const btnBase = "min-h-[44px] px-5 py-2.5 text-sm font-sans font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-dark whitespace-nowrap border";
  const btnActive = "bg-accent text-dark border-accent shadow-lg shadow-accent/20";
  const btnInactive = "bg-transparent text-white/60 border-white/10 hover:border-accent/50 hover:text-white";

  return (
    <div className="w-full py-8 bg-dark-gray/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => handleClick(null)}
            className={`${btnBase} rounded ${activeCategory === null ? btnActive : btnInactive}`}
            aria-pressed={activeCategory === null}
            aria-label="Mostrar todos los platos"
          >
            Todos
          </button>
          {sorted.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleClick(cat.id)}
              className={`${btnBase} rounded ${activeCategory === cat.id ? btnActive : btnInactive}`}
              aria-pressed={activeCategory === cat.id}
              aria-label={`Filtrar por ${cat.nombre}`}
            >
              {cat.nombre}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
