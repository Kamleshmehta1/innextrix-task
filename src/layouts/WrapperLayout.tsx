import {
  Avatar,
  Badge,
  Button,
  Col,
  Dropdown,
  Layout,
  MenuProps,
  Row,
  Space,
  Typography,
} from 'antd';
import { Header } from 'antd/es/layout/layout';
import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PhoneOutlined,
  AppstoreOutlined,
  MoonOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { initialize } from '../redux/slice/authSlice';
import { themeColor } from '../utils/themeColor';
import React from 'react';
import { setCollapsed } from '../redux/slice/sideBarSlice';
import { RootState } from '../redux/store';

type wrapperLayout = {
  children: React.ReactNode;
};

function WrapperLayout(props: wrapperLayout) {
  const { children } = props;
  const dispatch = useDispatch();
  const collapsed = useSelector(
    (state: RootState) => state?.sideBar?.collapsed
  );

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
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => dispatch(setCollapsed({ collapsed: !collapsed }))}
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
      {children}
    </Layout>
  );
}

export default WrapperLayout;
