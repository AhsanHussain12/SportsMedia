import { View, Text, StyleSheet,FlatList  } from 'react-native'
import React from 'react'
import Item from './Item';

const CricketMatchFlatList = ({data}) => {
    if (!data || data.length === 0) {
        return <View style={styles.emptyContainer}><Text style={styles.emptyText}>No Matches Available</Text></View>;
    }

    return (
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={({ item }) => <Item item={item} isCricket={true} />}
            keyExtractor={(item) => item.series_id.toString()}
            horizontal={true} // Make the FlatList horizontal
            contentContainerStyle={styles.flatListContent}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={10} // Render only 10 items initially
            maxToRenderPerBatch={10} // Render 10 items per batch while scrolling
            windowSize={5} // Pre-render a few items outside the visible area
            removeClippedSubviews={true} // Remove offscreen items from memory
          />
        </View>
      );
}


const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 8,
    backgroundColor: '#ffffff', // White background
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000', // Elevation shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  flatListContent: {
    paddingBottom: 8,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f0f8ff', // Light teal-ish background
    borderRadius: 8,
  },
  emptyText: {
    fontSize: 16,
    color: '#008080', // Teal color for empty message
    fontWeight: 'bold',
  },
});



export default CricketMatchFlatList;