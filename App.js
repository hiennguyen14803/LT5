import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

// Import các component
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';

const App = () => {
  const [nguoiDung, setNguoiDung] = useState([]);
  const [dangTai, setDangTai] = useState(false);
  const [loi, setLoi] = useState(null);

  // Lấy danh sách người dùng
  const layDanhSachNguoiDung = async () => {
    setDangTai(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const danhSach = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNguoiDung(danhSach);
    } catch (error) {
      setLoi('Lỗi khi lấy dữ liệu người dùng');
    } finally {
      setDangTai(false);
    }
  };

  // Thêm người dùng mới
  const themNguoiDung = async (name, email, age) => {
    setDangTai(true);
    try {
      await addDoc(collection(db, 'users'), { name, email, age });
      layDanhSachNguoiDung();
    } catch (error) {
      setLoi('Lỗi khi thêm người dùng');
    } finally {
      setDangTai(false);
    }
  };

  // Cập nhật người dùng
  const capNhatNguoiDung = async (id, name, email, age) => {
    setDangTai(true);
    try {
      const nguoiDungRef = doc(db, 'users', id);
      await updateDoc(nguoiDungRef, { name, email, age });
      layDanhSachNguoiDung();
    } catch (error) {
      setLoi('Lỗi khi cập nhật thông tin');
    } finally {
      setDangTai(false);
    }
  };

  // Xóa người dùng
  const xoaNguoiDung = async (id) => {
    setDangTai(true);
    try {
      const nguoiDungRef = doc(db, 'users', id);
      await deleteDoc(nguoiDungRef);
      layDanhSachNguoiDung();
    } catch (error) {
      setLoi('Lỗi khi xóa người dùng');
    } finally {
      setDangTai(false);
    }
  };

  useEffect(() => {
    layDanhSachNguoiDung();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quản lý Người dùng</Text>

      {dangTai && <Loading />}
      {loi && <ErrorMessage message={loi} />}

      <AddUser themNguoiDung={themNguoiDung} />
      <UserList nguoiDung={nguoiDung} capNhatNguoiDung={capNhatNguoiDung} xoaNguoiDung={xoaNguoiDung} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
