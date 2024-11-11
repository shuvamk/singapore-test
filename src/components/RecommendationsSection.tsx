import { motion } from 'framer-motion';
import { Utensils, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface RecommendationsSectionProps {
  recommendations: {
    foods_to_try: string[];
    notes: string[];
  };
}

export function RecommendationsSection({ recommendations }: RecommendationsSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-12"
    >
      <Card className="bg-white/90 backdrop-blur-sm border border-gray-200">
        <CardHeader className="border-b border-gray-100">
          <CardTitle className="font-display text-3xl text-gray-800">Travel Tips & Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-orange-50/50 rounded-xl p-6"
            >
              <h3 className="font-display text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-3">
                <Utensils className="w-6 h-6 text-orange-600" />
                Must-Try Foods
              </h3>
              <ul className="space-y-3">
                {recommendations.foods_to_try.map((food, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="w-2 h-2 bg-orange-400 rounded-full" />
                    <span className="text-sm">{food}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-blue-50/50 rounded-xl p-6"
            >
              <h3 className="font-display text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-blue-600" />
                Important Notes
              </h3>
              <ul className="space-y-3">
                {recommendations.notes.map((note, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
                    <span className="text-sm">{note}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}