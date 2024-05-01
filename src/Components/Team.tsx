import { Card, Col, Input, Row, Select, Space, Switch, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { themeColor } from '../utils/themeColor';
import TeamList from './TeamList';
import '../styles/teams.css';

function Team() {
  const [switchState, setSwitchState] = useState(true);

  const teamListData = Array(15)
    .fill('')
    .map((_, index) => {
      return {
        id: `${index}`,
        name: `John Doe${index}`,
        mobileNumber: '9876543210',
        isBookmarked: false,
        avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`,
      };
    });

  return (
    <Content
      style={{
        marginTop: '10px',
        minHeight: 280,
        background: 'white',
      }}
    >
      <Card style={{ height: 'atuo' }}>
        <Row gutter={[16, 16]}>
          <Col lg={6} md={8} sm={24} xs={24}>
            <Input
              prefix={<SearchOutlined />}
              type="text"
              size="middle"
              width={200}
              placeholder="Serch Team"
            />
          </Col>
          <Col lg={18} md={16} sm={24} xs={24} className="col-bar">
            <Space direction="horizontal">
              <Space direction="horizontal">
                <Typography.Text>Personal:</Typography.Text>
                <Switch
                  onChange={() => setSwitchState(!switchState)}
                  style={{
                    background: switchState ? themeColor : 'grey',
                  }}
                  defaultChecked={true}
                />
              </Space>
              <div>
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
              </div>
            </Space>
          </Col>
        </Row>
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
