import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { format } from 'date-fns';
import { Plane, MapPin, Compass } from 'lucide-react';
import { ActivityCard } from './components/ActivityCard';
import { RecommendationsSection } from './components/RecommendationsSection';
import itineraryData from './data/itinerary.json';

function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-pattern">
      <motion.header 
        className="py-20 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 illustration-plane transform -rotate-45"
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 illustration-plane transform rotate-45"
            animate={{ 
              x: [0, -100, 0],
              y: [0, 50, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center"
          >
            <Plane className="w-8 h-8 text-blue-600" />
          </motion.div>
          <h1 className="font-display text-6xl font-bold mb-4">Singapore Adventure</h1>
          <div className="flex items-center justify-center gap-4 text-xl text-blue-100">
            <MapPin className="w-6 h-6" />
            <p>November 14-21, 2024</p>
            <Compass className="w-6 h-6" />
          </div>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 pb-16 -mt-8">
        <Tabs defaultValue="day1" className="w-full">
          <TabsList className="grid grid-cols-4 lg:grid-cols-8 mb-8 bg-white/80 backdrop-blur-sm p-1 rounded-lg shadow-lg">
            {itineraryData.itinerary.map((day) => (
              <TabsTrigger 
                key={`day${day.day}`} 
                value={`day${day.day}`}
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white font-display"
              >
                Day {day.day}
              </TabsTrigger>
            ))}
          </TabsList>

          {itineraryData.itinerary.map((day) => (
            <TabsContent key={`day${day.day}`} value={`day${day.day}`}>
              <motion.div
                initial="initial"
                animate="animate"
                variants={fadeIn}
              >
                <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-display text-3xl text-gray-800">
                      Day {day.day} - {format(new Date(day.date), 'MMMM do, yyyy')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[600px] pr-4">
                      {day.activities.map((activity, index) => (
                        <ActivityCard 
                          key={`${day.day}-${index}`}
                          activity={activity}
                          index={index}
                          dayNumber={day.day}
                        />
                      ))}
                    </ScrollArea>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <RecommendationsSection recommendations={itineraryData.recommendations} />
      </main>
    </div>
  );
}

export default App;