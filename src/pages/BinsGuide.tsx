
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Recycle, Trash, Leaf, AlertTriangle, Package, Droplets } from 'lucide-react';

const BinsGuide = () => {
  const binTypes = [
    {
      id: 'recycling',
      name: 'Recycling Bin',
      color: 'Blue',
      icon: <Recycle className="w-8 h-8 text-blue-600" />,
      bgColor: 'bg-blue-100 border-blue-200',
      textColor: 'text-blue-800',
      description: 'For clean recyclable materials that can be processed into new products',
      accepts: [
        'Clean plastic bottles and containers',
        'Paper and cardboard',
        'Glass bottles and jars',
        'Aluminum and steel cans',
        'Clean food containers'
      ],
      rejects: [
        'Dirty or food-contaminated items',
        'Plastic bags',
        'Broken glass',
        'Electronics',
        'Hazardous materials'
      ],
      tips: [
        'Rinse containers to remove food residue',
        'Remove caps and lids if required locally',
        'Check recycling numbers on plastics',
        'Flatten cardboard to save space'
      ]
    },
    {
      id: 'compost',
      name: 'Compost Bin',
      color: 'Green',
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      bgColor: 'bg-green-100 border-green-200',
      textColor: 'text-green-800',
      description: 'For organic waste that can decompose naturally and enrich soil',
      accepts: [
        'Fruit and vegetable scraps',
        'Coffee grounds and tea bags',
        'Eggshells',
        'Yard waste and leaves',
        'Paper towels (unbleached)'
      ],
      rejects: [
        'Meat and dairy products',
        'Oils and fats',
        'Pet waste',
        'Diseased plants',
        'Coated paper products'
      ],
      tips: [
        'Layer greens and browns for best composting',
        'Keep compost moist but not soggy',
        'Turn regularly for faster decomposition',
        'Chop large items into smaller pieces'
      ]
    },
    {
      id: 'general',
      name: 'General Waste Bin',
      color: 'Black/Gray',
      icon: <Trash className="w-8 h-8 text-gray-600" />,
      bgColor: 'bg-gray-100 border-gray-200',
      textColor: 'text-gray-800',
      description: 'For non-recyclable, non-compostable waste that goes to landfill',
      accepts: [
        'Food-contaminated packaging',
        'Broken ceramics and mirrors',
        'Disposable diapers',
        'Cigarette butts',
        'Mixed material items'
      ],
      rejects: [
        'Recyclable materials',
        'Hazardous waste',
        'Electronics',
        'Large items (furniture)',
        'Construction debris'
      ],
      tips: [
        'This should be your last resort',
        'Try to reduce general waste through reuse',
        'Consider if items can be repaired',
        'Look for specialized disposal options first'
      ]
    },
    {
      id: 'hazardous',
      name: 'Hazardous Waste',
      color: 'Red/Orange',
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      bgColor: 'bg-red-100 border-red-200',
      textColor: 'text-red-800',
      description: 'For toxic, flammable, or dangerous materials requiring special handling',
      accepts: [
        'Batteries and electronics',
        'Paint and chemicals',
        'Motor oil and fluids',
        'Fluorescent bulbs',
        'Pesticides and herbicides'
      ],
      rejects: [
        'Regular household items',
        'Food waste',
        'Clean recyclables',
        'General trash items',
        'Organic materials'
      ],
      tips: [
        'Never mix different hazardous materials',
        'Keep in original containers when possible',
        'Store safely until disposal day',
        'Contact local authorities for collection'
      ]
    },
    {
      id: 'ewaste',
      name: 'E-Waste Collection',
      color: 'Purple',
      icon: <Package className="w-8 h-8 text-purple-600" />,
      bgColor: 'bg-purple-100 border-purple-200',
      textColor: 'text-purple-800',
      description: 'For electronic devices containing valuable and toxic materials',
      accepts: [
        'Computers and laptops',
        'Phones and tablets',
        'TVs and monitors',
        'Small appliances',
        'Cables and accessories'
      ],
      rejects: [
        'Large appliances (separate collection)',
        'Light bulbs (hazardous waste)',
        'Batteries (separate collection)',
        'Non-electronic items',
        'Broken glass screens'
      ],
      tips: [
        'Remove personal data before disposal',
        'Remove batteries when possible',
        'Check for manufacturer take-back programs',
        'Consider donation if still functional'
      ]
    },
    {
      id: 'glass',
      name: 'Glass Collection',
      color: 'Clear/Green',
      icon: <Droplets className="w-8 h-8 text-teal-600" />,
      bgColor: 'bg-teal-100 border-teal-200',
      textColor: 'text-teal-800',
      description: 'For glass containers that can be recycled infinitely',
      accepts: [
        'Glass bottles and jars',
        'Clear, brown, and green glass',
        'Wine and beer bottles',
        'Food containers',
        'Clean glass packaging'
      ],
      rejects: [
        'Window glass and mirrors',
        'Light bulbs',
        'Ceramic and pottery',
        'Crystal glassware',
        'Pyrex and heat-resistant glass'
      ],
      tips: [
        'Remove metal lids and caps',
        'Sort by color if required',
        'No need to remove labels',
        'Rinse to remove food residue'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-eco-light">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Complete <span className="text-eco-600">Bins Guide</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Understanding the right bin for every type of waste is crucial for environmental protection. 
              Learn about different waste bins and make responsible disposal decisions.
            </p>
            <div className="bg-eco-gradient text-white p-4 rounded-lg inline-block">
              <p className="font-semibold">Remember: When in doubt, check local guidelines!</p>
            </div>
          </div>

          {/* Bins Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {binTypes.map((bin) => (
              <Card key={bin.id} className={`p-6 ${bin.bgColor} hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    {bin.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold ${bin.textColor} mb-2`}>
                      {bin.name}
                    </h3>
                    <p className={`text-sm font-medium ${bin.textColor} opacity-80 mb-2`}>
                      Color: {bin.color}
                    </p>
                    <p className="text-gray-700 mb-4">
                      {bin.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {/* Accepts */}
                  <div>
                    <h4 className={`font-semibold ${bin.textColor} mb-2 flex items-center gap-2`}>
                      ✅ Accepts
                    </h4>
                    <ul className="space-y-1">
                      {bin.accepts.map((item, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Rejects */}
                  <div>
                    <h4 className={`font-semibold ${bin.textColor} mb-2 flex items-center gap-2`}>
                      ❌ Does NOT Accept
                    </h4>
                    <ul className="space-y-1">
                      {bin.rejects.map((item, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="w-1 h-1 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-white p-3 rounded border-l-4 border-eco-500">
                  <h5 className="font-semibold text-eco-800 mb-2">💡 Pro Tips</h5>
                  <ul className="space-y-1">
                    {bin.tips.map((tip, index) => (
                      <li key={index} className="text-sm text-gray-700">
                        • {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white border-eco-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Regional Differences</h3>
              <p className="text-gray-700 mb-3">
                Waste sorting rules vary by location. Always check your local council guidelines.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Some areas have additional bins</li>
                <li>• Color coding may differ</li>
                <li>• Collection schedules vary</li>
                <li>• Special items may need booking</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white border-eco-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contamination Issues</h3>
              <p className="text-gray-700 mb-3">
                Contaminated recycling can ruin entire batches and harm the environment.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Food residue spoils recycling</li>
                <li>• Wrong items jam machinery</li>
                <li>• Costs increase for everyone</li>
                <li>• Materials end up in landfill</li>
              </ul>
            </Card>

            <Card className="p-6 bg-white border-eco-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best Practices</h3>
              <p className="text-gray-700 mb-3">
                Follow these simple rules to maximize your positive environmental impact.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Clean before recycling</li>
                <li>• Reduce first, then reuse</li>
                <li>• Sort correctly every time</li>
                <li>• Stay informed about changes</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BinsGuide;
