import { Bell, Calendar, MapPin, Wand2 } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Live fan map',
    desc: 'See clusters of fans, tailgates, and meetups around you in real time.'
  },
  {
    icon: Calendar,
    title: 'Events that match you',
    desc: 'Personalized feed based on your teams, artists, games, hobbies, and mood.'
  },
  {
    icon: Bell,
    title: 'Smart alerts',
    desc: 'Get notified when a meetup forms nearby or your friends are heading out.'
  },
  {
    icon: Wand2,
    title: 'Create your avatar',
    desc: 'Generate animated characters that look like you and rep your fandoms.'
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Built for the way fans connect</h2>
          <p className="text-gray-600 mt-2">Meet up in person, join online, or discover something new when you’re bored at home.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition bg-white">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
