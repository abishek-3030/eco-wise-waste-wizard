
import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Trophy, ExternalLink } from 'lucide-react';

const WorldEvents = () => {
  const events = [
    {
      title: "World Environment Day",
      date: "June 5th (Annual)",
      location: "Global",
      organizer: "United Nations",
      type: "awareness",
      participants: "100+ countries",
      description: "The world's largest platform for environmental public outreach, focusing on different environmental themes each year including waste reduction.",
      impact: "Reached over 1 billion people in 2023",
      achievements: [
        "Promoted zero-waste lifestyle globally",
        "Launched #BeatPlasticPollution campaign",
        "Organized 50,000+ events worldwide"
      ],
      website: "https://www.worldenvironmentday.global"
    },
    {
      title: "International Day of Zero Waste",
      date: "March 30th (Annual)",
      location: "Global",
      organizer: "United Nations",
      type: "initiative",
      participants: "Global movement",
      description: "Promotes sustainable consumption and production patterns, advancing the 2030 Agenda for Sustainable Development.",
      impact: "Raised awareness about zero waste lifestyle",
      achievements: [
        "Promoted circular economy principles",
        "Highlighted waste prevention strategies",
        "Encouraged government policy changes"
      ],
      website: "https://www.un.org/en/observances/zero-waste-day"
    },
    {
      title: "The Ocean Cleanup",
      date: "2013 - Ongoing",
      location: "Pacific Ocean",
      organizer: "Boyan Slat Foundation",
      type: "cleanup",
      participants: "200+ team members",
      description: "Developing advanced technologies to rid the oceans of plastic pollution, targeting the Great Pacific Garbage Patch.",
      impact: "Removed 200,000+ kg of plastic from oceans",
      achievements: [
        "Developed System 002 'Jenny' cleanup system",
        "Collected over 100,000 kg in first year",
        "Created products from ocean plastic"
      ],
      website: "https://theoceancleanup.com"
    },
    {
      title: "European Week for Waste Reduction",
      date: "November (Annual)",
      location: "Europe",
      organizer: "European Commission",
      type: "education",
      participants: "30+ countries",
      description: "Promotes the implementation of creative waste reduction activities throughout Europe to raise awareness about sustainable resource and waste management.",
      impact: "12,000+ actions across Europe in 2023",
      achievements: [
        "Engaged 5 million+ Europeans",
        "Saved 15,000 tons of waste",
        "Promoted reuse and recycling initiatives"
      ],
      website: "https://ewwr.eu"
    },
    {
      title: "Earth Day Global Cleanups",
      date: "April 22nd (Annual)",
      location: "Worldwide",
      organizer: "Earth Day Network",
      type: "cleanup",
      participants: "1+ billion people",
      description: "The world's largest environmental movement, organizing cleanup events and promoting environmental awareness globally.",
      impact: "Collected millions of tons of waste",
      achievements: [
        "Organized 100,000+ cleanup events",
        "Removed plastic from 150+ countries",
        "Educated billions about environmental issues"
      ],
      website: "https://www.earthday.org"
    },
    {
      title: "Plastic Free July",
      date: "July (Annual)",
      location: "Global",
      organizer: "Plastic Free Foundation",
      type: "challenge",
      participants: "300+ million people",
      description: "A global movement helping millions of people reduce single-use plastic waste to protect our environment.",
      impact: "730 million single-use items avoided",
      achievements: [
        "Engaged participants in 190+ countries",
        "Prevented 900 million pieces of plastic waste",
        "Changed consumption habits globally"
      ],
      website: "https://www.plasticfreejuly.org"
    },
    {
      title: "Sweden's Waste-to-Energy Success",
      date: "1990s - Present",
      location: "Sweden",
      organizer: "Swedish Government",
      type: "policy",
      participants: "10.4 million citizens",
      description: "Sweden's revolutionary waste management system that converts 99% of household waste into energy or recycling.",
      impact: "Less than 1% waste goes to landfills",
      achievements: [
        "50% of waste converted to energy",
        "49% recycled or composted",
        "Imports waste from other countries"
      ],
      website: "https://sweden.se"
    },
    {
      title: "Break Free From Plastic Movement",
      date: "2016 - Ongoing",
      location: "Global",
      organizer: "BFFP Coalition",
      type: "advocacy",
      participants: "2,000+ organizations",
      description: "A global movement envisioning a future free from plastic pollution, demanding massive reductions in single-use plastics.",
      impact: "Policy changes in 50+ countries",
      achievements: [
        "Banned single-use plastics in multiple countries",
        "Held 2,000+ brand audits globally",
        "Influenced corporate plastic policies"
      ],
      website: "https://www.breakfreefromplastic.org"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'awareness': return 'bg-blue-100 text-blue-800';
      case 'cleanup': return 'bg-green-100 text-green-800';
      case 'initiative': return 'bg-purple-100 text-purple-800';
      case 'education': return 'bg-amber-100 text-amber-800';
      case 'challenge': return 'bg-orange-100 text-orange-800';
      case 'policy': return 'bg-red-100 text-red-800';
      case 'advocacy': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'cleanup': return '🧹';
      case 'awareness': return '📢';
      case 'initiative': return '🌱';
      case 'education': return '📚';
      case 'challenge': return '🏆';
      case 'policy': return '📋';
      case 'advocacy': return '✊';
      default: return '🌍';
    }
  };

  return (
    <div className="min-h-screen bg-eco-light">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              World <span className="text-eco-600">Events</span> Against Waste
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover global initiatives, movements, and success stories in the fight against waste pollution
            </p>
          </div>

          {/* Statistics Banner */}
          <Card className="p-6 mb-12 bg-eco-gradient text-white">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <h3 className="text-3xl font-bold mb-1">1B+</h3>
                <p className="opacity-90">People Engaged</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-1">190+</h3>
                <p className="opacity-90">Countries Participating</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-1">50+</h3>
                <p className="opacity-90">Policy Changes</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-1">200K+</h3>
                <p className="opacity-90">Tons Waste Removed</p>
              </div>
            </div>
          </Card>

          {/* Events Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in bg-white border-eco-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{getTypeIcon(event.type)}</span>
                      <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                    </div>
                    <Badge className={getTypeColor(event.type)}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </Badge>
                  </div>
                  <a 
                    href={event.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-eco-600 hover:text-eco-700 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                {/* Event Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{event.participants}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{event.description}</p>

                {/* Impact */}
                <div className="bg-eco-light p-3 rounded-lg mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="w-4 h-4 text-eco-600" />
                    <h4 className="font-semibold text-eco-800">Impact</h4>
                  </div>
                  <p className="text-eco-700 text-sm">{event.impact}</p>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {event.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-eco-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="mt-12 p-8 bg-white border-eco-200 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Join the Global Movement
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              These events show that together we can make a real difference. Start your own waste reduction journey today and be part of the solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/finder"
                className="bg-eco-gradient text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Find Disposal Solutions
              </a>
              <a 
                href="/education"
                className="border-2 border-eco-500 text-eco-600 px-6 py-3 rounded-full font-semibold hover:bg-eco-50 transition-colors"
              >
                Learn About Waste Education
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WorldEvents;
