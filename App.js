import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Mean from './components/mean';
import Median from './components/median';

const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Mean" component={Mean} />
        <Tab.Screen name="Median" component={Median} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


