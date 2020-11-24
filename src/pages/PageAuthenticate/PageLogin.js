/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Form, Input, Button } from 'antd'; 
import Header from 'components/Header/Header';
import { AuthenticateContainer } from './Authenticate.styled';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };

const onFinish = values => {
  console.log(values);
};

const PageLogin = () => {
  return (
    <div>
      <Header />
      <AuthenticateContainer>
        <h2>Login</h2>
        <Form {...layout} onFinish={onFinish}>
          <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input type="email" />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input type="password" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </AuthenticateContainer>
    </div>
  );
};

export default PageLogin;
