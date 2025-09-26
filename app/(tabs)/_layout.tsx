import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#fa4238',
      }}>
      <Tabs.Screen
        name="index" 
        options={{ 
          title: 'ME5A Hours',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'alarm' : 'alarm-outline'} color={color} size={25} />
          )
           }} />
      <Tabs.Screen 
        name="profile"
        options={{ 
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} color={color} size={25} />
          ) 
          }} />
    </Tabs>
  )
}