import React from 'react';
import { Scissors } from 'lucide-react';

const designData = {
  Churidar: {
    neck: [
      'Round neck with piping',
      'Boat neck with lace',
      'V-neck with simple tassel',
      'Keyhole neck with button',
      'Collar neck (mandarin style)'
    ],
    sleeve: [
      'Elbow sleeve with border',
      'Three-quarter sleeve with pleats',
      'Cap sleeve with contrast piping',
      'Bell sleeve for a flowy look',
      'Net sleeve with lining'
    ],
  },
  'Saree Blouse': {
    neck: [
      'U-neck with bead work',
      'Sweetheart neck',
      'High neck with back keyhole',
      'Square neck with piping',
      'Halter neck (for party wear)'
    ],
    sleeve: [
      'Short sleeve with puff',
      'Sleeveless with princess cut',
      'Elbow sleeve with embroidery',
      'Ruffled sleeve',
      'Sheer sleeve with applique'
    ],
  },
};

function Pill({ text }) {
  return (
    <span className="inline-block text-sm px-3 py-1 rounded-full bg-pink-50 text-pink-700 border border-pink-100">
      {text}
    </span>
  );
}

export default function DesignIdeas({ category }) {
  const group = designData[category];
  if (!group) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 pb-10">
      <div className="flex items-center gap-2 mb-4">
        <Scissors className="h-5 w-5 text-pink-600" />
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Design Ideas for {category}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-rose-100 p-5 bg-white">
          <h3 className="font-medium text-rose-700 mb-3">Neck Designs</h3>
          <div className="flex flex-wrap gap-2">
            {group.neck.map((n) => (
              <Pill key={n} text={n} />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-rose-100 p-5 bg-white">
          <h3 className="font-medium text-rose-700 mb-3">Sleeve Designs</h3>
          <div className="flex flex-wrap gap-2">
            {group.sleeve.map((s) => (
              <Pill key={s} text={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
