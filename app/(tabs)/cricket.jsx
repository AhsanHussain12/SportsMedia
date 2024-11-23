import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ActivitySpinner from '@/components/ui/ActivitySpinner'
import CricketMatchList from '@/components/ui/CricketMatchList'

const Cricket = ({ navigation }) => {
    const [cricketData, setCricketData] = useState([])
    const [loading, setLoading] = useState(true)
    
    const cricketURL = 'https://cricket-live-data.p.rapidapi.com/series'
    const cricketURLoptions = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': ''// replace with your own key,
            'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com'
        }
    };

    useEffect(() => {
        const GetCricketData = async () => {
            try {
                const res = await fetch(cricketURL, cricketURLoptions)
                if (res.ok) {
                    const data = await res.json()
                    setCricketData(data.results)
                }
                else console.error('Failed to fetch data:', res.status);
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false)
            }
        }
        GetCricketData()
    }, [])



    return (
        <View style={{ flex: 1 }}>
            {loading ? <ActivitySpinner /> : <CricketMatchList data={cricketData}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    formatButton: {
        padding: 15,
        marginVertical: 10,
        backgroundColor: '#ffa726',
        borderRadius: 5,
        alignItems: 'center',
    },
    formatText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Cricket;
