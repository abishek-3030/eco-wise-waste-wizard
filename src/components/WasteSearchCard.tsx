
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { searchWasteItem, type WasteItem } from '@/data/wasteDatabase';
import WasteResultCard from './WasteResultCard';

const WasteSearchCard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<WasteItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    
    // Simulate API delay for better UX
    setTimeout(() => {
      const results = searchWasteItem(searchQuery);
      setSearchResults(results);
      setIsSearching(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Search Card */}
      <Card className="p-6 bg-white shadow-lg border-eco-200">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            What waste item do you want to dispose of?
          </h2>
          <p className="text-gray-600">
            Enter any waste item to learn how to dispose of it properly
          </p>
        </div>
        
        <div className="flex gap-2 max-w-md mx-auto">
          <Input
            type="text"
            placeholder="e.g., plastic bottle, banana peel, old phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 border-eco-300 focus:border-eco-500 focus:ring-eco-500"
          />
          <Button 
            onClick={handleSearch}
            disabled={!searchQuery.trim() || isSearching}
            className="bg-eco-gradient hover:opacity-90 text-white px-6"
          >
            {isSearching ? (
              <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              <Search className="w-4 h-4" />
            )}
          </Button>
        </div>
      </Card>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">
            Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
          </h3>
          <div className="grid gap-6">
            {searchResults.map((item) => (
              <WasteResultCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {searchQuery && searchResults.length === 0 && !isSearching && (
        <Card className="p-8 text-center bg-gray-50">
          <div className="text-gray-500">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-semibold mb-2">No results found</h3>
            <p>We couldn't find information about "{searchQuery}". Try searching for common items like "plastic bottle" or "banana peel".</p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default WasteSearchCard;
