import React from 'react';
import { Shirt, Scissors, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-pink-50 border-b border-pink-100">
      <div className="max-w-6xl mx-auto px-6 py-8 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
          <Sparkles className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-pink-700 tracking-tight">
            Fashion Hub
          </h1>
          <p className="text-sm md:text-base text-pink-600/80">
            Simple ideas for churidar and saree blouse materials and designs
          </p>
        </div>
        <div className="ml-auto hidden md:flex items-center gap-3 text-pink-600">
          <Shirt className="h-5 w-5" />
          <Scissors className="h-5 w-5" />
        </div>
      </div>
    </header>
  );
}
