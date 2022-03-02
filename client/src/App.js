import './App.css';
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import Employeeregistration from './components/Employeeregistration';
import EmployeeView from './components/EmployeeView';
function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div >
       <Button type="primary" onClick={showModal}>
        Employee Registration
      </Button>
      <Modal title="Basic Modal"  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Employeeregistration></Employeeregistration>
      
      </Modal>
      <EmployeeView/>
      
    </div>
  );
}

export default App;
