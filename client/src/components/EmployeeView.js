import React, { useState } from 'react'
import axios from 'axios';
import { Table, Space, Popconfirm, message, Modal, Input, Button } from 'antd';

function EmployeeView(props) {

  const [employeedetail, setEmployeeDetail] = useState({})
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (record) => {
    setEmployeeDetail(record)
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
      props.removeemployee(res.data)
      message.success('Employee Deleted Sucessfully');
    }).catch(err => console.log(err))
  }

  const updateemployee = (employeedetail) => {
    axios.put(`http://localhost:8081/api/employees/${employeedetail._id}`, {
      _id: employeedetail._id,
      id: employeedetail.id,
      firstname: employeedetail.firstname,
      lastname: employeedetail.lastname,
      dob: employeedetail.dob,
      age: employeedetail.age,
      email: employeedetail.email,
      phone: employeedetail.phone
    }).then(res => {
      message.success("Employee details updated successfully")
      setIsModalVisible(false)
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
      <Table dataSource={props.empData} columns={columns} pagination={{ pageSize: 5 }} />
      <Modal title="Edit Employee" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null} >
        <Space direction="vertical">
          <Input value={employeedetail?.id} />
          <Input value={employeedetail.firstname} onChange={e => {
            setEmployeeDetail(pre => {
              return { ...pre, firstname: e.target.value }
            })
          }} />
          <Input value={employeedetail?.lastname} onChange={e => {
            setEmployeeDetail(pre => {
              return { ...pre, lastname: e.target.value }
            })
          }} />
          <Input value={employeedetail?.dob} onChange={e => {
            setEmployeeDetail(pre => {
              return { ...pre, dob: e.target.value }
            })
          }} />
          <Input value={employeedetail?.age} onChange={e => {
            setEmployeeDetail(pre => {
              return { ...pre, age: e.target.value }
            })
          }} />
          <Input value={employeedetail?.email} onChange={e => {
            setEmployeeDetail(pre => {
              return { ...pre, email: e.target.value }
            })
          }} />
          <Input value={employeedetail?.phone} onChange={e => {
            setEmployeeDetail(pre => {
              return { ...pre, phone: e.target.value }
            })
          }} />
          <Button onClick={() => updateemployee(employeedetail)} >Submit</Button>
        </Space>
      </Modal>
    </div>
  )
}

export default EmployeeView