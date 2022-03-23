import React, { useState } from 'react'
import axios from 'axios';
import { Table, Space, Popconfirm, message,Modal } from 'antd';
import Employeeedit from './EmployeeEdit';
function EmployeeView(props) {

  const [employeedetail,setEmployeeDetail]=useState({})
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (data) => {
    setEmployeeDetail(data)
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  function confirmDelete(_id) {
    axios.delete(`http://localhost:8081/api/employees/${_id}`).then(res => {
      message.success('Employee Deleted Sucessfully');
    }).catch(err => console.log(err))
  }



  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },

    {
      title: 'First Name',
      dataIndex: 'firstname',
      key: 'firstname',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastname',
      key: 'lastname',
    },

    {
      title: 'Date of Birth',
      dataIndex: 'dob',
      key: 'dob',
    },

    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },

    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },

    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Delete',
      dataIndex: 'delete',
      key: 'delete',
      render: (text, record) => (
        <Space size="middle">
          <Popconfirm
            title="Are you sure to delete this employee?"
            onConfirm={() => confirmDelete(record?._id)}
            okText="Yes"
            cancelText="No"
          >
            <a >Delete</a>
          </Popconfirm>
        </Space>
      ),
    },
    {
      title: 'Update',
      dataIndex: 'update',
      key: 'update',
      render: (text, record) => (
        <Space size="middle">
          <Popconfirm
            title="Are you sure to update this employee?"
            onConfirm={() => showModal(record)}
            okText="Yes"
            cancelText="No"
          >
           <a >Update</a>
          </Popconfirm>
        </Space>
      ),
    }

  ];


  return (
    <div>
      <Table dataSource={props.empData} columns={columns} pagination={{ pageSize:5 }}  />
      <Modal title="Edit Employee" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null} >
        <Employeeedit  empdata={props.empData} employeedetail={employeedetail}></Employeeedit>
      </Modal>
    </div>
  )
}

export default EmployeeView