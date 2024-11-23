import { View, StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
const GoBackBtn = ({ handleGoBack }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
};
const styles = StyleSheet.create({
    container: {
      position: "absolute",
      top: 50,
      left: 16,
      zIndex: 1,
    },
    backButton: {
      padding: 8,
      backgroundColor: "#f1f1f1",
      borderRadius: 50,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 3, // For Android shadow
    },
  });
export default GoBackBtn