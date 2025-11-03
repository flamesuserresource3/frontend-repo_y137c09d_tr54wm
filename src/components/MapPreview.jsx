import { Locate, Navigation, Users } from 'lucide-react';

export default function MapPreview() {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">See fans on the map and navigate there</h2>
            <p className="text-gray-600 mt-2">
              Live clusters show where people are gathering to tailgate, line up for concerts, or meet for hobbies. Tap a pin to get turn‑by‑turn directions and notify others you’re on the way.
            </p>
            <div className="mt-6 flex gap-3">
              <button className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white font-semibold px-5 py-3 rounded-lg">
                <Navigation className="w-5 h-5" />
                Preview navigation
              </button>
              <button className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-300 text-gray-900 font-semibold px-5 py-3 rounded-lg">
                <Users className="w-5 h-5" />
                Notify fans
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/3] rounded-2xl border border-gray-200 overflow-hidden bg-gradient-to-br from-sky-50 to-indigo-50">
              <div className="absolute inset-0 opacity-100">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <defs>
                    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#e0f2fe" />
                      <stop offset="100%" stopColor="#eef2ff" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="400" height="300" fill="url(#g)" />
                  {/* Roads */}
                  <g stroke="#94a3b8" strokeWidth="2" opacity="0.5">
                    <path d="M20 20 L380 20" />
                    <path d="M20 150 L380 150" />
                    <path d="M200 20 L200 280" />
                    <path d="M60 60 L340 240" />
                    <path d="M340 60 L60 240" />
                  </g>
                  {/* Pins */}
                  <g>
                    <MapPin x={90} y={90} color="#ef4444" label="Tailgate" count={34} />
                    <MapPin x={300} y={80} color="#22c55e" label="Fan meetup" count={18} />
                    <MapPin x={240} y={210} color="#3b82f6" label="Watch party" count={52} />
                  </g>
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur border border-gray-200 rounded-xl p-3 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <Locate className="w-4 h-4" />
                  <span className="text-sm">Charlotte, NC • Live</span>
                </div>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold px-3 py-1.5 rounded-lg">Open map</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapPin({ x, y, color, label, count }) {
  const pinX = x;
  const pinY = y;
  return (
    <g transform={`translate(${pinX}, ${pinY})`}>
      <circle cx="0" cy="0" r="8" fill={color} />
      <rect x="-26" y="12" width="52" height="22" rx="6" fill="#0f172a" opacity="0.9" />
      <text x="0" y="27" fontSize="10" textAnchor="middle" fill="#fff">{count}</text>
      <text x="0" y="-14" fontSize="10" textAnchor="middle" fill="#334155">{label}</text>
    </g>
  );
}
