import { Card, Space, Tabs, Typography } from 'antd';
import '../styles/authPage.css';
import { lazy } from 'react';

const SignIn = lazy(() => import('./SignIn'));
import SignUp from './SignUp';
import Image from '../CommonComponents/Image';
import Logo from '../assets/logo.svg';

function SignInHeader() {
  // sign in header
  return (
    <>
      <Image width={100} height={50} url={Logo} />
      <Typography.Title level={4} style={{ margin: '0' }}>
        Welcome Back!
      </Typography.Title>
      <Typography.Text type="secondary">
        Sign to continue to astpp
      </Typography.Text>
    </>
  );
}

function AuthPage() {
  const items = [
    { id: '1', label: 'Sign In', key: '1', children: <SignIn /> },
    { id: '2', label: 'Sign Up', key: '2', children: <SignUp /> },
  ];

  return (
    <div className="authpage-container">
      <Card style={{ width: 450, height: 600 }}>
        <Space
          direction="vertical"
          style={{
            textAlign: 'center',
            width: '100%',
          }}
        >
          <SignInHeader />
          <Tabs centered defaultActiveKey="1" items={items} />
        </Space>
      </Card>
    </div>
  );
}

export default AuthPage;
