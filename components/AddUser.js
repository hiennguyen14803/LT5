import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddUser = ({ themNguoiDung }) => {
  const [ten, setTen] = useState('');
  const [email, setEmail] = useState('');
  const [tuoi, setTuoi] = useState('');

  const handleSubmit = () => {
    themNguoiDung(ten, email, tuoi);
    setTen('');
    setEmail('');
    setTuoi('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Thêm Người dùng</Text>
      <TextInput
        style={styles.input}
        placeholder="Tên"
        value={ten}
        onChangeText={(text) => setTen(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Tuổi"
        value={tuoi}
        onChangeText={(text) => setTuoi(text)}
        keyboardType="numeric"
      />
      <Button title="Thêm" onPress={handleSubmit} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 10,
  },
});

export default AddUser;
