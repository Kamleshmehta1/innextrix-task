import { Avatar, Badge, Card, Col, Row, Space, Typography } from 'antd';
import {
  PhoneFilled,
  VideoCameraFilled,
  MoreOutlined,
  StarFilled,
  MessageFilled,
  StarOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { themeColor } from '../utils/themeColor';

type iconsType = {
  id: string;
  icon: React.ReactElement;
  isStar?: boolean;
  color?: string;
};

type teamListProps = {
  name: string;
  mobileNumber: string;
  isBookmarked: boolean;
  avatar: string;
};

function TeamList(props: teamListProps) {
  const { name, mobileNumber, isBookmarked, avatar } = props;

  const cardBottomIcons: iconsType[] = [
    {
      id: '1',
      icon: <PhoneFilled />,
      color: 'green',
    },
    {
      id: '2',
      icon: <VideoCameraFilled />,
      color: themeColor,
    },
    {
      id: '3',
      icon: <MessageFilled />,
      isStar: true,
      color: '#DF9860',
    },
    {
      id: '5',
      icon: <StarFilled />,
    },
    {
      id: '4',
      icon: <MoreOutlined />,
    },
  ];

  return (
    <Card bodyStyle={{ padding: '0.8rem' }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Row align={'middle'}>
          <Col span={8}>
            <Badge dot color="green" offset={[-2, 10]}>
              <Avatar size="large" src={avatar} icon={<UserOutlined />} />
            </Badge>
          </Col>
          <Col span={16}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography.Text strong>{name}</Typography.Text>
              <Typography.Text type="secondary">{mobileNumber}</Typography.Text>
            </div>
          </Col>
        </Row>
        <Row align={'middle'} justify={'space-around'}>
          {cardBottomIcons.map((item) => (
            <Col span={4.5} key={item.id}>
              <span style={{ color: item?.color || '' }}>
                {item?.isStar && isBookmarked ? <StarOutlined /> : item.icon}
              </span>
            </Col>
          ))}
        </Row>
      </Space>
    </Card>
  );
}

export default TeamList;
