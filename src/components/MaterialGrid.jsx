import React from 'react';

const materialsData = {
  Churidar: [
    { name: 'Cotton', note: 'Breathable, perfect for daily wear' },
    { name: 'Silk Cotton', note: 'Soft shine with comfortable feel' },
    { name: 'Chiffon', note: 'Lightweight and flowy' },
    { name: 'Georgette', note: 'Drapes well, slightly textured' },
    { name: 'Rayon', note: 'Soft, easy to maintain' },
    { name: 'Linen', note: 'Cool and classy look' },
  ],
  'Saree Blouse': [
    { name: 'Raw Silk', note: 'Rich texture, festive look' },
    { name: 'Brocade', note: 'Traditional patterns, grand style' },
    { name: 'Cotton Silk', note: 'Comfort with elegance' },
    { name: 'Velvet', note: 'Royal finish for special occasions' },
    { name: 'Satin', note: 'Smooth and glossy' },
    { name: 'Net with Lining', note: 'Trendy and stylish' },
  ],
};

export default function MaterialGrid({ category }) {
  const items = materialsData[category] ?? [];
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        Popular Materials for {category}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((m) => (
          <div
            key={m.name}
            className="rounded-xl border border-pink-100 bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="text-pink-700 font-medium">{m.name}</div>
            <div className="text-sm text-gray-600 mt-1">{m.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
