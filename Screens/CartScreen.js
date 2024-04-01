import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TabViewExample = () => {
  const [activeTab, setActiveTab] = useState('recents'); // State to track active tab

  // Function to handle tab change
  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {/* Recents Tab */}
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'recents' && styles.activeTab]}
          onPress={() => handleTabChange('recents')}>
          <Text style={styles.tabText}>Recents</Text>
        </TouchableOpacity>
        {/* Favorites Tab */}
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'favorites' && styles.activeTab]}
          onPress={() => handleTabChange('favorites')}>
          <Text style={styles.tabText}>Favorites</Text>
        </TouchableOpacity>
        {/* Nearby Tab */}
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'nearby' && styles.activeTab]}
          onPress={() => handleTabChange('nearby')}>
          <Text style={styles.tabText}>Nearby</Text>
        </TouchableOpacity>
      </View>
      {/* Tab Content */}
      {activeTab === 'recents' && (
        <View style={styles.tabContent}>
          <Text>Recents Content</Text>
        </View>
      )}
      {activeTab === 'favorites' && (
        <View style={styles.tabContent}>
          <Text>Favorites Content</Text>
        </View>
      )}
      {activeTab === 'nearby' && (
        <View style={styles.tabContent}>
          <Text>Nearby Content</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tabButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabViewExample;