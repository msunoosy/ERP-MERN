import React, {useState} from 'react'
import { Form, Input, Button, Checkbox,Space,message} from 'antd';
import "./login.css"

function LoginPage(props) {
  const [form] = Form.useForm();

    const onFinish = (values) => {
      if(values.username === 'um' && values.password === 'pm'){
        props.onLogin(1)
        form.resetFields();
        message.success("Login Success")
    }else{
        props.onLogin(0)
        form.resetFields();
        message.error("Invalid Username or Password")
      }
    }
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
      <div className='container'>
        <div className='login'>
          <Space >
        <Form  form={form}
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
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >

      <Form.Item
        label="Username"
        name="username"
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
        <Button type="primary" htmlType="submit">
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