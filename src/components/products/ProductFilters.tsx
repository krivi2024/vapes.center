import React from 'react';

export function ProductFilters() {
  return (
    <div className="bg-zinc-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <div className="space-y-2">
            {['Starter Kits', 'Pod Systems', 'Mods'].map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-purple-600" />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Price Range</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-purple-600" />
              <span>Under $50</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-purple-600" />
              <span>$50 - $100</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-purple-600" />
              <span>Over $100</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}