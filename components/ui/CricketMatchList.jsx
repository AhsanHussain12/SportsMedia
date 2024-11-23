import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import CricketMatchFlatList from './CricketMatchFlatList';

const CricketMatchList = ({data}) => { 
  const [status, setStatus] = useState(
    data.map((item) => ({
      title: item.type || "Others",
      status: false,
    }))
  );

  const sectionData = data.map((item) => ({
    title: item.type || "Others", // Default to 'Others' if type is empty
    data: item.series,
  }));

  const handlePressOnType = (type) => {
    setStatus((prevStatus) => prevStatus.map(
      element => element.title === type ? {...element, status: !element.status} : element 
    ));
  };

  const isTypeActive = (title) => {
    const statusEntry = status.find((item) => item.title === title);
    return statusEntry ? statusEntry.status : false;
  };

  return (
    <View style={styles.container}>
      {sectionData.map((element) => (
        <View key={element.title}>
          {/* Title Text with Arrow - Interactive */}
          <View style={styles.titleContainer}>
            <Text style={[styles.text, isTypeActive(element.title) && styles.textActive]}>
              {element.title}
            </Text>
            <Pressable onPress={() => handlePressOnType(element.title)}>
              <Text style={styles.arrow}>
                {isTypeActive(element.title) ? '▲' : '▼'}
              </Text>
            </Pressable>
          </View>

          {/* Conditionally render the MatchFlatList based on section status */}
          {isTypeActive(element.title) && (
            <View style={styles.flatListContainer}>
              <CricketMatchFlatList data={element.data} />
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1, // Takes up the entire screen height
      padding: 16,
      backgroundColor: "#5F4B8B", // Purple background for the entire container
      width: '100%', // Ensures the container takes up full width
      alignSelf: 'center', // Centers the container horizontally
    },
    titleContainer: {
      flexDirection: 'row', // Arrange title and arrow in a row
      justifyContent: 'space-between', // Space out the title and arrow
      alignItems: 'center',
      marginBottom: 16, // Add margin between tabs and content
      width: '100%', // Make sure the title container takes full width
    },
    text: {
      color: "#5F4B8B", // White text for the tab text
      fontSize: 18, // Slightly larger font size
      fontWeight: "bold", // Bold text for prominence
      paddingVertical: 10, // Add vertical padding for spacing
      paddingHorizontal: 20, // Horizontal padding for tab-like feel
      borderRadius: 8, // Rounded corners for a tab-like appearance
      backgroundColor: "white", // Purple background for the tab
      borderWidth: 2, // Border around the text
      borderColor: "#800080", // Purple border color
      textAlign: 'center', // Center align text
      flex: 1, // Make the tab cover full width of the container
      marginHorizontal: 5, // Space between tabs
      elevation: 3, // Shadow effect (for Android)
    },
    textActive: {
      backgroundColor: "#6a006a", // Darker purple for active tab background
      color: "#fff", // White color for active tab text
    },
    arrow: {
      color: "black", // White color for the arrow to match text
      fontSize: 20,
      paddingLeft: 10, // Space between arrow and text
    },
    flatListContainer: {
      padding: 8,
      backgroundColor: "black", // Light teal-ish background for FlatList container
      borderRadius: 8,
      marginTop: 8,
    },
  });
  
export default CricketMatchList;
