import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, Space, message } from 'antd';
import axios from 'axios';
import "./login.css"



function LoginPage(props) {
  const [loginData, setLoginData] = useState([]);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    axios.get(`http://localhost:8081/api/employees?email=${values.email}`).then((res) => {
      setLoginData(res.data)
      if(res.data.length===0){
        console.log("No response ",res.data)
        message.error("Invalid Username or Password")
        form.resetFields();
      }else{
      loginData.map((val => {
        if (values.email === val.email && values.password === val.password) {
          props.onLogin(1)
          form.resetFields();
          message.success("Login Success")
        } else {
          props.onLogin(0)
          form.resetFields();
          message.error("Invalid Username or Password")
        }
      }))
      }
    }).catch(err => console.log(err))
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



  return (
    <div className='container'>
      <div className='login'>
        <Space >
          <Form form={form} onFinish={onFinish}
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}

            
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >

            <Form.Item
              label="Username"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" >
                Login
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </div>
    </div>
  )
}
export default LoginPage