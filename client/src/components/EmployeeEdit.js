import React, { useState } from 'react'
import axios from "axios"
import { message, Space } from 'antd';

function Employeeedit(props) {

    return (
        <div>
            <Space direction="vertical">
            <form>
            <input type="text" value={props?.employeedetail?.id} />
            <input value={props?.employeedetail?.firstname} />
            <input value={props?.employeedetail?.lastname} />
            <input value={props?.employeedetail?.dob} />
            <input value={props?.employeedetail?.age} />
            <input value={props?.employeedetail?.email} />
            <input value={props?.employeedetail.phone} />
            <button >Submit</button>
            </form>
            </Space>
        </div>
    )
}

export default Employeeedit