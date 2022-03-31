import React from 'react'
import "./Search.css"
import EmployeeView from './EmployeeView';
import { Table, Space, Popconfirm, message, Modal, Input, Button, Form } from 'antd';


function Search() {


  return (
    <div>
      <h1>Employee Search</h1>

      <Space>
        <Input></Input>
        <Button>Search</Button>
      </Space>
    

    </div>
  )
}

export default Search