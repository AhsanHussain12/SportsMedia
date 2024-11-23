import { View,Text,StyleSheet } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface TabBarIconProps{
    iconName: string,
    symbolName: any,
    color: any,
  
}

// TabBarIcon component that displays a MaterialCommunityIcons icon and a text label
const TabBarIcon:React.FC<TabBarIconProps> = ({iconName,symbolName,color}) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={symbolName} size={24} color={color} /> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',       // Centering the icon and text horizontally
    justifyContent: 'center',   // Centering vertically
    padding: 5,                 // Padding around the icon and text
    flexDirection: 'column',    // Stack the icon and text vertically
    width: 'auto',              // Allow the container to adjust its width based on content
    minWidth: 50,               // Set a minimum width to avoid very narrow containers
    height: 'auto',             // Allow the height to adjust based on the content
  },
  text: {
    marginTop: 4,               // Space between the icon and text
    fontSize: 12,               // Size of the text
    fontWeight: '500',          // Slightly bold text
    flexWrap: 'wrap',           // Allow text to wrap if it's too long
    textAlign: 'center',        // Center text horizontally
    width: '100%',              // Allow text to take full width
  },
});


export default TabBarIcon