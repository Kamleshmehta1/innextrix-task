import { Button, Col, Form, Input, Row, Typography, message } from 'antd';
import { themeColor } from '../utils/themeColor';
import { GoogleOutlined } from '@ant-design/icons';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AUTHORIZED_PATHS } from '../routes/paths';
import { initialize } from '../redux/slice/authSlice';
import bcrypt from 'bcryptjs';

interface FormValues {
  email: string;
  password: string;
}

function SignIn() {
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginStep = () => {
    localStorage.setItem('isAuthenticated', JSON.stringify(true));
    dispatch(initialize({ isAuthenticated: true }));
    navigate(AUTHORIZED_PATHS.TEAM.fullPath);
  };

  const onSubmit = async (values: FormValues) => {
    const { email, password } = values;

    const storedUsers = JSON.parse(localStorage.getItem('credentials')!) || [];

    const credentials = storedUsers?.find(
      (ele: FormValues): boolean => ele?.email === email
    );

    if (!credentials) {
      message.error('Email id not present!', 2);
      return;
    }

    const isMatch = await bcrypt.compare(password, credentials?.password);

    if (!isMatch) {
      message.error('Password does not match!', 2);
      return;
    }

    form.resetFields();
    handleLoginStep();
    message.success('Sign in successfully!', 2);
  };

  function handleLoginAsGuest() {
    handleLoginStep();
    message.success('Sign in successfully as guest!', 2);
  }

  return (
    <Form
      name="signin"
      autoComplete="off"
      layout="vertical"
      onFinish={onSubmit}
      requiredMark={false}
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
      <Typography.Paragraph style={{ margin: '1rem auto', textAlign: 'right' }}>
        <a>Forgot password</a>
      </Typography.Paragraph>

      <Form.Item>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Button
              type="primary"
              block
              style={{ backgroundColor: themeColor }}
              htmlType="submit"
            >
              Sign In
            </Button>
          </Col>
          <Col span={24}>
            <Button block onClick={handleLoginAsGuest}>
              Login as guest
            </Button>
          </Col>
          <Col span={24} style={{ textAlign: 'center' }}>
            or
          </Col>
          <Col span={24}>
            <Button block icon={<GoogleOutlined />} htmlType="submit">
              Sign in with Google
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
}

export default SignIn;
