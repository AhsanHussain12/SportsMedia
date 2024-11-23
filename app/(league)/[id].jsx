import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import GoBackBtn from "../../components/ui/GoBackBtn";
import { useEffect, useState } from "react";
import ActivitySpinner from '@/components/ui/ActivitySpinner'
import FootballMatchList from "../../components/ui/FootballMatchList";

const LeagueScreen = () => {
  const { id } = useLocalSearchParams(); // Retrieve the "id" from the route
  const router = useRouter(); // Hook for navigation
  const [leagueData,setLeaguedata] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getLeagueData = async () => {
      try {
        const res = await fetch(
          `https://api.football-data.org/v4/competitions/${id}/matches`,
          {
            method: "GET",
            headers: {
              "X-Auth-Token": "75d0d550293849c79c17620c873f41ce", // Replace with your actual token
            },
          }
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setLeaguedata(data.matches) // Log or set this data in state
      } catch (error) {
        console.error("Error fetching league data:", error);
      }
      finally {
        setLoading(false)
      }
    };

    getLeagueData();
  }, [id]);

  return (
    <View style={styles.container}>
      <GoBackBtn handleGoBack={router.back} />


      <View style={styles.content}>
      <View style={{ flex: 1 }}>
            {loading ? <ActivitySpinner /> : <FootballMatchList data={leagueData}/>}
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
});

export default LeagueScreen;
