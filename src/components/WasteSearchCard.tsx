
import { useState, useRef } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { searchWasteItems, type WasteSearchResult } from '@/services/wasteApiService';
import { useAutoSuggest } from '@/hooks/useAutoSuggest';
import WasteResultCard from './WasteResultCard';

const WasteSearchCard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<WasteSearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [hasSearched, setHasSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const { suggestions, isVisible, hideSuggestions, showSuggestions } = useAutoSuggest(searchQuery);

  const handleSearch = async (query?: string) => {
    const searchTerm = query || searchQuery;
    if (!searchTerm.trim()) return;
    
    setIsSearching(true);
    setHasSearched(true);
    hideSuggestions();
    
    try {
      const response = await searchWasteItems(searchTerm);
      setSearchResults(response.results);
      setTotalResults(response.total);
    } catch (error) {
      console.error('Search failed:', error);
      setSearchResults([]);
      setTotalResults(0);
    } finally {
      setIsSearching(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    } else if (e.key === 'Escape') {
      hideSuggestions();
    }
  };

  const handleSuggestionClick = (suggestion: { name: string }) => {
    setSearchQuery(suggestion.name);
    hideSuggestions();
    handleSearch(suggestion.name);
    inputRef.current?.focus();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.length >= 2) {
      showSuggestions();
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
            Enter any waste item to get comprehensive disposal information from our database
          </p>
        </div>
        
        <div className="relative max-w-md mx-auto">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Input
                ref={inputRef}
                type="text"
                placeholder="e.g., smartphone, plastic container, batteries..."
                value={searchQuery}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                onFocus={showSuggestions}
                onBlur={() => setTimeout(hideSuggestions, 200)} // Delay to allow suggestion clicks
                className="border-eco-300 focus:border-eco-500 focus:ring-eco-500"
              />
              
              {/* Auto-suggestions dropdown */}
              {isVisible && (
                <div className="absolute top-full left-0 right-0 z-10 mt-1 bg-white border border-eco-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion.id}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full px-4 py-3 text-left hover:bg-eco-50 flex items-center justify-between border-b border-gray-100 last:border-b-0"
                    >
                      <span className="text-gray-800">{suggestion.name}</span>
                      <span className="text-xs text-eco-600 bg-eco-100 px-2 py-1 rounded-full">
                        {suggestion.category}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <Button 
              onClick={() => handleSearch()}
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
        </div>

        {isSearching && (
          <div className="text-center mt-4">
            <p className="text-eco-600 font-medium">Searching comprehensive waste database...</p>
          </div>
        )}
      </Card>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">
              Found {totalResults} result{totalResults !== 1 ? 's' : ''} for "{searchQuery}"
            </h3>
            <div className="text-sm text-gray-500">
              Results sorted by relevance
            </div>
          </div>
          <div className="grid gap-6">
            {searchResults.map((item, index) => (
              <div key={item.id} className="relative">
                {item.confidence < 0.7 && (
                  <div className="absolute top-2 right-2 z-10">
                    <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                      Partial Match
                    </span>
                  </div>
                )}
                <WasteResultCard item={item} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {hasSearched && searchResults.length === 0 && !isSearching && (
        <Card className="p-8 text-center bg-gray-50">
          <div className="text-gray-500">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-semibold mb-2">No results found</h3>
            <p className="mb-4">We couldn't find specific information about "{searchQuery}".</p>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Try these suggestions:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Use more general terms (e.g., "phone" instead of "iPhone 15")</li>
                <li>• Try alternative names for the item</li>
                <li>• Search for the material type (e.g., "plastic", "metal", "glass")</li>
                <li>• Contact your local waste management for specific items</li>
              </ul>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default WasteSearchCard;
