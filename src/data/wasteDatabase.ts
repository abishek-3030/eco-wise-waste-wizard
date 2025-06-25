export interface WasteItem {
  id: string;
  name: string;
  category: string;
  binType: string;
  reuseIdeas: string[];
  cautions: string[];
  moreInfo: string;
  environmentalImpact: string;
  keywords: string[];
  disposalIcon?: string;
}

export const wasteDatabase: WasteItem[] = [
  {
    id: "plastic-bottle",
    name: "Plastic Bottle",
    category: "Plastics",
    binType: "Recycling Bin (Blue)",
    reuseIdeas: [
      "Create planters for small plants and herbs",
      "Make bird feeders for your garden",
      "Storage containers for small items and screws",
      "DIY sprinkler system for garden watering",
      "Piggy bank for kids' savings",
      "Scoops for pet food or garden materials"
    ],
    cautions: [
      "Remove caps and labels before recycling",
      "Rinse thoroughly to remove all residue",
      "Check recycling number - not all plastics accepted",
      "Don't crush vertically (can jam sorting machines)",
      "Remove any metal components"
    ],
    moreInfo: "Plastic bottles are made from PET (Polyethylene Terephthalate) and can be recycled into new bottles, clothing, and carpets. The recycling process involves cleaning, shredding, and melting the plastic.",
    environmentalImpact: "Takes 450-1000 years to decompose naturally. Recycling one bottle saves enough energy to power a 60W light bulb for 3 hours and reduces CO2 emissions by 50%.",
    keywords: ["bottle", "plastic", "water", "soda", "beverage", "container", "pet", "drink"],
    disposalIcon: "♻️"
  },
  {
    id: "aluminum-can",
    name: "Aluminum Can",
    category: "Metals",
    binType: "Recycling Bin (Blue)",
    reuseIdeas: [
      "Pencil holders and desk organizers",
      "Mini planters for herbs and succulents",
      "DIY lanterns with LED tea lights",
      "Phone speakers/amplifiers (natural acoustics)",
      "Craft projects and holiday decorations",
      "Paint brush holders for artists"
    ],
    cautions: [
      "Rinse to remove all food residue and sticky substances",
      "Remove any plastic lids, straws, or tabs",
      "Crush lightly to save space (but not too flat)",
      "Check for sharp edges after opening",
      "Don't mix with steel cans if sorting required"
    ],
    moreInfo: "Aluminum cans are 100% recyclable and can be recycled indefinitely without losing quality. They can be back on store shelves as new cans within 60 days.",
    environmentalImpact: "Recycling aluminum saves 95% of the energy needed to make new aluminum from ore. One recycled can saves enough energy to run a TV for 3 hours.",
    keywords: ["can", "aluminum", "soda", "beer", "beverage", "metal", "drink", "cola"],
    disposalIcon: "♻️"
  },
  {
    id: "glass-jar",
    name: "Glass Jar",
    category: "Glass",
    binType: "Glass Collection (Green) or Recycling Bin",
    reuseIdeas: [
      "Food storage containers for pantry items",
      "Homemade candles with wicks",
      "Spice jars with custom labels",
      "Bathroom organizers for cotton balls",
      "Drinking glasses for casual use",
      "Mini terrariums for small plants",
      "Craft supplies storage",
      "Homemade jam and preserve containers"
    ],
    cautions: [
      "Remove all metal lids and plastic labels completely",
      "Rinse thoroughly and let dry",
      "Separate by color if required locally",
      "Don't include broken glass in regular recycling",
      "Check for cracks before reusing"
    ],
    moreInfo: "Glass is 100% recyclable and can be recycled endlessly without loss in quality or purity. Recycled glass melts at lower temperatures than raw materials.",
    environmentalImpact: "Glass takes over 1 million years to decompose naturally. Using recycled glass in manufacturing reduces energy consumption by 30% and cuts CO2 emissions by 20%.",
    keywords: ["jar", "glass", "container", "mason", "pickle", "jam", "sauce", "honey"],
    disposalIcon: "🟢"
  },
  {
    id: "banana-peel",
    name: "Banana Peel",
    category: "Organic",
    binType: "Compost Bin (Green)",
    reuseIdeas: [
      "Natural fertilizer for plants",
      "Polish leather shoes",
      "Natural teeth whitener",
      "Compost accelerator",
      "Face mask for skincare"
    ],
    cautions: [
      "Avoid putting on walkways - slipping hazard",
      "Compost properly to avoid attracting pests",
      "Don't use treated bananas for skin applications"
    ],
    moreInfo: "Banana peels are rich in potassium, phosphorus, and calcium - excellent for plant growth.",
    environmentalImpact: "Decomposes in 3-5 weeks naturally. Composting helps reduce methane emissions from landfills.",
    keywords: ["banana", "peel", "fruit", "organic", "compost", "food waste"]
  },
  {
    id: "old-phone",
    name: "Old Mobile Phone",
    category: "Electronics",
    binType: "E-Waste Collection Point",
    reuseIdeas: [
      "Dedicated music player",
      "Security camera with apps",
      "Digital photo frame",
      "Backup device",
      "Donate to charity"
    ],
    cautions: [
      "Remove personal data completely",
      "Remove SIM card and memory cards",
      "Don't throw in regular trash",
      "Handle battery carefully"
    ],
    moreInfo: "Contains valuable metals like gold, silver, and rare earth elements that can be recovered.",
    environmentalImpact: "E-waste is the fastest-growing waste stream. Proper recycling recovers precious metals and prevents toxic materials from polluting the environment.",
    keywords: ["phone", "mobile", "smartphone", "electronic", "device", "cell"]
  },
  {
    id: "battery",
    name: "Battery",
    category: "Hazardous",
    binType: "Hazardous Waste Facility",
    reuseIdeas: [
      "Test if still functional for low-power devices",
      "Use in remote controls temporarily",
      "Save for battery collection drives"
    ],
    cautions: [
      "Never throw in regular trash",
      "Don't incinerate or puncture",
      "Keep away from children",
      "Store in cool, dry place until disposal",
      "Tape terminals to prevent short circuits"
    ],
    moreInfo: "Contains heavy metals and chemicals that require special handling and processing.",
    environmentalImpact: "Improper disposal can contaminate soil and water. One battery can pollute 20,000 liters of water.",
    keywords: ["battery", "aa", "aaa", "lithium", "alkaline", "rechargeable"]
  },
  {
    id: "coffee-grounds",
    name: "Coffee Grounds",
    category: "Organic",
    binType: "Compost Bin (Green)",
    reuseIdeas: [
      "Garden fertilizer and soil amendment",
      "Natural pest deterrent",
      "Body scrub for exfoliation",
      "Deodorizer for fridges",
      "Grow mushrooms",
      "Natural dye for crafts"
    ],
    cautions: [
      "Use in moderation in garden (too much can be acidic)",
      "Mix with other compost materials",
      "Let cool completely before handling"
    ],
    moreInfo: "Rich in nitrogen, making them excellent 'green' compost material. Also contains antioxidants.",
    environmentalImpact: "Composting coffee grounds reduces landfill waste and creates nutrient-rich soil. Coffee production has high environmental impact, so reusing grounds is beneficial.",
    keywords: ["coffee", "grounds", "beans", "organic", "compost", "caffeine"]
  },
  {
    id: "cardboard-box",
    name: "Cardboard Box",
    category: "Paper",
    binType: "Recycling Bin (Blue)",
    reuseIdeas: [
      "Storage organizers",
      "Kids' playhouses and forts",
      "Drawer dividers",
      "Moving and shipping boxes",
      "Craft projects",
      "Cat toys and scratchers"
    ],
    cautions: [
      "Remove all tape, staples, and labels",
      "Flatten to save space",
      "Keep dry - wet cardboard can't be recycled",
      "Remove any plastic or foam padding"
    ],
    moreInfo: "Cardboard can be recycled 5-7 times before fibers become too short for reuse.",
    environmentalImpact: "Recycling cardboard saves 24% of energy compared to making new cardboard from trees.",
    keywords: ["cardboard", "box", "packaging", "shipping", "amazon", "paper"]
  },
  {
    id: "food-waste",
    name: "Food Scraps",
    category: "Organic",
    binType: "Compost Bin (Green)",
    reuseIdeas: [
      "Home composting for garden fertilizer",
      "Worm bin food for vermiculture",
      "Community composting programs",
      "Bokashi fermentation method",
      "Feed to backyard chickens (if permitted)",
      "Make vegetable stock from scraps"
    ],
    cautions: [
      "No meat, dairy, or oily foods in home compost",
      "Keep separate from recyclables to avoid contamination",
      "Use compostable bags or no bags",
      "Don't compost diseased plants",
      "Cover compost to avoid attracting pests"
    ],
    moreInfo: "Food waste makes up about 30% of household garbage but can be composted into valuable soil amendment. Includes fruit peels, vegetable scraps, and plant-based leftovers.",
    environmentalImpact: "Composting food waste reduces methane emissions from landfills by 90%. Food waste in landfills produces 25% of methane emissions.",
    keywords: ["food", "scraps", "organic", "compost", "vegetables", "fruit", "leftovers", "kitchen waste"],
    disposalIcon: "🌱"
  },
  {
    id: "electronic-device",
    name: "Electronic Device",
    category: "Electronics", 
    binType: "E-Waste Collection Point",
    reuseIdeas: [
      "Donate to schools or charities if functional",
      "Trade-in programs at electronics stores",
      "Sell to refurbishment companies",
      "Use for spare parts",
      "Convert to dedicated-purpose device",
      "Manufacturer take-back programs"
    ],
    cautions: [
      "Completely wipe all personal data",
      "Remove batteries if possible",
      "Never throw in regular trash or recycling",
      "Check for precious metal recovery programs",
      "Keep intact - don't disassemble yourself"
    ],
    moreInfo: "Electronics contain both valuable materials (gold, silver, copper) and toxic substances (lead, mercury) requiring specialized processing.",
    environmentalImpact: "E-waste is the world's fastest-growing waste stream. Proper recycling recovers valuable materials and prevents environmental contamination.",
    keywords: ["electronics", "device", "computer", "tablet", "gadget", "appliance", "tech"],
    disposalIcon: "🔌"
  }
];

export const searchWasteItem = (query: string): WasteItem[] => {
  if (!query.trim()) return [];
  
  const lowercaseQuery = query.toLowerCase();
  
  const results = wasteDatabase.filter(item => 
    item.name.toLowerCase().includes(lowercaseQuery) ||
    item.keywords.some(keyword => keyword.includes(lowercaseQuery)) ||
    item.category.toLowerCase().includes(lowercaseQuery)
  );

  // Sort by relevance (exact matches first, then partial matches)
  return results.sort((a, b) => {
    const aExactMatch = a.name.toLowerCase() === lowercaseQuery;
    const bExactMatch = b.name.toLowerCase() === lowercaseQuery;
    
    if (aExactMatch && !bExactMatch) return -1;
    if (!aExactMatch && bExactMatch) return 1;
    
    const aStartsWith = a.name.toLowerCase().startsWith(lowercaseQuery);
    const bStartsWith = b.name.toLowerCase().startsWith(lowercaseQuery);
    
    if (aStartsWith && !bStartsWith) return -1;
    if (!aStartsWith && bStartsWith) return 1;
    
    return 0;
  });
};

export const getRandomWasteItem = (): WasteItem => {
  return wasteDatabase[Math.floor(Math.random() * wasteDatabase.length)];
};
