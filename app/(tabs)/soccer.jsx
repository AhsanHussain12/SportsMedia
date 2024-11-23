import { View, Text, Pressable,StyleSheet,Image,ScrollView } from 'react-native'
import React from 'react'
import { useRouter } from "expo-router";
const soccer = () => {
  const router = useRouter();
  const leagues = [
    {name: "Champions League", id:"CL", emblem:"https://crests.football-data.org/CL.png"},
    {name: "Premier League", id:"PL", emblem:"https://crests.football-data.org/PL.png"},
    {name: "Serie A", id:"SA", emblem:"https://crests.football-data.org/SA.png"},
    {name: "FIFA World Cup", id:"WC", emblem: "https://crests.football-data.org/qatar.png"},
    {name: "Ligue 1", id:"FL1", emblem: "https://crests.football-data.org/FL1.png"},
    {name: "Bundesliga", id:"BL1", emblem:"https://crests.football-data.org/BL1.png"}
  ]
  
  const handlePress = (id) => {
    router.push(`/(league)/${id}`)
  }
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {leagues.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => handlePress(item.id)}
            style={({ pressed }) => [
              styles.tab,
              pressed && styles.pressed, // Styling for press state
            ]}
          >
            <View style={styles.tabContent}>
              {item.emblem && <Image source={{ uri: item.emblem }} style={styles.tabImage} />}
              <Text style={styles.tabText}>{item.name}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container covers the full screen
    backgroundColor: '#5F4B8B', // Purple theme background
  },
  scrollContainer: {
    flexGrow: 1, // Ensures that the ScrollView takes full height
    justifyContent: 'flex-start', // Starts the list from the top
    paddingTop: 10, // Adds some padding on top
  },
  tab: {
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5, // For shadow effect on Android
    shadowColor: '#000', // Shadow effect on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tabContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  tabImage: {
    width: 30,
    height: 30,
    marginRight: 15, // Space between image and text
    borderRadius: 5,
    resizeMode: 'contain', // Prevents logos from being distorted
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5F4B8B', // Purple text color
  },
  pressed: {
    opacity: 0.7, // Effect when the tab is pressed
  },
});



export default soccer