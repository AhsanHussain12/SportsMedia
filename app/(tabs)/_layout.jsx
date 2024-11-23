import TabBarIcon from "@/components/ui/TabBarIcon";
import { Tabs } from "expo-router";
import { StyleSheet,StatusBar } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
export default function TabsLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" /> {/* Adjust StatusBar style as needed */}
      <Tabs
        screenOptions={{
          headerShown: false, // No header for tabs
          tabBarStyle: styles.tabBar, // Apply tabBar styles
          tabBarShowLabel: false, // Hide labels, you control them with icons
          tabBarActiveTintColor: '#00B5E2', // Active tab color (teal-blue)
          tabBarInactiveTintColor: '#B0B0B0', // Inactive tab color (light gray)
        }}
      >
        <Tabs.Screen
          name="cricket"
          options={{
            tabBarIcon: ({ color }) => (
              <TabBarIcon iconName="Cricket" symbolName="cricket" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="soccer"
          options={{
            tabBarIcon: ({ color }) => (
              <TabBarIcon iconName="Soccer" symbolName="soccer" color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    tabBar: {
      backgroundColor: '#111', // Dark background for tab bar
      borderTopWidth: 0, // No top border for cleaner design
      elevation: 5, // Shadow effect for modern floating tab bar
      paddingBottom: 10, // Adjust the padding for better spacing
    },
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconText: {
      fontSize: 12,
      fontWeight: '600',
      marginTop: 5, // Spacing between icon and text
      textTransform: 'uppercase', // Sharper, consistent appearance
    },
  });
  