import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'

const Item = ({ isFootball, isCricket, item }) => {
    // Render Cricket Item
    const renderCricketItem = () => (
        <View style={styles.CricketmatchCard}>
            <Text style={styles.seriesName}>Series: {item.series_name}</Text>
            <Text style={styles.status}>Status: {item.status}</Text>
            <Text style={styles.seriesName}>Season: {item.season}</Text>
        </View>
    );

    // Render Football Item (empty for now)
    const renderFootballItem = () => {
        const match=item.item;
        return (
            <View style={styles.footballmatchCard}>
                {/* Matchday */}
                <Text style={styles.matchdayText}>{item.matchday}</Text>

                {/* Teams and score container */}
                <View style={{ alignItems: 'center' }}>
                    {/* Home Team and Away Team in a row */}
                    <View style={styles.teamContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={{ uri: match.homeTeam.crest }} style={styles.teamLogo} />
                            <Text style={styles.teamName}>{match.homeTeam.tla}</Text>
                        </View>

                        <Text style={styles.teamName}> : </Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.teamName}>{match.awayTeam.tla}</Text>
                            <Image source={{ uri: match.awayTeam.crest }} style={styles.teamLogo} />
                        </View>
                    </View>

                    {/* Score Below */}
                    <Text style={styles.scoreText}>
                        {match.score.fullTime.home}:{match.score.fullTime.away}
                    </Text>
                </View>
            </View>
          );
    }

    // Conditional rendering logic
    if (isCricket) {
        return renderCricketItem();
    } else if (isFootball) {
        return renderFootballItem();
    }

    return null; // In case neither isCricket nor isFootball is true
};


const styles = StyleSheet.create({
    CricketmatchCard: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
        elevation: 3,
    },
    seriesName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    status: {
        fontSize: 14,
        color: 'gray',
    },
    footballmatchCard: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
        elevation: 3,
        width: '100%', // Ensures each card has a defined width (95% of the screen width)
        marginHorizontal: '2.5%', // Centering the card and providing margins on both sides
    },
    matchdayText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10, // Adds space between matchday and teams
    },
    teamContainer: {
        flexDirection: 'row',
        alignItems: 'center', // Aligns image and text horizontally
        justifyContent: 'space-between', // Distribute space evenly between teams
        flex: 1, // Ensures teams and score are evenly spaced
        marginBottom: 10, // Adds space between teams and score
    },
    teamLogo: {
        width: 30,
        height: 30,
        marginRight: 10, // Adds space between image and text
        borderRadius: 5, // Ensures logos are rounded for uniformity
        resizeMode: 'contain', // Prevents logos from being distorted
    },
    teamName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        flexShrink: 1, // Ensures text wraps within available space
        textAlign: 'center', // Centers team names
    },
    scoreText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center', // Centers the score in the middle of the row
        marginVertical: 10, // Adds space around the score
    }
});

export default Item