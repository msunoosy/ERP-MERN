import './App.css';
import React, { useState, useEffect } from 'react';
import { Layout, Menu , Modal, Button } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import Employeeregistration from './components/Employeeregistration';
import EmployeeView from './components/EmployeeView';
import axios from 'axios';


function App() {
  const { Header, Content, Footer, Sider } = Layout;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [empData, setEmpData] = useState([])


  useEffect(() => {
    axios.get("http://localhost:8081/api/employees").then(res => {
    setEmpData(res.data)
    }).catch(err => console.log(err))
  })


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

  const updateemployee = (employee) => {
    const employeedetails = [...empData]
    employeedetails.map(emp => {
      if (emp._id === employee._id) {
        emp._id = employee._id
        emp.id = employee.id
        emp.firstname = employee.firstname
        emp.lastname = employee.lastname
        emp.dob = employee.dob
        emp.age = employee.age
        emp.email = employee.email
        emp.phone = employee.phone
      }
    })
    setEmpData(employeedetails)
  }




  return (
    <div >
      <Layout hasSider>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          Employee Registration
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
          nav 4
        </Menu.Item>
        <Menu.Item key="5" icon={<CloudOutlined />}>
          nav 5
        </Menu.Item>
        <Menu.Item key="6" icon={<AppstoreOutlined />}>
          nav 6
        </Menu.Item>
        <Menu.Item key="7" icon={<TeamOutlined />}>
          nav 7
        </Menu.Item>
        <Menu.Item key="8" icon={<ShopOutlined />}>
          nav 8
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0,display:'flex',alignItems:"center" }} >
        <Button type="primary" onClick={showModal} style={{marginLeft:'15px'}} >
        Employee Registration
      </Button></Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>

        
      <Modal title="Register Employee" visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <Employeeregistration handleCancel={handleCancel} addemployee={addemployee}></Employeeregistration>
      </Modal>
      <EmployeeView empData={empData} removeemployee={removeemployee} updateemployee={updateemployee}  />
          
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
    </div>
  );
}

export default App;
