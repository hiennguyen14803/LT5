import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const UserList = ({ nguoiDung, capNhatNguoiDung, xoaNguoiDung }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Danh sách Người dùng</Text>
      <FlatList
        data={nguoiDung}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>
              <strong>Tên:</strong> {item.name} | <strong>Email:</strong> {item.email} | <strong>Tuổi:</strong> {item.age}
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => capNhatNguoiDung(item.id, item.name, item.email, item.age)}>
                <Text style={styles.buttonText}>Cập nhật</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => xoaNguoiDung(item.id)}>
                <Text style={styles.buttonText}>Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default UserList;
