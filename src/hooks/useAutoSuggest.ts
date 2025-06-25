
import { useState, useEffect, useMemo } from 'react';

interface AutoSuggestItem {
  id: string;
  name: string;
  category: string;
}

const COMMON_WASTE_ITEMS: AutoSuggestItem[] = [
  { id: '1', name: 'Plastic bottle', category: 'Plastic' },
  { id: '2', name: 'Glass jar', category: 'Glass' },
  { id: '3', name: 'Aluminum can', category: 'Metal' },
  { id: '4', name: 'Smartphone', category: 'Electronics' },
  { id: '5', name: 'Laptop', category: 'Electronics' },
  { id: '6', name: 'Battery', category: 'Hazardous' },
  { id: '7', name: 'Food scraps', category: 'Organic' },
  { id: '8', name: 'Newspaper', category: 'Paper' },
  { id: '9', name: 'Cardboard box', category: 'Paper' },
  { id: '10', name: 'Plastic bag', category: 'Plastic' },
  { id: '11', name: 'Light bulb', category: 'Electronics' },
  { id: '12', name: 'Paint can', category: 'Hazardous' },
  { id: '13', name: 'Banana peel', category: 'Organic' },
  { id: '14', name: 'Coffee cup', category: 'Mixed' },
  { id: '15', name: 'Pizza box', category: 'Paper' },
  { id: '16', name: 'Yogurt container', category: 'Plastic' },
  { id: '17', name: 'Wine bottle', category: 'Glass' },
  { id: '18', name: 'Motor oil', category: 'Hazardous' },
  { id: '19', name: 'Old clothes', category: 'Textile' },
  { id: '20', name: 'Computer monitor', category: 'Electronics' }
];

export const useAutoSuggest = (query: string) => {
  const [suggestions, setSuggestions] = useState<AutoSuggestItem[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const filteredSuggestions = useMemo(() => {
    if (!query.trim() || query.length < 2) return [];
    
    const lowercaseQuery = query.toLowerCase();
    return COMMON_WASTE_ITEMS
      .filter(item => 
        item.name.toLowerCase().includes(lowercaseQuery) ||
        item.category.toLowerCase().includes(lowercaseQuery)
      )
      .slice(0, 5); // Limit to 5 suggestions
  }, [query]);

  useEffect(() => {
    setSuggestions(filteredSuggestions);
    setIsVisible(filteredSuggestions.length > 0 && query.length >= 2);
  }, [filteredSuggestions, query]);

  const hideSuggestions = () => setIsVisible(false);
  const showSuggestions = () => setIsVisible(suggestions.length > 0);

  return {
    suggestions,
    isVisible,
    hideSuggestions,
    showSuggestions
  };
};
