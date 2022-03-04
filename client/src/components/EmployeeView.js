import React from 'react'
import { Table, Space } from 'antd';
function EmployeeView(props) {

    const { Column} = Table;
    const empData=props.empData

    const updateClicked=()=>{
    console.log("update Clicked")
    }

    const deleteClicked=()=>{
      console.log("deleteClicked")
      }

  return (
    <div>
     <Table dataSource={empData}>
      <Column title="Id" dataIndex="id" key="_id"  />
      <Column title="First Name" dataIndex="firstname" key="_id" />
      <Column title="Last Name" dataIndex="lastname" key="_id" />
      <Column title="Date of Birth"  dataIndex="dob" key="_id" />
      <Column title="Age" dataIndex="age" key="_id" />
      <Column title="Email"  dataIndex="email" key="_id"/>
      <Column title="Phone"  dataIndex="phone" key="_id"/>
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
          <a onClick={updateClicked}>Update </a>
          <a onClick={deleteClicked}>Delete</a>
        </Space>
      )}
    />
  </Table>
  </div>
  )
}

export default EmployeeView