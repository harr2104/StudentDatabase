import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import axios from 'axios';
import { Link } from 'react-router-native';
import Toast from 'react-native-toast-message';

const Delete = () => {
  const [rollnum, setRollnum] = useState('');

  const handleDelete = async () => {
    const apiUrl = `http://10.0.2.2:3000/details/${rollnum}`;

    try {
      const response = await axios.delete(apiUrl);
      console.log('Student deleted successfully:', response.data);

      // Show success toast
      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Success',
        text2: 'Student deleted successfully',
        visibilityTime: 3000,
        autoHide: true,
        bottomOffset: 40,
      });

      // Show success alert
      Alert.alert(
        'Deleted!',
        'The student record has been deleted successfully.',
        [{ text: 'OK' }]
      );

      // Reset roll number field
      setRollnum('');

    } catch (error) {
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
      } else if (error.request) {
        console.error('Error request:', error.request);
      } else {
        console.error('Error message:', error.message);
      }

      // Show error toast
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Error',
        text2: 'Failed to delete student',
        visibilityTime: 3000,
        autoHide: true,
        bottomOffset: 40,
      });

      // Show error alert
      Alert.alert(
        'Error',
        'Failed to delete the student record. Please try again.',
        [{ text: 'OK' }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Roll Number"
        keyboardType="numeric"
        value={rollnum}
        onChangeText={text => setRollnum(text)}
      />
      <Button title="Delete" onPress={handleDelete} />
      <Link to="/" style={styles.link}>
        <Text style={styles.linkText}>Back to Form</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#a2a8d3',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: '#e7eaf6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#e7eaf6',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#38598b',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  linkText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Delete;
