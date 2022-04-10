import React, { useState} from 'react'
import axios from 'axios';
import { Table, Space, Popconfirm, message, Modal, Input, Button, Form } from 'antd';

function EmployeeView(props) {
  const [form] = Form.useForm();
  const [employeedetail, setEmployeeDetail] = useState({})
  const [isModalVisible, setIsModalVisible] = useState(false);
  const[searched,setSearched]=useState("")
  let emp=props.empData
  const[search,setSearch]=useState("")
 
  

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

  const updateemployee = () => {
    if(employeedetail.email){
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
            props.updateemployee(res.data)
            message.success("Employee details updated successfully")
            setIsModalVisible(false)
          }).catch(err => console.log(err))

       
  }
  }

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };

  
  
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

    form.setFieldsValue({
      _id:employeedetail._id,
      id:employeedetail.id,
      firstname: employeedetail.firstname,
      lastname: employeedetail.lastname,
      dob: employeedetail.dob,
      age: employeedetail.age,
      email: employeedetail.email,
      phone: employeedetail.phone
    });

    

const searchOnclick=(e)=>{
  if(search===""){
 message.error("Cannot be empty")
  }
  else{
    setSearched(emp)
    const newEmployeeList =emp.filter(employee=>employee.email===search)
  if(newEmployeeList.length===0){
      message.error('No records available')
    }else{
      
      props.search(newEmployeeList)
      setSearch("")
    }
  }

}

const onClearButton =()=>{
 props.clear(searched)
}


  return (
    <div>
       <Input placeholder='Enter Email' style={{width:"150px" }} value={search} onChange={e=>{
          setSearch(e.target.value)
        }}></Input>
        <Button onClick={searchOnclick}>Search</Button>
        <Button onClick={onClearButton} >Clear</Button>
      <Table dataSource={props.empData} columns={columns} pagination={{ pageSize: 10 }} />
      <Modal title="Edit Employee" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null} >
        <Form {...layout} name="nest-messages" form={form} validateMessages={validateMessages} onFinish={updateemployee}>
        <Form.Item
            name={'_id'}
            label="_id"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input  disabled onChange={e => {
            setEmployeeDetail(pre => {
              return { ...pre, _id: e.target.value }
            })
          }}/>
          </Form.Item>
          <Form.Item
            name={'id'}
            label="Employee id"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input   onChange={e => {
            setEmployeeDetail(pre => {
              return { ...pre, id: e.target.value }
            })
          }}/>
          </Form.Item>

          <Form.Item
            name={'firstname'}
            label="First Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input   onChange={e => {
            setEmployeeDetail(pre => {
              return { ...pre, firstname: e.target.value }
            })
          }}/>
          </Form.Item>
          <Form.Item
            name={'lastname'}
            label="Last Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={e => {
            setEmployeeDetail(pre => {
              return { ...pre, lastname: e.target.value }
            })
          }} />
          </Form.Item>
          <Form.Item
            name={'dob'}
            label="Date of birth"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={e => {
            setEmployeeDetail(pre => {
              return { ...pre, dob: e.target.value }
            })
          }} />
          </Form.Item>

          <Form.Item
            name={'age'}
            label="Age"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={e => {
            setEmployeeDetail(pre => {
              return { ...pre, age: e.target.value }
            })
          }}/>
          </Form.Item>

          <Form.Item
            name={'email'}
            label="Email"
            rules={[
              {
                type: 'email',
                required: true,
              },
            ]}
          >
            <Input onChange={e => {
            setEmployeeDetail(pre => {
              return { ...pre, email: e.target.value }
            })
          }}/>
          </Form.Item>
          <Form.Item
            name={'phone'}
            label="Phone"
            rules={[
              {
                
                required: true,
              },
            ]}
          >
            <Input onChange={e => {
            setEmployeeDetail(pre => {
              return { ...pre, phone: e.target.value }
            })
          }} />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary"  htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

      </Modal>
    </div>
  )
}

export default EmployeeView