import React, { useCallback, useMemo, useState } from 'react';
import { Card, Col, Input, Row, Select, Space, Switch, Typography } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { handleDebounce } from '../utils/debounce';
import { themeColor } from '../utils/themeColor';
import TeamList from './TeamList';
import '../styles/teams.css';

function Team() {
  const [search, setSearch] = useState<string>('');
  const [switchState, setSwitchState] = useState<boolean>(true);

  const teamListData = useSelector((state: RootState) => state?.teams?.users);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const handleSearch = handleDebounce(handleChange, 300);

  const regex = useMemo(() => new RegExp(search, 'i'), [search]);

  const filteredArr = useMemo(
    () => teamListData?.filter((ele) => regex.test(ele?.name?.toLowerCase())),
    [regex, teamListData]
  );

  return (
    <>
      <Card style={{ height: 'auto' }}>
        <Row gutter={[16, 16]}>
          <Col lg={6} md={8} sm={24} xs={24}>
            <Input
              prefix={<SearchOutlined />}
              type="text"
              size="middle"
              onChange={handleSearch}
              style={{ width: 200 }}
              placeholder="Search Team"
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
                    { value: 'hermione', label: 'Hermione' },
                    { value: 'ron', label: 'Ron' },
                  ]}
                />
              </div>
            </Space>
          </Col>
        </Row>
      </Card>
      <Row style={{ margin: '2rem auto' }} wrap={true} gutter={[12, 16]}>
        {filteredArr?.map((ele) => {
          return (
            <Col xl={4} lg={6} md={8} sm={12} xs={24} key={ele?.id}>
              <TeamList {...ele} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Team;
