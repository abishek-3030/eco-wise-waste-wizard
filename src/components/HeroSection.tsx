
import { Link } from 'react-router-dom';
import { ArrowRight, Recycle, Info, AlertTriangle, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  const features = [
    {
      icon: <Recycle className="w-6 h-6 text-eco-600" />,
      title: "Smart Bin Detection",
      description: "Know exactly which bin your waste belongs in"
    },
    {
      icon: <Info className="w-6 h-6 text-blue-600" />,
      title: "Reuse Ideas",
      description: "Creative ways to give your items a second life"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-amber-600" />,
      title: "Safety Cautions",
      description: "Important warnings for safe disposal"
    },
    {
      icon: <Trash className="w-6 h-6 text-gray-600" />,
      title: "Environmental Impact",
      description: "Learn how your choices affect the planet"
    }
  ];

  return (
    <div className="relative min-h-screen bg-eco-light overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-eco-200 rounded-full opacity-50 animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-eco-300 rounded-full opacity-50 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-eco-400 rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-eco-200 rounded-full opacity-50 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-eco-gradient rounded-full mb-6 animate-pulse-green">
                <Recycle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
                <span className="bg-eco-gradient bg-clip-text text-transparent">
                  EcoWise
                </span>{' '}
                Waste Wizard
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Your intelligent companion for responsible waste disposal. 
                Get instant guidance on how to properly dispose, reuse, and recycle any item.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/finder">
                <Button className="bg-eco-gradient hover:opacity-90 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Finding Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-eco-500 text-eco-700 hover:bg-eco-50 px-8 py-3 text-lg rounded-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-white border-eco-200 animate-fade-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-50 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-eco-200 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-eco-600 mb-2">1B+</div>
                <div className="text-gray-700">Tons of waste generated annually</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-eco-600 mb-2">75%</div>
                <div className="text-gray-700">Of waste could be recycled or reused</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-eco-600 mb-2">50%</div>
                <div className="text-gray-700">Energy saved through proper recycling</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
