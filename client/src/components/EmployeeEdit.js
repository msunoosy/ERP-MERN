import React from 'react'

import {  Space } from 'antd';

function Employeeedit(props) {

    return (
        <div>
            <form>
            <Space direction="vertical">
            <input type="text" value={props?.employeedetail?.id} />
            <input value={props?.employeedetail?.firstname} />
            <input value={props?.employeedetail?.lastname} />
            <input value={props?.employeedetail?.dob} />
            <input value={props?.employeedetail?.age} />
            <input value={props?.employeedetail?.email} />
            <input value={props?.employeedetail.phone} />
            <button >Submit</button>
            </Space>
            </form>
        </div>
    )
}

export default Employeeedit