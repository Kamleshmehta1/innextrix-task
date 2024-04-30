import { Button, Col, Form, Input, Row, message } from 'antd';
import { themeColor } from '../utils/themeColor';

import { GoogleOutlined } from '@ant-design/icons';

import bcrypt from 'bcryptjs';

interface FormValues {
  email: string;
  password: string;
  confirmpassword?: string;
}

function SignIn() {
  const [form] = Form.useForm();

  const onSubmit = async (values: FormValues) => {
    const { email, password, confirmpassword } = values;

    if (password !== confirmpassword) {
      message.error('Password ans confirm password does not match', 2);
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 13);

    const credentials = JSON.parse(localStorage.getItem('credentials')) || [];

    if (credentials?.some((ele: FormValues): boolean => ele?.email === email)) {
      message.error('Email id already present!', 2);
      return;
    }

    localStorage.setItem(
      'credentials',
      JSON.stringify([...credentials, { password: hashedPassword, email }])
    );

    form.resetFields();

    message.success('Sign up successfully!', 2);
  };

  return (
    <Form
      name="signup"
      autoComplete="off"
      layout="vertical"
      requiredMark={false}
      onFinish={onSubmit}
    >
      <Form.Item
        style={{ textAlign: 'left' }}
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
        label="Email"
      >
        <Input placeholder="Email" type="email" />
      </Form.Item>
      <Form.Item
        style={{ textAlign: 'left' }}
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
        label="Password"
      >
        <Input type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item
        style={{ textAlign: 'left' }}
        name="confirmpassword"
        rules={[
          { required: true, message: 'Please input your Confirm Password!' },
        ]}
        label="Confirm Password"
      >
        <Input type="password" placeholder="Confirm Password" />
      </Form.Item>

      <Form.Item>
        <Row gutter={[16, 16]} style={{ marginTop: '10px' }}>
          <Col span={24}>
            <Button
              type="primary"
              block
              style={{ backgroundColor: themeColor }}
              htmlType="submit"
            >
              Sign Up
            </Button>
          </Col>
          <Col span={24} style={{ textAlign: 'center' }}>
            or
          </Col>
          <Col span={24}>
            <Button block icon={<GoogleOutlined />} htmlType="submit">
              Sign up with Google
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
}

export default SignIn;
