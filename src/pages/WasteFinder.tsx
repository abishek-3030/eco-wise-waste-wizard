
import Navigation from '@/components/Navigation';
import WasteSearchCard from '@/components/WasteSearchCard';
import { getRandomWasteItem } from '@/services/wasteApiService';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shuffle, Database } from 'lucide-react';
import { useState } from 'react';
import WasteResultCard from '@/components/WasteResultCard';

const WasteFinder = () => {
  const [randomItem, setRandomItem] = useState(getRandomWasteItem());

  const handleGetRandomItem = () => {
    setRandomItem(getRandomWasteItem());
  };

  return (
    <div className="min-h-screen bg-eco-light">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Waste Disposal <span className="text-eco-600">Finder</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
              Search for any waste item to learn the best way to dispose of it responsibly
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-eco-600">
              <Database className="w-4 h-4" />
              <span>Powered by comprehensive waste management database</span>
            </div>
          </div>

          <WasteSearchCard />

          {/* Random Item Section */}
          <div className="mt-16">
            <Card className="p-6 bg-white border-eco-200">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Don't know what to search for?
                </h2>
                <p className="text-gray-600 mb-4">
                  Try this random waste item to see how our comprehensive system works
                </p>
                <Button 
                  onClick={handleGetRandomItem}
                  variant="outline"
                  className="border-eco-500 text-eco-700 hover:bg-eco-50"
                >
                  <Shuffle className="w-4 h-4 mr-2" />
                  Get Random Item
                </Button>
              </div>
            </Card>

            <div className="mt-6">
              <WasteResultCard item={randomItem} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteFinder;
