
import { Recycle, AlertTriangle, Info, Trash } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { type WasteItem } from '@/data/wasteDatabase';

interface WasteResultCardProps {
  item: WasteItem;
}

const getBinIcon = (binType: string) => {
  const iconClass = "w-5 h-5";
  
  if (binType.toLowerCase().includes('recycling')) {
    return <Recycle className={`${iconClass} text-eco-600`} />;
  } else if (binType.toLowerCase().includes('compost')) {
    return <Recycle className={`${iconClass} text-amber-600`} />;
  } else if (binType.toLowerCase().includes('hazardous')) {
    return <AlertTriangle className={`${iconClass} text-red-600`} />;
  } else {
    return <Trash className={`${iconClass} text-gray-600`} />;
  }
};

const getBinColor = (binType: string) => {
  if (binType.toLowerCase().includes('recycling')) {
    return 'bg-eco-100 text-eco-800 border-eco-200';
  } else if (binType.toLowerCase().includes('compost')) {
    return 'bg-amber-100 text-amber-800 border-amber-200';
  } else if (binType.toLowerCase().includes('hazardous')) {
    return 'bg-red-100 text-red-800 border-red-200';
  } else {
    return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const WasteResultCard = ({ item }: WasteResultCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in bg-white border-eco-200">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{item.name}</h3>
            <Badge variant="outline" className="text-eco-700 border-eco-300">
              {item.category}
            </Badge>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 mb-1">
              {getBinIcon(item.binType)}
              <span className="font-semibold text-gray-800">Disposal</span>
            </div>
            <Badge className={getBinColor(item.binType)}>
              {item.binType}
            </Badge>
          </div>
        </div>

        <Separator className="bg-eco-200" />

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Reuse Ideas */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Recycle className="w-5 h-5 text-eco-600" />
              <h4 className="font-semibold text-gray-900">Reuse Ideas</h4>
            </div>
            <ul className="space-y-2">
              {item.reuseIdeas.map((idea, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-eco-500 rounded-full mt-2 flex-shrink-0" />
                  <span>{idea}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cautions */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <h4 className="font-semibold text-gray-900">Important Cautions</h4>
            </div>
            <ul className="space-y-2">
              {item.cautions.map((caution, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                  <span>{caution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-eco-200" />

        {/* More Info Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold text-gray-900">More Information</h4>
          </div>
          
          <div className="bg-eco-light p-4 rounded-lg">
            <p className="text-gray-700 mb-3">{item.moreInfo}</p>
            <div className="bg-white p-3 rounded border-l-4 border-eco-500">
              <h5 className="font-semibold text-eco-800 mb-1">Environmental Impact</h5>
              <p className="text-gray-700 text-sm">{item.environmentalImpact}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WasteResultCard;
