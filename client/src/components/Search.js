import React, { useState } from 'react'
import "./Search.css"
import { Space, Input, Button } from 'antd';


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
  
    </div>
  )
}

export default Search