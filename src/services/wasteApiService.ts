
import { wasteDatabase, searchWasteItem } from '@/data/wasteDatabase';

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
      cautions: ['Remove all personal data completely', 'Remove battery if possible', 'Never throw in regular trash', 'Check for manufacturer take-back programs'],
      moreInfo: 'Smartphones contain valuable metals like gold, silver, and rare earth elements. They also contain toxic materials requiring proper disposal.',
      environmentalImpact: 'Proper recycling prevents toxic materials from entering landfills and recovers valuable resources. Manufacturing one phone produces 70kg of CO2.',
      disposalIcon: '🔌'
    },
    'laptop': {
      category: 'Electronics',
      binType: 'E-Waste Collection Point',
      reuseIdeas: ['Donate to schools or nonprofits', 'Use as media server', 'Part out working components', 'Refurbish for resale', 'Data recovery if needed'],
      cautions: ['Completely wipe hard drive multiple times', 'Remove battery safely', 'Check for data recovery services first', 'Never dispose in regular trash'],
      moreInfo: 'Laptops contain both valuable materials (gold, silver, copper) and hazardous substances (lead, mercury) requiring specialized recycling.',
      environmentalImpact: 'Recycling one laptop can recover enough materials to make several new devices while preventing toxic contamination.',
      disposalIcon: '🔌'
    },
    'computer': {
      category: 'Electronics',
      binType: 'E-Waste Collection Point',
      reuseIdeas: ['Donate to community centers', 'Use for spare parts', 'Convert to home server', 'Sell working components', 'Manufacturer buyback programs'],
      cautions: ['Securely wipe all data storage', 'Remove valuable components first', 'Handle CRT monitors specially', 'Never throw in regular waste'],
      moreInfo: 'Desktop computers contain significant amounts of recoverable metals and plastics, but also toxic materials like lead and mercury.',
      environmentalImpact: 'Proper e-waste recycling recovers 95% of materials and prevents environmental contamination from heavy metals.',
      disposalIcon: '🔌'
    },
    // Plastic items
    'bottle': {
      category: 'Plastic',
      binType: 'Recycling Bin (Blue)',
      reuseIdeas: ['Plant watering system with holes', 'Storage containers for garage', 'Bird feeders for wildlife', 'Craft projects with kids', 'Scoops for pet food'],
      cautions: ['Remove cap and label completely', 'Rinse clean of all residue', 'Check recycling number on bottom', 'Don\'t crush if local rules prohibit'],
      moreInfo: 'Most plastic bottles are made from PET (#1) which is highly recyclable. The recycling process involves cleaning, shredding, and remelting.',
      environmentalImpact: 'Recycling plastic bottles saves 70% of energy compared to making new ones and reduces greenhouse gas emissions by 50%.',
      disposalIcon: '♻️'
    },
    'bag': {
      category: 'Plastic',
      binType: 'Store Drop-off (Plastic Film Recycling)',
      reuseIdeas: ['Reuse for shopping trips', 'Pet waste collection', 'Storage for wet/dirty items', 'Craft material for weaving', 'Protective covering for plants'],
      cautions: ['Never put in curbside recycling bins', 'Must be completely clean and dry', 'Remove all receipts and stickers', 'Only take to designated drop-off points'],
      moreInfo: 'Plastic bags can jam recycling machinery at facilities, which is why they need special collection points at stores.',
      environmentalImpact: 'One recycled plastic bag can be turned into composite lumber for park benches and decking materials.',
      disposalIcon: '🛍️'
    },
    'container': {
      category: 'Plastic',
      binType: 'Recycling Bin (Blue)',
      reuseIdeas: ['Food storage in pantry', 'Organizing small items', 'Seedling planters for garden', 'Craft supply storage', 'Lunch containers'],
      cautions: ['Remove all labels and adhesive', 'Clean thoroughly of food residue', 'Check recycling number', 'Remove any metal or mixed materials'],
      moreInfo: 'Plastic containers come in various types. Check the recycling number to ensure local acceptance.',
      environmentalImpact: 'Recycling plastic containers reduces the need for virgin plastic production and saves significant energy.',
      disposalIcon: '♻️'
    },
    // Paper products
    'paper': {
      category: 'Paper',
      binType: 'Recycling Bin (Blue)',
      reuseIdeas: ['Scrap paper for notes and lists', 'Gift wrapping material', 'Compost material (unbleached)', 'Art projects with children', 'Fire starter for camping'],
      cautions: ['Remove all staples and paper clips', 'No food contamination allowed', 'No wax or plastic coating', 'Keep dry until collection'],
      moreInfo: 'Paper can be recycled 5-7 times before fibers become too short. Each recycling reduces fiber length.',
      environmentalImpact: 'Recycling one ton of paper saves 17 trees, 7,000 gallons of water, and enough energy to power an average home for 6 months.',
      disposalIcon: '📄'
    },
    'cardboard': {
      category: 'Paper',
      binType: 'Recycling Bin (Blue)',
      reuseIdeas: ['Moving and storage boxes', 'Kids playhouses and forts', 'Garden mulch when shredded', 'Cat scratching posts', 'Drawer dividers'],
      cautions: ['Remove all tape and staples', 'Flatten boxes to save space', 'Keep completely dry', 'Remove any plastic or foam'],
      moreInfo: 'Corrugated cardboard is highly recyclable and makes up a significant portion of recycling streams.',
      environmentalImpact: 'Recycling cardboard uses 75% less energy than making new cardboard and reduces methane emissions from landfills.',
      disposalIcon: '📦'
    },
    // Organic waste
    'food': {
      category: 'Organic',
      binType: 'Compost Bin (Green)',
      reuseIdeas: ['Home composting system', 'Worm bin composting', 'Municipal composting programs', 'Bokashi fermentation', 'Community garden donation'],
      cautions: ['No meat or dairy in home compost', 'Keep separate from recyclables', 'Use compostable bags only', 'Cover to prevent pests'],
      moreInfo: 'Food waste makes up 30% of household garbage but can be composted into valuable soil amendment.',
      environmentalImpact: 'Composting food waste reduces methane emissions from landfills by 90% and creates nutrient-rich soil.',
      disposalIcon: '🌱'
    },
    'organic': {
      category: 'Organic',
      binType: 'Compost Bin (Green)',
      reuseIdeas: ['Composting for garden use', 'Worm farming', 'Natural fertilizer production', 'Soil amendment', 'Community composting'],
      cautions: ['Follow local composting guidelines', 'No diseased plant material', 'Balance green and brown materials', 'Keep proper moisture levels'],
      moreInfo: 'Organic waste includes food scraps, yard waste, and other biodegradable materials.',
      environmentalImpact: 'Proper composting reduces waste volume by 50% and prevents methane emissions from anaerobic decomposition.',
      disposalIcon: '🌱'
    },
    // Glass
    'glass': {
      category: 'Glass',
      binType: 'Glass Collection (Green) or Recycling Bin',
      reuseIdeas: ['Storage jars for pantry', 'Vases for flowers', 'Drinking glasses', 'Craft projects', 'Candle holders'],
      cautions: ['Remove all lids and caps', 'No broken glass in regular recycling', 'Sort by color if required locally', 'Clean of all residue'],
      moreInfo: 'Glass can be recycled infinitely without losing quality or purity. It melts at lower temperatures when recycled.',
      environmentalImpact: 'Using recycled glass saves 30% of energy needed to make new glass and reduces CO2 emissions by 20%.',
      disposalIcon: '🟢'
    },
    // Metals
    'metal': {
      category: 'Metals',
      binType: 'Recycling Bin (Blue) or Scrap Metal',
      reuseIdeas: ['Scrap metal dealer sale', 'Art and sculpture projects', 'Repair material for other items', 'Donation to makerspaces', 'Craft supplies'],
      cautions: ['Remove any non-metal attachments', 'Check for hazardous coatings', 'Separate different metal types', 'Clean of any substances'],
      moreInfo: 'Metals are highly valuable recyclables that can be recycled indefinitely without quality loss.',
      environmentalImpact: 'Recycling metals saves 75% of energy compared to mining new metals and significantly reduces environmental impact.',
      disposalIcon: '⚙️'
    },
    // Batteries
    'battery': {
      category: 'Hazardous',
      binType: 'Hazardous Waste Collection',
      reuseIdeas: ['Battery reconditioning (for some types)', 'Return to manufacturer programs', 'Electronics store take-back', 'Municipal collection events'],
      cautions: ['Never throw in regular trash', 'Tape terminals to prevent fires', 'Store in cool, dry place', 'Don\'t mix different battery types'],
      moreInfo: 'Batteries contain heavy metals and acids that are toxic to the environment and require special handling.',
      environmentalImpact: 'Proper battery recycling prevents soil and water contamination from toxic materials like lead and mercury.',
      disposalIcon: '🔋'
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
