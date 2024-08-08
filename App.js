import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
const data = require('./generated.json');
export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [items] = useState(data);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => setSelectedItem(item)}>
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {selectedItem && (
        <View style={styles.selectedItem}>
          <Text style={styles.nameLarge}>{selectedItem.name}</Text>
          <Text style={styles.details}>{selectedItem.email}</Text>
          <Text style={styles.details}>{selectedItem.phone}</Text>
          <Text style={styles.details}>{selectedItem.address}</Text>
        </View>
      )}
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedItem: {
    backgroundColor: '#e0e0e0',
    padding: 50,
    margin: 20,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  nameLarge: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  details: {
    fontSize: 12,
    color: '#333333',
    textAlign: 'center',
  }
});
