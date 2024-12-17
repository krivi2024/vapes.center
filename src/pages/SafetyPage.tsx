import React from 'react';
import { Shield, Battery, AlertTriangle, ThermometerSun } from 'lucide-react';

export function SafetyPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Safety Guidelines</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-zinc-800 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <Battery className="w-6 h-6 text-purple-400 mr-3" />
            <h2 className="text-xl font-bold">Battery Safety</h2>
          </div>
          <ul className="space-y-2 text-zinc-300">
            <li>• Always use manufacturer-recommended batteries</li>
            <li>• Inspect batteries regularly for damage</li>
            <li>• Store batteries properly in a case</li>
            <li>• Never expose batteries to extreme temperatures</li>
          </ul>
        </div>

        <div className="bg-zinc-800 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 text-purple-400 mr-3" />
            <h2 className="text-xl font-bold">General Safety</h2>
          </div>
          <ul className="space-y-2 text-zinc-300">
            <li>• Keep devices and e-liquids away from children</li>
            <li>• Use only certified chargers</li>
            <li>• Don't modify your device</li>
            <li>• Follow manufacturer guidelines</li>
          </ul>
        </div>

        <div className="bg-zinc-800 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <ThermometerSun className="w-6 h-6 text-purple-400 mr-3" />
            <h2 className="text-xl font-bold">Usage Guidelines</h2>
          </div>
          <ul className="space-y-2 text-zinc-300">
            <li>• Start with lower power settings</li>
            <li>• Allow device to cool between uses</li>
            <li>• Clean your device regularly</li>
            <li>• Replace coils as recommended</li>
          </ul>
        </div>

        <div className="bg-zinc-800 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-6 h-6 text-purple-400 mr-3" />
            <h2 className="text-xl font-bold">Warning Signs</h2>
          </div>
          <ul className="space-y-2 text-zinc-300">
            <li>• Unusual heat from device</li>
            <li>• Battery swelling or damage</li>
            <li>• Leaking e-liquid</li>
            <li>• Burning taste while vaping</li>
          </ul>
        </div>
      </div>
    </div>
  );
}