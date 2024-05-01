import Sider from 'antd/es/layout/Sider';
import Image from '../CommonComponents/Image';
import { Menu } from 'antd';
import {
  GoogleOutlined,
  PhoneOutlined,
  MailOutlined,
  SettingOutlined,
  WechatOutlined,
  ContactsOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import smallLogo from '../assets/mobileLogo.png';
import Logo from '../assets/logo.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import useIsMobileScreen from '../customHooks/isMobile';

function SideBar() {
  const isMobile = useIsMobileScreen();

  const collapsed = useSelector(
    (state: RootState) => state?.sideBar?.collapsed
  );

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

  return (
    <Sider width={250} collapsed={isMobile || collapsed}>
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
        defaultSelectedKeys={['1']}
        mode="inline"
        items={item}
      />
    </Sider>
  );
}

export default SideBar;
