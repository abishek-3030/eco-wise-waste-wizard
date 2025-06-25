
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
}

export const wasteDatabase: WasteItem[] = [
  {
    id: "plastic-bottle",
    name: "Plastic Bottle",
    category: "Plastics",
    binType: "Recycling Bin",
    reuseIdeas: [
      "Create planters for small plants",
      "Make bird feeders",
      "Storage containers for small items",
      "DIY sprinkler for garden",
      "Piggy bank for kids"
    ],
    cautions: [
      "Remove caps and labels before recycling",
      "Rinse thoroughly to remove residue",
      "Check recycling number - not all plastics accepted"
    ],
    moreInfo: "Plastic bottles are made from PET (Polyethylene Terephthalate) and can be recycled into new bottles, clothing, and carpets.",
    environmentalImpact: "Takes 450-1000 years to decompose. Recycling one bottle saves enough energy to power a 60W light bulb for 3 hours.",
    keywords: ["bottle", "plastic", "water", "soda", "beverage", "container"]
  },
  {
    id: "aluminum-can",
    name: "Aluminum Can",
    category: "Metals",
    binType: "Recycling Bin",
    reuseIdeas: [
      "Pencil holders and organizers",
      "Mini planters for herbs",
      "Lanterns with LED lights",
      "Phone amplifiers",
      "Craft projects and decorations"
    ],
    cautions: [
      "Rinse to remove food residue",
      "Remove any plastic lids or straws",
      "Crush lightly to save space"
    ],
    moreInfo: "Aluminum cans are 100% recyclable and can be recycled indefinitely without losing quality.",
    environmentalImpact: "Recycling aluminum saves 95% of the energy needed to make new aluminum. One recycled can saves enough energy to run a TV for 3 hours.",
    keywords: ["can", "aluminum", "soda", "beer", "beverage", "metal"]
  },
  {
    id: "glass-jar",
    name: "Glass Jar",
    category: "Glass",
    binType: "Recycling Bin",
    reuseIdeas: [
      "Food storage containers",
      "Candle holders",
      "Spice jars",
      "Bathroom organizers",
      "Drinking glasses",
      "Terrariums for small plants"
    ],
    cautions: [
      "Remove metal lids and plastic labels",
      "Rinse thoroughly",
      "Separate by color if required locally"
    ],
    moreInfo: "Glass is 100% recyclable and can be recycled endlessly without loss in quality or purity.",
    environmentalImpact: "Glass takes over 1 million years to decompose. Recycled glass melts at lower temperatures, saving energy.",
    keywords: ["jar", "glass", "container", "mason", "pickle", "jam"]
  },
  {
    id: "banana-peel",
    name: "Banana Peel",
    category: "Organic",
    binType: "Compost Bin",
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
    binType: "Compost Bin",
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
    binType: "Recycling Bin",
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
  }
];

export const searchWasteItem = (query: string): WasteItem[] => {
  if (!query.trim()) return [];
  
  const lowercaseQuery = query.toLowerCase();
  
  return wasteDatabase.filter(item => 
    item.name.toLowerCase().includes(lowercaseQuery) ||
    item.keywords.some(keyword => keyword.includes(lowercaseQuery)) ||
    item.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const getRandomWasteItem = (): WasteItem => {
  return wasteDatabase[Math.floor(Math.random() * wasteDatabase.length)];
};
