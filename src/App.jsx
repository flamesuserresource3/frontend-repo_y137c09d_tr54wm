import Hero from './components/Hero';
import EventSearch from './components/EventSearch';
import MapPreview from './components/MapPreview';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <EventSearch />
      <MapPreview />
      <Features />
      <footer className="mt-auto py-10 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Fandom — Find your people.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
