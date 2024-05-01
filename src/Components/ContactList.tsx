import { Avatar, List } from 'antd';
import { TeamMemberDetailsType } from './PhoneModal';
import { UserOutlined } from '@ant-design/icons';

const ContactList = ({
  data,
  handleDialedNumber,
}: {
  data: TeamMemberDetailsType[];
  handleDialedNumber: (param: TeamMemberDetailsType) => void;
}) => {
  return (
    <List
      size="small"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          onClick={() => handleDialedNumber(item)}
          style={{ cursor: 'pointer', paddingLeft: 0 }}
        >
          <List.Item.Meta
            avatar={
              <Avatar size="large" src={item.avatar} icon={<UserOutlined />} />
            }
            title={
              <span style={{ color: '#ccc', margin: 0, padding: 0 }}>
                {item.name}
              </span>
            }
            description={
              <span
                style={{ color: '#ccc', margin: 0, padding: 0 }}
              >{`${item.mobileNumber} (${item.mobileType})`}</span>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default ContactList;
