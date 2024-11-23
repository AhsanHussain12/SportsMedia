import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import sportBG from "../assets/images/splash Screen.png";


export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/(tabs)/cricket"); // Navigate directly to Cricket tab
    }, 2000); // 2-second splash screen delay

    return () => clearTimeout(timeout); // Cleanup timeout
  }, []);

  return (
      <ImageBackground source={sportBG} style={styles.background}>
        <View style={[styles.overlay, { paddingTop: '140%' }]}>
          <Text style={styles.title}>SPORTAHOLIC</Text>
          <Text style={[styles.subtitle, { color: '#FFFFFF' }]}>Dive into the world of Sports!</Text>  
        </View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Lighter overlay (less dark)
  },
  title: {
    fontSize: 40,                // Large size for prominence
    fontWeight: '900',           // Bold for strong emphasis
    color: '#00509E',            // Deep blue for professionalism
    letterSpacing: 2,            // Spacing for a modern look
    textAlign: 'center',         // Center-align the text
    textTransform: 'uppercase',  // Uppercase for branding
    textShadowColor: 'rgba(0, 0, 0, 0.4)', // Subtle shadow for depth
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },
});