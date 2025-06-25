
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Recycle, Trash2, Leaf, ArrowRight, CheckCircle } from 'lucide-react';

const WasteEducation = () => {
  const binTypes = [
    {
      name: "General Waste",
      color: "bg-gray-600",
      icon: <Trash2 className="w-6 h-6 text-white" />,
      description: "Non-recyclable items that go to landfill",
      examples: ["Dirty diapers", "Broken ceramics", "Food-contaminated packaging"],
      tips: "Try to minimize this bin by choosing reusable alternatives"
    },
    {
      name: "Recycling",
      color: "bg-blue-600",
      icon: <Recycle className="w-6 h-6 text-white" />,
      description: "Clean materials that can be processed into new products",
      examples: ["Plastic bottles", "Glass jars", "Aluminum cans", "Clean paper"],
      tips: "Clean containers before recycling to prevent contamination"
    },
    {
      name: "Organic/Compost",
      color: "bg-green-600",
      icon: <Leaf className="w-6 h-6 text-white" />,
      description: "Biodegradable materials for composting",
      examples: ["Fruit peels", "Vegetable scraps", "Coffee grounds", "Garden waste"],
      tips: "Avoid meat and dairy in home composting systems"
    },
    {
      name: "Hazardous Waste",
      color: "bg-red-600",
      icon: <AlertTriangle className="w-6 h-6 text-white" />,
      description: "Toxic materials requiring special handling",
      examples: ["Batteries", "Paint", "Chemicals", "Electronic waste"],
      tips: "Take to designated collection points - never put in regular bins"
    }
  ];

  const wasteProblems = [
    {
      title: "Landfill Overflow",
      impact: "Critical",
      description: "Landfills are reaching capacity, creating environmental hazards and methane emissions.",
      consequences: ["Groundwater contamination", "Greenhouse gas emissions", "Loss of usable land"]
    },
    {
      title: "Ocean Pollution",
      impact: "Severe",
      description: "8 million tons of plastic waste enter oceans annually, harming marine life.",
      consequences: ["Marine animal deaths", "Food chain contamination", "Ecosystem disruption"]
    },
    {
      title: "Resource Depletion",
      impact: "High",
      description: "Linear 'take-make-dispose' model depletes natural resources rapidly.",
      consequences: ["Raw material scarcity", "Increased extraction costs", "Habitat destruction"]
    }
  ];

  const threeRs = [
    {
      title: "Reduce",
      priority: "1st Priority",
      color: "bg-red-100 text-red-800",
      description: "Minimize consumption and waste generation",
      actions: [
        "Buy only what you need",
        "Choose products with minimal packaging",
        "Opt for digital receipts and bills",
        "Use reusable bags and containers"
      ]
    },
    {
      title: "Reuse",
      priority: "2nd Priority",
      color: "bg-amber-100 text-amber-800",
      description: "Find new purposes for items before disposal",
      actions: [
        "Repurpose glass jars for storage",
        "Donate clothes and electronics",
        "Use newspapers for gift wrapping",
        "Transform cardboard into craft materials"
      ]
    },
    {
      title: "Recycle",
      priority: "3rd Priority",
      color: "bg-green-100 text-green-800",
      description: "Process materials into new products",
      actions: [
        "Sort waste into correct bins",
        "Clean containers before recycling",
        "Learn local recycling guidelines",
        "Participate in special collection programs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-eco-light">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Waste <span className="text-eco-600">Education</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding waste problems, proper bin separation, and the importance of the 3 R's for a sustainable future
            </p>
          </div>

          {/* Waste Problems Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              The Global Waste Crisis
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {wasteProblems.map((problem, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                    <h3 className="text-xl font-bold text-gray-900">{problem.title}</h3>
                    <Badge variant="destructive" className="ml-auto">
                      {problem.impact}
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-4">{problem.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Consequences:</h4>
                    <ul className="space-y-1">
                      {problem.consequences.map((consequence, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                          {consequence}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Bin Separation Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Proper Bin Separation
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Correct waste separation is the foundation of effective waste management. Each bin serves a specific purpose in the recycling and disposal process.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {binTypes.map((bin, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="text-center mb-4">
                    <div className={`w-16 h-16 ${bin.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                      {bin.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{bin.name}</h3>
                  </div>
                  <p className="text-gray-700 mb-4 text-center">{bin.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">Examples:</h4>
                    <ul className="space-y-1">
                      {bin.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-eco-light p-3 rounded-lg mt-4">
                      <p className="text-xs text-eco-800 font-medium">💡 Tip: {bin.tips}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* 3 R's Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              The 3 R's Hierarchy
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              The 3 R's represent a priority order for waste management. The higher up the hierarchy, the greater the environmental benefit.
            </p>
            <div className="space-y-6">
              {threeRs.map((r, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-eco-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{r.title}</h3>
                        <Badge className={r.color}>{r.priority}</Badge>
                      </div>
                      <p className="text-lg text-gray-700 mb-6">{r.description}</p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {r.actions.map((action, idx) => (
                          <div key={idx} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                            <ArrowRight className="w-4 h-4 text-eco-600 flex-shrink-0" />
                            <span className="text-gray-700">{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <Card className="p-8 bg-eco-gradient text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Start Making a Difference Today</h2>
            <p className="text-lg mb-6 opacity-90">
              Every proper disposal choice counts. Use our waste finder to learn the correct way to dispose of any item.
            </p>
            <a 
              href="/finder"
              className="inline-block bg-white text-eco-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Find Disposal Solutions
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WasteEducation;
