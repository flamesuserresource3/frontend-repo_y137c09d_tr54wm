import { Calendar, MapPin, Search } from 'lucide-react';
import { useState } from 'react';

const mockResults = [
  {
    id: 1,
    title: 'Carolina Panthers vs Buffalo Bills • Tailgate',
    time: 'Sun, 3:00 PM',
    location: 'Charlotte, NC • Lot 4',
    attendees: 128,
    tags: ['NFL', 'Tailgate', 'Fans']
  },
  {
    id: 2,
    title: 'K‑pop Concert Meetup • Pre-show hang',
    time: 'Fri, 6:30 PM',
    location: 'Uptown • Romare Bearden Park',
    attendees: 87,
    tags: ['K‑pop', 'Concert', 'Meetup']
  },
  {
    id: 3,
    title: 'Board Games & Anime Night',
    time: 'Sat, 7:00 PM',
    location: 'South End • Guildhall',
    attendees: 42,
    tags: ['Gaming', 'Anime', 'Social']
  }
];

export default function EventSearch() {
  const [query, setQuery] = useState('');
  const [city, setCity] = useState('Charlotte, NC');
  const [date, setDate] = useState('');

  const results = mockResults.filter(r =>
    r.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="search" className="relative py-14 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Search events, fandoms, and meetups</h2>
          <p className="text-gray-600 mt-1">Find who’s going and plan to join in person or online.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="col-span-2">
              <label className="text-sm font-medium text-gray-700">What are you into?</label>
              <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Teams, artists, games, hobbies…"
                  className="w-full outline-none text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Where</label>
              <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
                <MapPin className="w-4 h-4 text-gray-400" />
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City or neighborhood"
                  className="w-full outline-none text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">When</label>
              <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500">
                <Calendar className="w-4 h-4 text-gray-400" />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full outline-none text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {results.map((r) => (
              <div key={r.id} className="rounded-xl border border-gray-200 p-5 hover:shadow-md transition bg-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{r.title}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{r.time} • {r.location}</p>
                  </div>
                  <span className="text-xs bg-indigo-50 text-indigo-600 font-medium px-2 py-1 rounded-full">{r.attendees} going</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {r.tags.map(t => (
                    <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium px-3 py-2 rounded-lg">See on map</button>
                  <button className="flex-1 bg-gray-900 hover:bg-black text-white text-sm font-medium px-3 py-2 rounded-lg">Join</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
