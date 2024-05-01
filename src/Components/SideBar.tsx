import React from 'react';
import { Layout, Menu } from 'antd';
import {
  GoogleOutlined,
  PhoneOutlined,
  MailOutlined,
  SettingOutlined,
  WechatOutlined,
  ContactsOutlined,
  MobileOutlined,
  DesktopOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import useIsMobileScreen from '../customHooks/isMobile';
import { themeColor } from '../utils/themeColor';
import '../styles/sideBar.css';
import Image from '../CommonComponents/Image';
import smallLogo from '../assets/mobileLogo.png';
import Logo from '../assets/logo.svg';

const { Sider } = Layout;

interface MenuItem {
  children: string;
  icon: React.ReactNode;
  key: string;
  label: string;
}

function SideBar() {
  const isMobile = useIsMobileScreen();

  const collapsed = useSelector(
    (state: RootState) => state?.sideBar?.collapsed
  );

  const item: MenuItem[] = [
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

  const bottomMenu: MenuItem[] = [
    {
      children: '',
      icon: <DesktopOutlined />,
      key: '7',
      label: 'Web App',
    },
    {
      children: '',
      icon: <MobileOutlined />,
      key: '8',
      label: 'Mobile App',
    },
  ];

  return (
    <Sider
      width={250}
      collapsed={isMobile || collapsed}
      style={{
        height: '100vh',
        position: 'fixed',
        zIndex: 100,
        left: 0,
        top: 0,
        bottom: 0,
        background: themeColor,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '24px 24px 15px 24px',
          alignItems: 'center',
        }}
      >
        <Image width={100} height={40} url={collapsed ? smallLogo : Logo} />
      </div>

      <Menu
        theme="dark"
        style={{ background: themeColor }}
        defaultSelectedKeys={['1']}
        mode="inline"
      >
        {item.map((menuItem) => (
          <Menu.Item key={menuItem.key} icon={menuItem.icon}>
            {menuItem.label}
          </Menu.Item>
        ))}
      </Menu>

      <Menu
        theme="dark"
        mode="inline"
        style={{
          background: themeColor,
          transform: `translateY(${isMobile ? 90 : 170}%)`,
        }}
      >
        {bottomMenu.map((menuItem) => (
          <Menu.Item key={menuItem.key} icon={menuItem.icon}>
            {menuItem.label}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}

export default SideBar;
