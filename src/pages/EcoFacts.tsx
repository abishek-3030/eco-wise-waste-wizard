
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Recycle, AlertTriangle, Info } from 'lucide-react';

const EcoFacts = () => {
  const facts = [
    {
      category: "Plastic Impact",
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      color: "bg-red-100 text-red-800",
      facts: [
        "A plastic bottle takes 450-1000 years to decompose in a landfill",
        "Every minute, 1 million plastic bottles are purchased worldwide",
        "Only 9% of all plastic ever produced has been recycled",
        "Microplastics have been found in 90% of table salt brands",
        "The Great Pacific Garbage Patch is twice the size of Texas"
      ]
    },
    {
      category: "Recycling Benefits",
      icon: <Recycle className="w-6 h-6 text-eco-500" />,
      color: "bg-eco-100 text-eco-800",
      facts: [
        "Recycling one aluminum can saves enough energy to run a TV for 3 hours",
        "Recycling steel saves 74% of the energy needed to make it from raw materials",
        "One recycled plastic bottle can be turned into 4 square feet of carpet",
        "Recycling paper uses 50% less energy than making it from trees",
        "Glass can be recycled infinitely without losing quality"
      ]
    },
    {
      category: "Food Waste",
      icon: <Info className="w-6 h-6 text-amber-500" />,
      color: "bg-amber-100 text-amber-800",
      facts: [
        "30-40% of food produced globally is wasted",
        "Food waste produces 8% of global greenhouse gas emissions",
        "Composting food waste can reduce methane emissions by 50%",
        "One-third of food produced for human consumption is lost or wasted",
        "Reducing food waste could feed 3 billion people"
      ]
    },
    {
      category: "E-Waste Crisis",
      icon: <AlertTriangle className="w-6 h-6 text-purple-500" />,
      color: "bg-purple-100 text-purple-800",
      facts: [
        "50 million tons of e-waste are generated globally each year",
        "E-waste is the fastest-growing waste stream in the world",
        "Only 20% of e-waste is formally recycled",
        "One smartphone contains over 60 elements from the periodic table",
        "Improper e-waste disposal releases toxic chemicals into soil and water"
      ]
    },
    {
      category: "Ocean Health",
      icon: <Info className="w-6 h-6 text-blue-500" />,
      color: "bg-blue-100 text-blue-800",
      facts: [
        "8 million tons of plastic enter our oceans every year",
        "By 2050, there could be more plastic than fish in the ocean by weight",
        "Marine animals mistake plastic for food, leading to starvation",
        "Microplastics are found in 90% of seabirds",
        "Ocean plastic pollution costs $139 billion annually to marine ecosystems"
      ]
    },
    {
      category: "Climate Impact",
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
      color: "bg-orange-100 text-orange-800",
      facts: [
        "Waste management accounts for 5% of global greenhouse gas emissions",
        "Landfills produce 16% of methane emissions globally",
        "Proper recycling can reduce CO2 emissions by 2 billion tons annually",
        "Organic waste in landfills produces 25x more methane than CO2",
        "Waste prevention is 50x more effective than recycling for reducing emissions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-eco-light">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Eco <span className="text-eco-600">Facts</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the environmental impact of waste and learn why proper disposal matters for our planet's future
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {facts.map((category, index) => (
              <Card 
                key={index}
                className="p-6 bg-white hover:shadow-lg transition-all duration-300 animate-fade-in border-eco-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gray-50 rounded-full">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                    <Badge className={category.color}>
                      {category.facts.length} Facts
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  {category.facts.map((fact, factIndex) => (
                    <div 
                      key={factIndex}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span className="w-6 h-6 bg-eco-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {factIndex + 1}
                      </span>
                      <p className="text-gray-700">{fact}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="mt-12 p-8 bg-eco-gradient text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-lg mb-6 opacity-90">
              Every small action counts. Start making better waste disposal choices today and help protect our planet for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/finder"
                className="bg-white text-eco-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Find Disposal Solutions
              </a>
              <a 
                href="/about"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-eco-600 transition-colors"
              >
                Learn About Our Mission
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EcoFacts;
