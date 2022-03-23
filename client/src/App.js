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
    axios.get("http://localhost:8081/api/employees").then(res => {
      setEmpData(res.data)
    }).catch(err => console.log(err))
  }, [])


  const showModal = (data) => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const addemployee = newemployee => {
    setEmpData([...empData, newemployee])
  }

  const removeemployee = (employee) => {
    const newEmployeeList = empData.filter(item => !(item._id === employee._id))
    setEmpData(newEmployeeList)
  }



  return (
    <div >
      <Button type="primary" onClick={showModal}>
        Employee Registration
      </Button>
      <Modal title="Register Employee" visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <Employeeregistration handleCancel={handleCancel} addemployee={addemployee}></Employeeregistration>
      </Modal>
      <EmployeeView empData={empData} removeemployee={removeemployee} />
    </div>
  );
}

export default App;
