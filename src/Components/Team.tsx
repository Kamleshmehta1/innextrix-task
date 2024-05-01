import { Card, Col, Input, Row, Select, Space, Switch, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { themeColor } from '../utils/themeColor';
import TeamList from './TeamList';
import useIsMobileScreen from '../customHooks/isMobile';

function Team() {
  const isMobile = useIsMobileScreen();

  const [switchState, setSwitchState] = useState(true);

  const teamListData = Array(15)
    .fill('')
    .map((ele, index) => {
      return {
        id: `${index}`,
        name: `John Doe${index}`,
        mobileNumber: '1234567' + index,
        isBookmarked: false,
        avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
      };
    });

  console.log(isMobile);

  return (
    <Content
      style={{
        marginTop: '10px',
        minHeight: 280,
        background: 'white',
      }}
    >
      <Card style={{ height: 'atuo' }}>
        <Space
          direction={isMobile ? 'vertical' : 'horizontal'}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Input
            prefix={<SearchOutlined />}
            type="text"
            size="middle"
            width={200}
            placeholder="Serch Team"
          />
          <Space direction={'horizontal'}>
            <Space direction={'horizontal'}>
              <Typography.Text>Personal:</Typography.Text>
              <Switch
                onChange={() => setSwitchState(!switchState)}
                style={{
                  background: switchState ? themeColor : 'grey',
                }}
                defaultChecked={true}
              />
            </Space>
            <Select
              defaultValue="allGroups"
              style={{ width: 120 }}
              options={[
                { value: 'allGroups', label: 'All Groups' },
                { value: 'harry', label: 'Harry' },
                { value: 'hermoine', label: 'Hermoine' },
                { value: 'ron', label: 'Ron' },
              ]}
            />
          </Space>
        </Space>
      </Card>
      <Row style={{ margin: '2rem auto' }} wrap={true} gutter={[12, 16]}>
        {teamListData?.map((ele) => {
          return (
            <Col xl={4} lg={6} md={8} sm={12} xs={24} key={ele?.id}>
              <TeamList {...ele} />
            </Col>
          );
        })}
      </Row>
    </Content>
  );
}

export default Team;
