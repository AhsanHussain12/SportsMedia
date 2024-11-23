import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Item from './Item';

const FootballMatchList = ({ data }) => {

  return (
    <FlatList
      data={data} // Matches data array
      keyExtractor={(item) => item.id.toString()} // Unique key for each match
      renderItem={(item)=> <Item item={item} isFootball={true} />}
      style={styles.container}
      initialNumToRender={10} // Render only 10 items initially
      maxToRenderPerBatch={10} // Render 10 items per batch while scrolling
      windowSize={5} // Pre-render a few items outside the visible area
      removeClippedSubviews={true} // Remove offscreen items from memory
      contentContainerStyle={styles.flatListContent}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  flatListContent: {
    paddingBottom: 20, // Space at the bottom of the list
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  teamLogo: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
  teamName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  scoreText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
});

export default FootballMatchList;
