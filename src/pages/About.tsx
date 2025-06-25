
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Recycle, Heart, Globe, Users, Leaf, Target, BookOpen, Lightbulb } from 'lucide-react';

const About = () => {
  const motivations = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Save Our Planet",
      description: "Every year, 2.01 billion tons of municipal solid waste are generated worldwide. By 2050, this could increase by 70%. We're running out of time to act.",
      action: "Proper waste management can reduce greenhouse gas emissions by 20%"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Protect Future Generations",
      description: "The choices we make today determine the world our children will inherit. Clean air, water, and soil are their birthright.",
      action: "Each person can divert 1.2 tons of waste from landfills annually"
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Preserve Ecosystems",
      description: "Improper waste disposal destroys habitats, contaminates water sources, and threatens wildlife across the globe.",
      action: "Recycling one aluminum can saves enough energy to power a TV for 3 hours"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Build Communities",
      description: "Waste management brings people together, creating cleaner neighborhoods and stronger community bonds.",
      action: "Community recycling programs increase participation rates by 300%"
    }
  ];

  const whyReduce = [
    {
      problem: "Climate Change",
      explanation: "Waste management contributes 5% of global greenhouse gas emissions. Landfills produce methane, which is 25x more potent than CO2.",
      solution: "Reducing waste at source is 50x more effective than recycling for emission reduction."
    },
    {
      problem: "Resource Scarcity",
      explanation: "We consume 1.7 Earth's worth of resources annually. Linear consumption models deplete finite materials rapidly.",
      solution: "Circular economy principles can reduce resource consumption by 80% while maintaining quality of life."
    },
    {
      problem: "Ecosystem Destruction",
      explanation: "Waste pollution kills 1 million marine animals annually and microplastics are found in 90% of seabirds.",
      solution: "Waste reduction prevents pollution at source, protecting biodiversity and ecosystem health."
    },
    {
      problem: "Human Health",
      explanation: "Poor waste management spreads diseases, contaminates food and water supplies, and creates toxic environments.",
      solution: "Proper waste handling reduces disease transmission by 65% and improves air quality significantly."
    }
  ];

  const ourMission = [
    {
      icon: <Target className="w-6 h-6 text-eco-600" />,
      title: "Education First",
      description: "We believe knowledge is power. Our platform educates users about proper waste disposal, helping them make informed decisions."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-eco-600" />,
      title: "Comprehensive Database",
      description: "From electronics to organic waste, we provide detailed disposal guidance for thousands of items with local variations."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-eco-600" />,
      title: "Innovation & Technology",
      description: "We leverage AI and technology to make waste management accessible, accurate, and actionable for everyone."
    },
    {
      icon: <Recycle className="w-6 h-6 text-eco-600" />,
      title: "Circular Economy",
      description: "We promote the 3 R's hierarchy: Reduce, Reuse, Recycle - prioritizing waste prevention over disposal."
    }
  ];

  return (
    <div className="min-h-screen bg-eco-light">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Hero Section */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About <span className="text-eco-600">EcoWise</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Empowering individuals and communities to make responsible waste disposal decisions for a sustainable future
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Badge className="bg-eco-100 text-eco-800 px-4 py-2">
                🌍 Global Impact
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                🤖 AI-Powered
              </Badge>
              <Badge className="bg-green-100 text-green-800 px-4 py-2">
                ♻️ Eco-Friendly
              </Badge>
            </div>
          </div>

          {/* Our Mission */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Mission
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {ourMission.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-eco-100 p-3 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Why Save Our Ecosystem */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why We Must Save Our Ecosystem
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {motivations.map((motivation, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {motivation.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{motivation.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{motivation.description}</p>
                  <div className="bg-eco-light p-3 rounded-lg">
                    <p className="text-eco-800 text-xs font-medium">💡 {motivation.action}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Why Reduce Waste */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why We Must Reduce Waste
            </h2>
            <div className="space-y-6">
              {whyReduce.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.problem}</h3>
                      <Badge variant="destructive" className="mb-3">Critical Issue</Badge>
                      <p className="text-gray-700 text-sm">{item.explanation}</p>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl">→</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-800 mb-2">Solution</h4>
                      <Badge className="bg-green-100 text-green-800 mb-3">Actionable</Badge>
                      <p className="text-gray-700 text-sm">{item.solution}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Impact Statistics */}
          <section>
            <Card className="p-8 bg-eco-gradient text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Together We Can Make a Difference
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <h3 className="text-4xl font-bold mb-2">2.01B</h3>
                  <p className="opacity-90">Tons of waste generated annually</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-2">70%</h3>
                  <p className="opacity-90">Projected waste increase by 2050</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-2">20%</h3>
                  <p className="opacity-90">Emission reduction possible</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-2">1.2T</h3>
                  <p className="opacity-90">Tons each person can divert</p>
                </div>
              </div>
            </Card>
          </section>

          {/* How EcoWise Helps */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How EcoWise Helps Save the Ecosystem
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Education</h3>
                <p className="text-gray-700">
                  We provide comprehensive information about waste disposal, helping users understand the environmental impact of their choices.
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Action</h3>
                <p className="text-gray-700">
                  Our AI-powered search helps users find the most environmentally responsible way to dispose of any item.
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
                <p className="text-gray-700">
                  We build awareness and inspire collective action, creating a community of environmentally conscious citizens.
                </p>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <Card className="p-8 bg-white border-eco-200 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Join Us in Protecting Our Planet
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Every small action contributes to a larger change. Start your eco-friendly journey today and help us build a sustainable future for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/finder"
                className="bg-eco-gradient text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Start Disposing Responsibly
              </a>
              <a 
                href="/education"
                className="border-2 border-eco-500 text-eco-600 px-8 py-3 rounded-full font-semibold hover:bg-eco-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
