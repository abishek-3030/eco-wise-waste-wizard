
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Recycle, Info, AlertTriangle, Trash } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Recycle className="w-8 h-8 text-eco-600" />,
      title: "Smart Categorization",
      description: "Our intelligent system categorizes waste items and provides specific disposal instructions for each type of material."
    },
    {
      icon: <Info className="w-8 h-8 text-blue-600" />,
      title: "Creative Reuse Ideas",
      description: "Before disposal, explore creative ways to give your items a second life with our extensive database of reuse suggestions."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-amber-600" />,
      title: "Safety First",
      description: "Get important safety warnings and cautions for handling potentially hazardous materials during disposal."
    },
    {
      icon: <Trash className="w-8 h-8 text-gray-600" />,
      title: "Environmental Impact",
      description: "Learn about the environmental consequences of improper disposal and how your choices affect the planet."
    }
  ];

  const mission = [
    {
      title: "Our Mission",
      content: "To empower individuals and communities with the knowledge and tools needed to make responsible waste disposal decisions that protect our environment and promote sustainability."
    },
    {
      title: "Our Vision",
      content: "A world where every piece of waste is handled responsibly, where reuse and recycling are the norm, and where environmental consciousness guides every disposal decision."
    },
    {
      title: "Our Impact",
      content: "By providing accessible, accurate information about waste disposal, we're helping reduce landfill waste, prevent environmental contamination, and promote a circular economy."
    }
  ];

  return (
    <div className="min-h-screen bg-eco-light">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-eco-gradient rounded-full mb-6">
              <Recycle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About <span className="text-eco-600">EcoWise</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to make responsible waste disposal accessible, educational, and impactful for everyone.
            </p>
          </div>

          {/* Mission, Vision, Impact */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {mission.map((item, index) => (
              <Card 
                key={index}
                className="p-6 text-center bg-white hover:shadow-lg transition-all duration-300 animate-fade-in border-eco-200"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </Card>
            ))}
          </div>

          {/* How It Works */}
          <Card className="p-8 mb-16 bg-white border-eco-200">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">How EcoWise Works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gray-50 rounded-full">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Problem Statement */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-red-50 border-red-200">
              <h3 className="text-2xl font-bold text-red-800 mb-4">The Problem</h3>
              <div className="space-y-4 text-red-700">
                <p>• 2.01 billion tons of municipal solid waste are generated annually worldwide</p>
                <p>• Only 13.5% of waste is recycled globally</p>
                <p>• Improper disposal contaminates soil, water, and air</p>
                <p>• Lack of knowledge leads to recyclable items in landfills</p>
                <p>• Hazardous materials pose risks to human health and environment</p>
              </div>
            </Card>

            <Card className="p-8 bg-eco-50 border-eco-200">
              <h3 className="text-2xl font-bold text-eco-800 mb-4">Our Solution</h3>
              <div className="space-y-4 text-eco-700">
                <p>• Instant access to proper disposal methods for any item</p>
                <p>• Creative reuse suggestions to extend item lifecycles</p>
                <p>• Safety warnings for hazardous material handling</p>
                <p>• Educational content about environmental impact</p>
                <p>• User-friendly interface accessible to everyone</p>
              </div>
            </Card>
          </div>

          {/* Why It Matters */}
          <Card className="p-8 bg-eco-gradient text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Why Proper Waste Disposal Matters</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold mb-2">75%</div>
                <div className="text-sm opacity-90">of waste could be recycled or reused</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50%</div>
                <div className="text-sm opacity-90">energy saved through recycling</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1000</div>
                <div className="text-sm opacity-90">years for plastic to decompose</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">8M</div>
                <div className="text-sm opacity-90">tons of plastic enter oceans yearly</div>
              </div>
            </div>
            <p className="mt-8 text-lg opacity-90">
              Every disposal decision you make has the power to impact our planet's future. 
              Together, we can create a more sustainable world.
            </p>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Eco Journey?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of users who are making a difference, one disposal decision at a time.
            </p>
            <a 
              href="/finder"
              className="inline-flex items-center bg-eco-gradient text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Start Using EcoWise
              <Recycle className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
