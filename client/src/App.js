import './App.css';
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';
import Employeeregistration from './components/Employeeregistration';
import EmployeeView from './components/EmployeeView';
import axios from 'axios';
function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [empData, setEmpData] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(res => {
      setEmpData(res.data)
    }).catch(err => console.log(err))
  }, [])

  // "http://localhost:8081/api/employees"
  

  const showModal = (data) => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <div >
      <Button type="primary" onClick={showModal}>
        Employee Registration
      </Button>
      <Modal title="Register Employee" visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <Employeeregistration  handleCancel={handleCancel}></Employeeregistration>
      </Modal>
      <EmployeeView empData={empData}  />
    </div>
  );
}

export default App;
