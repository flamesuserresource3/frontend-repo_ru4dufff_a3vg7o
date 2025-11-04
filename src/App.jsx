import React, { useState } from 'react';
import Header from './components/Header.jsx';
import MaterialGrid from './components/MaterialGrid.jsx';
import DesignIdeas from './components/DesignIdeas.jsx';
import Footer from './components/Footer.jsx';

function CategorySwitcher({ category, onChange }) {
  const tabs = ['Churidar', 'Saree Blouse'];
  return (
    <div className="max-w-6xl mx-auto px-6 mt-6">
      <div className="inline-flex rounded-xl border border-pink-200 bg-white p-1">
        {tabs.map((t) => {
          const active = category === t;
          return (
            <button
              key={t}
              onClick={() => onChange(t)}
              className={
                'px-4 py-2 text-sm md:text-base rounded-lg transition ' +
                (active
                  ? 'bg-pink-600 text-white shadow'
                  : 'text-pink-700 hover:bg-pink-50')
              }
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function App() {
  const [category, setCategory] = useState('Churidar');

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-pink-50">
      <Header />
      <main>
        <CategorySwitcher category={category} onChange={setCategory} />
        <MaterialGrid category={category} />
        <DesignIdeas category={category} />
      </main>
      <Footer />
    </div>
  );
}
