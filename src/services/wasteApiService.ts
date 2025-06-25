
export interface WasteSearchResult {
  id: string;
  name: string;
  category: string;
  binType: string;
  reuseIdeas: string[];
  cautions: string[];
  moreInfo: string;
  environmentalImpact: string;
  confidence: number;
}

export interface ApiResponse {
  results: WasteSearchResult[];
  total: number;
  searchTerm: string;
}

// Mock API service - replace with real API endpoint
const mockApiSearch = async (query: string): Promise<ApiResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Mock comprehensive waste data based on search query
  const mockResults: WasteSearchResult[] = generateMockResults(query);
  
  return {
    results: mockResults,
    total: mockResults.length,
    searchTerm: query
  };
};

const generateMockResults = (query: string): WasteSearchResult[] => {
  const normalizedQuery = query.toLowerCase().trim();
  
  // Comprehensive waste categories and their disposal information
  const wasteCategories = {
    // Electronics
    'phone': {
      category: 'Electronics',
      binType: 'E-Waste Recycling Center',
      reuseIdeas: ['Donate to charity', 'Trade-in program', 'Use as backup device', 'Convert to security camera'],
      cautions: ['Remove personal data before disposal', 'Remove battery if possible', 'Do not throw in regular trash'],
      moreInfo: 'Smartphones contain valuable metals like gold, silver, and rare earth elements that can be recovered.',
      environmentalImpact: 'Proper recycling prevents toxic materials from entering landfills and recovers valuable resources.'
    },
    'laptop': {
      category: 'Electronics',
      binType: 'E-Waste Recycling Center',
      reuseIdeas: ['Donate to schools', 'Use as media server', 'Part out components', 'Refurbish for resale'],
      cautions: ['Completely wipe hard drive', 'Remove battery', 'Check for data recovery services first'],
      moreInfo: 'Laptops contain both valuable and hazardous materials requiring specialized recycling.',
      environmentalImpact: 'Recycling one laptop can recover enough materials to make several new devices.'
    },
    // Plastic items
    'bottle': {
      category: 'Plastic',
      binType: 'Recycling Bin (Blue)',
      reuseIdeas: ['Plant watering system', 'Storage container', 'Bird feeder', 'Craft projects'],
      cautions: ['Remove cap and label', 'Rinse clean', 'Check recycling number'],
      moreInfo: 'Most plastic bottles are made from PET (#1) which is highly recyclable.',
      environmentalImpact: 'Recycling plastic bottles saves 70% of the energy needed to make new ones.'
    },
    'bag': {
      category: 'Plastic',
      binType: 'Store Drop-off (Plastic Film Recycling)',
      reuseIdeas: ['Reuse for shopping', 'Pet waste bags', 'Storage for wet items', 'Craft material'],
      cautions: ['Never put in curbside recycling', 'Must be clean and dry', 'Remove receipts'],
      moreInfo: 'Plastic bags can jam recycling machinery, requiring special collection points.',
      environmentalImpact: 'One recycled plastic bag can be turned into lumber for park benches.'
    },
    // Paper products
    'paper': {
      category: 'Paper',
      binType: 'Recycling Bin (Blue)',
      reuseIdeas: ['Scrap paper for notes', 'Gift wrap', 'Compost (unbleached)', 'Art projects'],
      cautions: ['Remove staples and clips', 'No food contamination', 'No wax coating'],
      moreInfo: 'Paper can be recycled 5-7 times before fibers become too short.',
      environmentalImpact: 'Recycling one ton of paper saves 17 trees and 7,000 gallons of water.'
    },
    // Organic waste
    'food': {
      category: 'Organic',
      binType: 'Compost Bin (Green)',
      reuseIdeas: ['Home composting', 'Feed to chickens', 'Worm bin', 'Municipal composting'],
      cautions: ['No meat or dairy in home compost', 'Keep separate from recyclables', 'Use compostable bags'],
      moreInfo: 'Food waste makes up about 30% of household garbage but can be composted.',
      environmentalImpact: 'Composting food waste reduces methane emissions from landfills by 90%.'
    },
    // Glass
    'glass': {
      category: 'Glass',
      binType: 'Recycling Bin (Blue) or Glass Collection',
      reuseIdeas: ['Storage jars', 'Vases', 'Drinking glasses', 'Craft projects'],
      cautions: ['Remove lids and caps', 'No broken glass in regular recycling', 'Sort by color if required'],
      moreInfo: 'Glass can be recycled infinitely without losing quality or purity.',
      environmentalImpact: 'Using recycled glass saves 30% of the energy needed to make new glass.'
    },
    // Batteries
    'battery': {
      category: 'Hazardous',
      binType: 'Hazardous Waste Collection',
      reuseIdeas: ['Battery reconditioning (for some types)', 'Art projects (when safely emptied)', 'Return to manufacturer'],
      cautions: ['Never throw in regular trash', 'Tape terminals to prevent fire', 'Store in cool, dry place'],
      moreInfo: 'Batteries contain heavy metals and acids that are toxic to the environment.',
      environmentalImpact: 'Proper battery recycling prevents soil and water contamination from toxic materials.'
    }
  };

  // Find matching categories
  const results: WasteSearchResult[] = [];
  let resultId = 1;

  Object.entries(wasteCategories).forEach(([keyword, data]) => {
    if (normalizedQuery.includes(keyword) || keyword.includes(normalizedQuery)) {
      results.push({
        id: `result-${resultId++}`,
        name: `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} (${data.category})`,
        category: data.category,
        binType: data.binType,
        reuseIdeas: data.reuseIdeas,
        cautions: data.cautions,
        moreInfo: data.moreInfo,
        environmentalImpact: data.environmentalImpact,
        confidence: calculateConfidence(normalizedQuery, keyword)
      });
    }
  });

  // If no direct matches, provide general suggestions
  if (results.length === 0) {
    results.push({
      id: 'general-1',
      name: `General Waste Item: "${query}"`,
      category: 'General',
      binType: 'Check Local Guidelines',
      reuseIdeas: ['Contact local waste management', 'Search manufacturer website', 'Ask at recycling center'],
      cautions: ['Research proper disposal method', 'Do not assume it goes in regular trash', 'Check for special programs'],
      moreInfo: 'Many items have specific disposal requirements. Contact your local waste management authority.',
      environmentalImpact: 'Proper disposal prevents environmental contamination and maximizes resource recovery.',
      confidence: 0.3
    });
  }

  // Sort by confidence score
  return results.sort((a, b) => b.confidence - a.confidence);
};

const calculateConfidence = (query: string, keyword: string): number => {
  const queryWords = query.toLowerCase().split(' ');
  const keywordWords = keyword.toLowerCase().split(' ');
  
  let matches = 0;
  queryWords.forEach(qWord => {
    keywordWords.forEach(kWord => {
      if (qWord.includes(kWord) || kWord.includes(qWord)) {
        matches++;
      }
    });
  });
  
  return Math.min(matches / Math.max(queryWords.length, keywordWords.length), 1);
};

export const searchWasteItems = async (query: string): Promise<ApiResponse> => {
  if (!query.trim()) {
    return { results: [], total: 0, searchTerm: query };
  }

  try {
    // Replace this with actual API call
    // const response = await fetch(`https://api.wastemanagement.com/search?q=${encodeURIComponent(query)}`);
    // const data = await response.json();
    // return data;
    
    return await mockApiSearch(query);
  } catch (error) {
    console.error('Error searching waste items:', error);
    return { results: [], total: 0, searchTerm: query };
  }
};

export const getRandomWasteItem = (): WasteSearchResult => {
  const randomItems = [
    'plastic bottle',
    'old phone',
    'banana peel',
    'glass jar',
    'laptop',
    'battery',
    'food scraps',
    'paper'
  ];
  
  const randomItem = randomItems[Math.floor(Math.random() * randomItems.length)];
  
  // This is a simplified version - in real app, you'd call the API
  return {
    id: 'random-1',
    name: `${randomItem.charAt(0).toUpperCase() + randomItem.slice(1)}`,
    category: 'Sample',
    binType: 'Various - Search for Details',
    reuseIdeas: ['Click "Get Random Item" to see disposal options'],
    cautions: ['Always verify local disposal guidelines'],
    moreInfo: 'Use the search feature above to get detailed disposal information.',
    environmentalImpact: 'Proper disposal helps protect our environment.',
    confidence: 1.0
  };
};
