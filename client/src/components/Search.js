import React, { useState, useEffect } from 'react'
import "./Search.css"
import EmployeeView from './EmployeeView';
import { Table, Space, Popconfirm, message, Modal, Input, Button, Form } from 'antd';


function Search(props) {
 
const[search,setSearch]=useState("")

const searchOnclick=()=>{
  console.log(search)
  setSearch("")
}

  return (
    <div>
     <h1>Employee Search</h1>
      <Space>
      
        <Input value={search} onChange={e=>{
          setSearch(e.target.value)
        }}></Input>
        <Button onClick={searchOnclick}>Search</Button>
      </Space>
   <EmployeeView/> 
    </div>
  )
}

export default Search