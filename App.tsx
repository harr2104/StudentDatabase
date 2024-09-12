import React from 'react';
import { NativeRouter as Router, Route, Routes } from 'react-router-native';
import StudentForm from './StudentForm';
import Detail from './Detail';
import DeleteStudent from './Delete';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentForm />} />
        <Route path="/details" element={<Detail />} />
        <Route path="/delete" element={<DeleteStudent/>} />
      </Routes>
    </Router>
  );
}
export default App;