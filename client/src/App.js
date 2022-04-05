import './App.css';
import React, { useState, useEffect } from 'react';
import { Layout, Menu, Modal, Button, message } from 'antd';
import Employeeregistration from './components/Employeeregistration';
import EmployeeView from './components/EmployeeView';
import axios from 'axios';
import { Sidebardata } from './components/Sidebardata';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Search from "./components/Search"


function App() {

  const { Header, Content, Footer, Sider } = Layout;
  const [isModalVisible, setIsModalVisible] = useState(false);
  let [empData, setEmpData] = useState([])
  const [isSearch, setIsSearch] = useState(false)

  useEffect(() => {
    if(!isSearch){
      axios.get("http://localhost:8081/api/employees").then(res => {
      setEmpData(res.data)
      }).catch(err => console.log(err))
    }
  },[])


  const showModal = (data) => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const addemployee = newemployee => {
    setEmpData([...empData, newemployee])
  }

  const search = newEmployeeList => {
    setEmpData(newEmployeeList)
    setIsSearch(true)
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
    console.log("upd>>> ",employeedetails)
  }
 
  const clear=(searched)=>{
    setEmpData(searched)
  }



  return (
    <Router>
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
            <Menu theme="dark" mode="inline" >
              {Sidebardata.map((val, key) => {
                
                return (
                  <Menu.Item key={key} icon={val.icon} path={val.link} >
                    <Link to={val.link}>{val.title}</Link>
                  </Menu.Item>
                )
              })}

            </Menu>
          </Sider>

          <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header className="site-layout-background" style={{ padding: 0, display: 'flex', alignItems: "center" }} >
              <Button type="primary" onClick={showModal} style={{ marginLeft: '15px' }} >
                Employee Registration
              </Button>
            </Header>
            <Modal title="Register Employee" visible={isModalVisible} onCancel={handleCancel} footer={null}>
              <Employeeregistration handleCancel={handleCancel} addemployee={addemployee}></Employeeregistration>
            </Modal>

            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
              <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                <Routes>
                  <Route path='/' element={< EmployeeView  search={search} empData={empData} removeemployee={removeemployee} updateemployee={updateemployee} clear={clear}/>}></Route>
                  <Route path='/Search' element={<Search empData={empData} />}></Route>
                </Routes>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>

      </div>
    </Router>
  );
}

export default App;
