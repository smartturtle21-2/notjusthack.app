// OffersScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { useAppContext } from '/src/components/AppContext';
import { useNavigation } from '@react-navigation/native';

const OffersScreen = () => {
  const navigation = useNavigation();
  const { postedOffers } = useAppContext();

  const handleItemClick = (item) => {
    navigation.navigate('OfferDetailScreen', { item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handleItemClick(item)}
    >
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.itemImage} />
      </View>
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.textContainer}>
          <Text style={styles.textSubtitle} numberOfLines={2} ellipsizeMode="tail">
            {item.details}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.itemSmallText}>Description:</Text>
          <Text style={styles.itemDescription} numberOfLines={2} ellipsizeMode="tail">
            {item.desc}
          </Text>
          {/* Use numberOfLines to limit the description to 3 lines and add ellipsis */}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.itemSmallText}>Post Date: {item.postDate}</Text>
          <View style={styles.tagContainer}>
            <Text style={styles.tagTextSmall}>Offer</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
            <View style={styles.header}>
        <Text style={styles.headerTitle}>Offers</Text>
      </View>
      <FlatList
        data={postedOffers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        numColumns={1}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 8,
    overflow: 'hidden',
    elevation: 3,
  },
  imageContainer: {
    width: 100,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0', // Light gray background
  },
  itemImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    padding: 16,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'darkslategray',
    marginBottom: 8,
  },
  textContainer: {
    marginBottom: 8,
  },
  textSubtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'darkslategray',
    marginBottom: 2,
  },
  itemDescription: {
    marginBottom: 4,
    lineHeight: 20, // Adjust line height for better readability
  },
  itemSmallText: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 4,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tagContainer: {
    backgroundColor: 'green',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  tagTextSmall: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  header: {
    height: 50,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#03A9F4',
    borderRadius: 28,
    elevation: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 8,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  textSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
    marginBottom: 2,
  },
  itemDescription: {
    fontSize: 14,
    color: '#999',
    marginBottom: 4,
    lineHeight: 20,
  },
  itemSmallText: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  tagContainer: {
    backgroundColor: 'green',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  tagTextSmall: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  header: {
    height: 60,
    backgroundColor: '#1abc9c',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 7, // Add this line to make the header rounded
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#03A9F4',
    borderRadius: 28,
    elevation: 8,
  },
});

export default OffersScreen;
