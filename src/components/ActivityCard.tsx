import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Train, Utensils, Building, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ActivityCardProps {
  activity: any;
  index: number;
  dayNumber: number;
}

export function ActivityCard({ activity, index, dayNumber }: ActivityCardProps) {
  const icons = {
    transport: <Train className="w-5 h-5 text-blue-600" />,
    cost: <DollarSign className="w-5 h-5 text-green-600" />,
    food: <Utensils className="w-5 h-5 text-orange-600" />,
    places: <Building className="w-5 h-5 text-purple-600" />,
    location: <MapPin className="w-5 h-5 text-red-600" />,
    details: <Info className="w-5 h-5 text-gray-600" />
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-6 last:mb-0"
    >
      <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-grow">
              <h3 className="font-display text-xl font-semibold mb-3 text-gray-800">
                {activity.time} - {activity.activity}
              </h3>
              
              <div className="space-y-3">
                {activity.transport && (
                  <div className="flex items-center gap-3 text-gray-600">
                    {icons.transport}
                    <span className="text-sm">{activity.transport}</span>
                  </div>
                )}
                
                {activity.cost && (
                  <div className="flex items-center gap-3 text-gray-600">
                    {icons.cost}
                    <span className="text-sm">{activity.cost}</span>
                  </div>
                )}
                
                {activity.food && (
                  <div className="flex items-center gap-3 text-gray-600">
                    {icons.food}
                    <span className="text-sm">{Array.isArray(activity.food) ? activity.food.join(', ') : activity.food}</span>
                  </div>
                )}
                
                {activity.places && (
                  <div className="flex items-center gap-3 text-gray-600">
                    {icons.places}
                    <span className="text-sm">{Array.isArray(activity.places) ? activity.places.join(', ') : activity.places}</span>
                  </div>
                )}

                {activity.details && (
                  <div className="flex items-center gap-3 text-gray-600">
                    {icons.details}
                    <span className="text-sm">{activity.details}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}