import {
  Avatar,
  Badge,
  Button,
  Col,
  Dropdown,
  Layout,
  Menu,
  MenuProps,
  Row,
  Space,
  Typography,
} from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';

import Logo from '../assets/logo.svg';
import smallLogo from '../assets/mobileLogo.png';
import Image from '../CommonComponents/Image';
import { Content, Header } from 'antd/es/layout/layout';
import {
  UserOutlined,
  GoogleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PhoneOutlined,
  AppstoreOutlined,
  MoonOutlined,
  MailOutlined,
  SettingOutlined,
  WechatOutlined,
  ContactsOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { themeColor } from '../utils/themeColor';
import { useDispatch } from 'react-redux';
import { initialize } from '../redux/slice/authSlice';

function Home() {
  const dispatch = useDispatch();

  const [collapsed, setCollapsed] = useState(false);

  const item = [
    {
      children: '',
      icon: <TeamOutlined />,
      key: '1',
      label: 'Team',
    },
    {
      children: '',
      icon: <WechatOutlined />,
      key: '2',
      label: 'Chat',
    },
    {
      children: '',
      icon: <GoogleOutlined />,
      key: '3',
      label: 'Meet',
    },
    {
      children: '',
      icon: <PhoneOutlined />,
      key: '4',
      label: 'Call',
    },
    {
      children: '',
      icon: <GoogleOutlined />,
      key: '5',
      label: 'Panel',
    },
    {
      children: '',
      icon: <ContactsOutlined />,
      key: '6',
      label: 'Contacts',
    },
    {
      children: '',
      icon: <MailOutlined />,
      key: '7',
      label: 'Voicemail',
    },
    {
      children: '',
      icon: <SettingOutlined />,
      key: '8',
      label: 'Settings',
    },
  ];

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Logout',
      onClick: () => {
        localStorage.removeItem('isAuthenticated');
        dispatch(initialize({ isAuthenticated: false }));
      },
    },
  ];

  return (
    <div>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider
          width={250}
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          {collapsed ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '24px',
                alignItems: 'center',
              }}
            >
              <Image width={100} height={50} url={smallLogo} />
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '24px',
                alignItems: 'center',
              }}
            >
              <Image width={100} height={50} url={Logo} />
            </div>
          )}

          <Menu
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
            items={item}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              paddingLeft: 0,
              background: '#fff',
              height: 'auto',
            }}
          >
            <Row>
              <Col span={12}>
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                  }}
                />
              </Col>
              <Col span={12} style={{ display: 'flex', justifyContent: 'end' }}>
                <Space direction="horizontal" size={'middle'}>
                  <Avatar
                    style={{ cursor: 'pointer' }}
                    size="default"
                    className="appbarlogotranparent"
                    icon={<MoonOutlined />}
                  />
                  <Avatar
                    style={{ cursor: 'pointer' }}
                    size="default"
                    className="appbarlogotranparent"
                    icon={<AppstoreOutlined />}
                  />
                  <Avatar
                    size="default"
                    style={{
                      backgroundColor: themeColor,
                      cursor: 'pointer',
                    }}
                    icon={<PhoneOutlined />}
                    // onClick={showModal}
                  />
                  <Dropdown menu={{ items }} placement="bottomLeft">
                    <Badge dot offset={[-2, 7]}>
                      <Avatar size="default" icon={<UserOutlined />} />
                    </Badge>
                  </Dropdown>
                </Space>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ marginLeft: '25px' }}>
                <Typography.Title level={4} style={{ margin: '0' }}>
                  Team
                </Typography.Title>
              </Col>
            </Row>
          </Header>
          <Content
            style={{
              marginTop: '10px',
              padding: 24,
              minHeight: 280,
              background: 'white',
            }}
          >
            Content
          </Content>
        </Layout>

        {/* <Layout>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout> */}
      </Layout>
    </div>
  );
}

export default Home;
