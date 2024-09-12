import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import { Link } from 'react-router-native';
import LinearGradient from 'react-native-linear-gradient';

const StudentForm = () => {
  const [details, setDetails] = useState({
    s_no: "",  // Corresponds to S_NO
    rollno: "",  // Corresponds to RollNo
    name: "",  // Corresponds to Name
    address: "",  // Corresponds to Address
    fathermobilenumber: "",  // Corresponds to FatherMobileNumber
    mothermobilenumber: "",  // Corresponds to MotherMobileNumber
    personalmobilenumber: "",  // Corresponds to PersonalMobileNumber
    sem1gpa: "",  // Corresponds to sem1GPA
    sem2gpa: "",  // Corresponds to sem2GPA
    sem3gpa: "",  // Corresponds to sem3GPA
    sem4gpa: "",  // Corresponds to sem4GPA
    cgpa: "",  // Corresponds to CGPA
    govtormanagement: "",  // Corresponds to GovtOrManagement
    dayscholarorhosteler: "",  // Corresponds to DayScholarOrHosteler
    community: ""  // Corresponds to Community
  });

  const handleInputChange = (name: string, value: string) => {
    setDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    const { s_no, rollno, name, address, fathermobilenumber, mothermobilenumber, personalmobilenumber, sem1gpa, sem2gpa, sem3gpa, sem4gpa, cgpa, govtormanagement, dayscholarorhosteler, community } = details;
    const apiUrl = 'http://10.0.2.2:3000/details';

    console.log('Submitting form with:', { s_no, rollno, name, address, fathermobilenumber, mothermobilenumber, personalmobilenumber, sem1gpa, sem2gpa, sem3gpa, sem4gpa, cgpa, govtormanagement, dayscholarorhosteler, community });

    try {
      const response = await axios.post(apiUrl, {
        s_no ,
        rollno ,
        name,
        address,
        fathermobilenumber,
        mothermobilenumber,
        personalmobilenumber,
        sem1gpa,
        sem2gpa,
        sem3gpa,
        sem4gpa,
        cgpa,
        govtormanagement,
        dayscholarorhosteler,
        community,
      });

      console.log('Student added successfully:', response.data);

      // Reset form fields
      setDetails({
        s_no: "",
        rollno: "",
        name: "",
        address: "",
        fathermobilenumber: "",
        mothermobilenumber: "",
        personalmobilenumber: "",
        sem1gpa: "",
        sem2gpa: "",
        sem3gpa: "",
        sem4gpa: "",
        cgpa: "",
        govtormanagement: "",
        dayscholarorhosteler: "",
        community: ""
      });

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
    }
  };

  return (
    <View style={styles.container}>
      
      <Link to="/details" style={styles.link}>
        <Text style={styles.linkText}>View Details</Text>
      </Link>
      <Link to="/delete" style={styles.link}>
        <Text style={styles.linkText}>Delete Details</Text>
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
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 8, // Rounded corners
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6, // Shadow for Android
  },
  link: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e7eaf6',
    borderRadius: 8,
    // Advanced shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    // Shadow for Android
    elevation: 6,
  },
  linkText: {
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1.1,
  },
  gradientButton: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    // Gradient background
    // background: 'linear-gradient(45deg, #6a89cc, #a2a8d3)',
    elevation: 6, // Shadow for Android
  },
  gradientText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

// JSX usage of LinearGradient for a button with gradient background
const GradientButton = () => (
  <LinearGradient colors={['#6a89cc', '#a2a8d3']} style={styles.gradientButton}>
    <Text style={styles.gradientText}>Submit</Text>
  </LinearGradient>
);

export default StudentForm;