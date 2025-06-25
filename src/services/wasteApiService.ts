import { wasteDatabase, searchWasteItem } from '@/data/wasteDatabase';

export interface WasteSearchResult {
  id: string;
  name: string;
  category: string;
  binType: string;
  reuseIdeas: string[];
  reduceIdeas: string[];
  recycleIdeas: string[];
  cautions: string[];
  moreInfo: string;
  environmentalImpact: string;
  confidence: number;
  disposalIcon?: string;
}

export interface ApiResponse {
  results: WasteSearchResult[];
  total: number;
  searchTerm: string;
}

// Enhanced mock API service with real database integration
const mockApiSearch = async (query: string): Promise<ApiResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // First try to find exact matches in our database
  const databaseResults = searchWasteItem(query);
  const results: WasteSearchResult[] = [];

  // Add database results with high confidence
  databaseResults.forEach((item, index) => {
    const confidence = calculateDatabaseConfidence(query, item);
    results.push({
      ...item,
      confidence
    });
  });

  // If we have few results, add comprehensive mock results
  if (results.length < 3) {
    const mockResults = generateMockResults(query);
    results.push(...mockResults.filter(mock => 
      !results.some(existing => existing.name.toLowerCase() === mock.name.toLowerCase())
    ));
  }

  // Sort by confidence and limit results
  const sortedResults = results
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, 5);
  
  return {
    results: sortedResults,
    total: sortedResults.length,
    searchTerm: query
  };
};

const calculateDatabaseConfidence = (query: string, item: any): number => {
  const normalizedQuery = query.toLowerCase().trim();
  const itemName = item.name.toLowerCase();
  
  // Exact match
  if (itemName === normalizedQuery) return 1.0;
  
  // Name starts with query
  if (itemName.startsWith(normalizedQuery)) return 0.9;
  
  // Name contains query
  if (itemName.includes(normalizedQuery)) return 0.8;
  
  // Keywords match
  const keywordMatches = item.keywords.filter(keyword => 
    keyword.includes(normalizedQuery) || normalizedQuery.includes(keyword)
  ).length;
  
  if (keywordMatches > 0) return 0.6 + (keywordMatches * 0.1);
  
  // Category match
  if (item.category.toLowerCase().includes(normalizedQuery)) return 0.5;
  
  return 0.3;
};

const generateMockResults = (query: string): WasteSearchResult[] => {
  const normalizedQuery = query.toLowerCase().trim();
  
  // Comprehensive waste categories and their disposal information
  const wasteCategories = {
    // Electronics & Technology
    'phone': {
      category: 'Electronics',
      binType: 'E-Waste Collection Point',
      reuseIdeas: ['Donate to charity programs', 'Trade-in at electronics stores', 'Use as backup device', 'Convert to security camera', 'Sell to refurbishment companies'],
      reduceIdeas: ['Keep phones longer with protective cases', 'Repair instead of replacing', 'Buy refurbished phones', 'Choose phones with longer software support', 'Avoid unnecessary upgrades'],
      recycleIdeas: ['Manufacturer take-back programs', 'Trade-in for credit', 'Certified e-waste recyclers', 'Carrier recycling programs', 'Support recycled material companies'],
      cautions: ['Remove all personal data completely', 'Remove battery if possible', 'Never throw in regular trash', 'Check for manufacturer take-back programs'],
      moreInfo: 'Smartphones contain valuable metals like gold, silver, and rare earth elements. They also contain toxic materials requiring proper disposal.',
      environmentalImpact: 'Proper recycling prevents toxic materials from entering landfills and recovers valuable resources. Manufacturing one phone produces 70kg of CO2.',
      disposalIcon: '🔌'
    },
    'bottle': {
      category: 'Plastic',
      binType: 'Recycling Bin (Blue)',
      reuseIdeas: ['Plant watering system with holes', 'Storage containers for garage', 'Bird feeders for wildlife', 'Craft projects with kids', 'Scoops for pet food'],
      reduceIdeas: ['Use reusable water bottle', 'Buy beverages in larger containers', 'Choose minimal plastic packaging', 'Refill bottles when possible', 'Support recycled plastic brands'],
      recycleIdeas: ['Clean and place in recycling bin', 'Remove labels and caps', 'Bottle return programs', 'Specialized plastic recycling centers', 'Support recycled plastic products'],
      cautions: ['Remove cap and label completely', 'Rinse clean of all residue', 'Check recycling number on bottom', 'Don\'t crush if local rules prohibit'],
      moreInfo: 'Most plastic bottles are made from PET (#1) which is highly recyclable. The recycling process involves cleaning, shredding, and remelting.',
      environmentalImpact: 'Recycling plastic bottles saves 70% of energy compared to making new ones and reduces greenhouse gas emissions by 50%.',
      disposalIcon: '♻️'
    },
    'paper': {
      category: 'Paper',
      binType: 'Recycling Bin (Blue)',
      reuseIdeas: ['Scrap paper for notes and lists', 'Gift wrapping material', 'Art projects with children', 'Fire starter for camping', 'Protective packaging'],
      reduceIdeas: ['Go digital for documents', 'Print double-sided', 'Use both sides for notes', 'Choose electronic receipts', 'Buy products with less packaging'],
      recycleIdeas: ['Clean and place in recycling bin', 'Remove staples and clips', 'Community paper drives', 'Office paper recycling programs', 'Support recycled paper products'],
      cautions: ['Remove all staples and paper clips', 'No food contamination allowed', 'No wax or plastic coating', 'Keep dry until collection'],
      moreInfo: 'Paper can be recycled 5-7 times before fibers become too short. Each recycling reduces fiber length.',
      environmentalImpact: 'Recycling one ton of paper saves 17 trees, 7,000 gallons of water, and enough energy to power an average home for 6 months.',
      disposalIcon: '📄'
    },
    'food': {
      category: 'Organic',
      binType: 'Compost Bin (Green)',
      reuseIdeas: ['Home composting system', 'Worm bin composting', 'Make vegetable stock from scraps', 'Natural plant fertilizer', 'Bokashi fermentation'],
      reduceIdeas: ['Plan meals to avoid overbuying', 'Store food properly', 'Use ugly fruits and vegetables', 'Repurpose leftovers', 'Learn proper portion sizes'],
      recycleIdeas: ['Municipal composting programs', 'Community composting initiatives', 'Nutrient-rich soil amendment', 'Food waste collection services', 'Restaurant composting support'],
      cautions: ['No meat or dairy in home compost', 'Keep separate from recyclables', 'Use compostable bags only', 'Cover to prevent pests'],
      moreInfo: 'Food waste makes up 30% of household garbage but can be composted into valuable soil amendment.',
      environmentalImpact: 'Composting food waste reduces methane emissions from landfills by 90% and creates nutrient-rich soil.',
      disposalIcon: '🌱'
    },
    'glass': {
      category: 'Glass',
      binType: 'Glass Collection (Green) or Recycling Bin',
      reuseIdeas: ['Storage jars for pantry', 'Vases for flowers', 'Drinking glasses', 'Craft projects', 'Candle holders'],
      reduceIdeas: ['Buy products in bulk', 'Choose reusable packaging', 'Make homemade preserves', 'Reuse before disposal', 'Support minimal packaging brands'],
      recycleIdeas: ['Clean and sort by color', 'Remove lids and labels', 'Glass recycling centers', 'Community collection programs', 'Support recycled glass products'],
      cautions: ['Remove all lids and caps', 'No broken glass in regular recycling', 'Sort by color if required locally', 'Clean of all residue'],
      moreInfo: 'Glass can be recycled infinitely without losing quality or purity. It melts at lower temperatures when recycled.',
      environmentalImpact: 'Using recycled glass saves 30% of energy needed to make new glass and reduces CO2 emissions by 20%.',
      disposalIcon: '🟢'
    },
    'metal': {
      category: 'Metals',
      binType: 'Recycling Bin (Blue) or Scrap Metal',
      reuseIdeas: ['Art and sculpture projects', 'Repair material for other items', 'Donation to makerspaces', 'Craft supplies', 'Garden decorations'],
      reduceIdeas: ['Buy quality metal items that last', 'Repair instead of replacing', 'Choose multi-purpose metal tools', 'Buy used metal items', 'Avoid disposable metal products'],
      recycleIdeas: ['Scrap metal dealer sale', 'Municipal metal recycling', 'Separate by metal type', 'Community metal drives', 'Support recycled metal products'],
      cautions: ['Remove any non-metal attachments', 'Check for hazardous coatings', 'Separate different metal types', 'Clean of any substances'],
      moreInfo: 'Metals are highly valuable recyclables that can be recycled indefinitely without quality loss.',
      environmentalImpact: 'Recycling metals saves 75% of energy compared to mining new metals and significantly reduces environmental impact.',
      disposalIcon: '⚙️'
    }
  };

  // Find matching categories
  const results: WasteSearchResult[] = [];
  let resultId = 1;

  Object.entries(wasteCategories).forEach(([keyword, data]) => {
    if (normalizedQuery.includes(keyword) || keyword.includes(normalizedQuery) || 
        data.category.toLowerCase().includes(normalizedQuery)) {
      results.push({
        id: `result-${resultId++}`,
        name: `${keyword.charAt(0).toUpperCase() + keyword.slice(1)} (${data.category})`,
        category: data.category,
        binType: data.binType,
        reuseIdeas: data.reuseIdeas,
        reduceIdeas: data.reduceIdeas,
        recycleIdeas: data.recycleIdeas,
        cautions: data.cautions,
        moreInfo: data.moreInfo,
        environmentalImpact: data.environmentalImpact,
        confidence: calculateConfidence(normalizedQuery, keyword),
        disposalIcon: data.disposalIcon
      });
    }
  });

  // If no matches, provide helpful general guidance
  if (results.length === 0) {
    results.push({
      id: 'general-1',
      name: `"${query}" - Check Local Guidelines`,
      category: 'General Guidance',
      binType: 'Contact Local Waste Management',
      reuseIdeas: [
        'Search manufacturer website for disposal info',
        'Contact local recycling center',
        'Check community reuse programs',
        'Ask at hardware stores for specialty items',
        'Look for producer responsibility programs'
      ],
      reduceIdeas: [],
      recycleIdeas: [],
      cautions: [
        'Research proper disposal method before acting',
        'Do not assume it goes in regular trash',
        'Check for special collection programs',
        'Some items may require professional disposal'
      ],
      moreInfo: 'Many items have specific disposal requirements that vary by location. Your local waste management authority can provide accurate guidance.',
      environmentalImpact: 'Proper disposal prevents environmental contamination and maximizes resource recovery. When in doubt, choose the most environmentally safe option.',
      confidence: 0.3,
      disposalIcon: '❓'
    });
  }

  return results.sort((a, b) => b.confidence - a.confidence);
};

const calculateConfidence = (query: string, keyword: string): number => {
  const queryWords = query.toLowerCase().split(' ');
  const keywordWords = keyword.toLowerCase().split(' ');
  
  let matches = 0;
  let exactMatch = false;
  
  queryWords.forEach(qWord => {
    keywordWords.forEach(kWord => {
      if (qWord === kWord) {
        matches += 2; // Exact word match
        exactMatch = true;
      } else if (qWord.includes(kWord) || kWord.includes(qWord)) {
        matches += 1; // Partial match
      }
    });
  });
  
  let confidence = matches / Math.max(queryWords.length, keywordWords.length);
  
  // Boost for exact matches
  if (exactMatch) confidence = Math.min(confidence + 0.3, 1.0);
  
  return Math.min(confidence, 1.0);
};

export const searchWasteItems = async (query: string): Promise<ApiResponse> => {
  if (!query.trim()) {
    return { results: [], total: 0, searchTerm: query };
  }

  try {
    return await mockApiSearch(query);
  } catch (error) {
    console.error('Error searching waste items:', error);
    return { results: [], total: 0, searchTerm: query };
  }
};

export const getRandomWasteItem = (): WasteSearchResult => {
  const randomItems = wasteDatabase;
  const randomItem = randomItems[Math.floor(Math.random() * randomItems.length)];
  
  return {
    ...randomItem,
    confidence: 1.0
  };
};
