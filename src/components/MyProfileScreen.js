import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '/src/components/AppContext';

const MyProfileScreen = () => {
  const {
    userData,
    postedNeeds,
    postedOffers,
    deletePostedNeed,
    deletePostedOffer,
  } = useAppContext();

  const navigation = useNavigation();

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deleteTargetIndex, setDeleteTargetIndex] = useState(null);
  const [selectedTab, setSelectedTab] = useState('needs'); // 'needs' or 'offers'

  const handleDelete = (postId) => {
    setDeleteModalVisible(true);
    setDeleteTargetIndex(postId);
  };

  const confirmDelete = () => {
    setDeleteModalVisible(false);
    if (deleteTargetIndex !== null) {
      if (selectedTab === 'needs') {
        deletePostedNeed(deleteTargetIndex);
        // Add logic to delete the need from the database
      } else {
        deletePostedOffer(deleteTargetIndex);
        // Add logic to delete the offer from the database
      }
    }
  };

  const cancelDelete = () => {
    setDeleteModalVisible(false);
    setDeleteTargetIndex(null);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handlePostPress = (item) => {
    // Navigate to the DetailScreen with the selected post
    navigation.navigate('DetailScreen', { item });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('UserInfoScreen')} style={styles.editInfoButton}>
          <Text style={styles.editInfoButtonText}>Edit Info</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.userInfoContainer}>
        <Image source={userData.profileLogo} style={styles.userLogo} />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>{userData.name}</Text>
        </View>
      </View>

      <View style={styles.tabs}>
  <TouchableOpacity
    style={[styles.tabButton, selectedTab === 'needs' && styles.activeTab]}
    onPress={() => handleTabChange('needs')}
  >
    <Text style={styles.tabText}>Needs</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={[styles.tabButton, selectedTab === 'offers' && styles.activeTab]}
    onPress={() => handleTabChange('offers')}
  >
    <Text style={styles.tabText}>Offers</Text>
  </TouchableOpacity>
</View>

      <Text style={styles.sectionTitle}>
        {selectedTab === 'needs' ? 'Posted Needs:' : 'Posted Offers:'}
      </Text>

      <FlatList
        data={selectedTab === 'needs' ? postedNeeds : postedOffers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handlePostPress(item)}>
            <View style={styles.postContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <View style={styles.textContainer}>
                <Text style={styles.itemDescriptionBold} numberOfLines={2} ellipsizeMode="tail">
                  {item.details}
                </Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.itemDescriptionBold}>Description:</Text>
                <Text style={styles.itemSmallText} numberOfLines={2} ellipsizeMode="tail">
                  {item.desc}
                </Text>
              </View>
              {item.image !== '' && (
                <Image source={{ uri: item.image }} style={styles.postImage} />
              )}
              <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteButton}>
                <Text style={{ color: 'red' }}>Delete</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Delete confirmation modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={deleteModalVisible}
        onRequestClose={() => cancelDelete()}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure you want to delete this post?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => confirmDelete()} style={styles.confirmButton}>
                <Text style={{ color: 'white' }}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => cancelDelete()} style={styles.cancelButton}>
                <Text style={{ color: 'white' }}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  editInfoButton: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  activeTab: {
    backgroundColor: '#c0c0c0',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  postContainer: {
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textContainer: {
    marginBottom: 8,
  },
  itemSmallText: {
    fontSize: 12,
    color: 'darkgray',
  },
  itemDescriptionBold: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
  },
  deleteButton: {
    backgroundColor: 'transparent',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
  },
  confirmButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
 
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  editInfoButton: {
    backgroundColor: '#03A9F4',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  editInfoButtonText: {
    color: 'white',
    fontSize: 14,
  },
  
});

export default MyProfileScreen;
