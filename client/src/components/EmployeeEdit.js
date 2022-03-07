import React, { useEffect,useState } from 'react'
import axios from "axios"
import { Form, Input, InputNumber, Button, DatePicker, Select } from 'antd';

function Employeeedit(props) {

    const { Option } = Select;
    const [empEditData,setEmpEditData]=useState({})

    const onFinish = (values) => {
        console.log("onfinish")
    };


    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="94">+94</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 8,
        },
    };

    /* eslint-disable no-template-curly-in-string */

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
    useEffect(() => {
        setEmpEditData(props?.employeedetail)
        
      }, [])
    
  return (
    <div> <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        {/* <Input value={props?.employeedetail?.firstname}/> */}
    <Form.Item
            name={'id'}
            label="ID"
            rules={[
                {
                    type: 'number',
                    min: 0,
                },
            ]}
        >
            <InputNumber />
        </Form.Item>
        <Form.Item
            name={'firstname'}
            label="First Name"
            // initialValue={}
            rules={[
                {
                    required: true,
                },
            ]}
        >
            <Input value={empEditData?.firstname} />
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
            <Input />
        </Form.Item>

        <Form.Item name={'dob'} label="Date of birth">
            <DatePicker onChange={onChange} />
        </Form.Item>

        <Form.Item
            name={'age'}
            label="Age"
            rules={[
                {
                    type: 'number',
                    min: 0,
                    max: 99,
                },
            ]}
        >
            <InputNumber />
        </Form.Item>

        <Form.Item
            name={'email'}
            label="Email"
            rules={[
                {
                    type: 'email',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="contactNumber"
            label="Phone Number"
            rules={[
                {
                    required: true,
                    message: 'Please input your phone number!',
                },
            ]}
        >
            <Input
                addonBefore={prefixSelector}
                style={{
                    width: '100%',
                }}
            />
        </Form.Item>


     <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form></div>
  )
}

export default Employeeedit