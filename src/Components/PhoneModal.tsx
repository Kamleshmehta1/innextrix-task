import { memo, useMemo, useState } from 'react';
import ModalWrapper from './ModalWrapper';
import { Dispatch, SetStateAction } from 'react';
import {
  VideoCameraOutlined,
  PauseCircleFilled,
  MutedFilled,
  PlusOutlined,
  UsergroupAddOutlined,
  MobileOutlined,
  SwapOutlined,
  NumberOutlined,
  AudioOutlined,
} from '@ant-design/icons';
import PhoneSearchInput from './PhoneSearchInput';
import '../styles/phoneInput.css';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ContactList from './ContactList';
import '../styles/phone.css';
import { Col, Row } from 'antd';

type phoneType = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

type KeyPadValuesType = {
  number: string;
  text: string;
};

export type TeamMemberDetailsType = {
  name: string;
  mobileNumber: string;
  isBookmarked: boolean;
  avatar: string;
  mobileType: string;
};

function PhoneModal(props: phoneType) {
  const KeyPadValues: KeyPadValuesType[] = [
    { number: '1', text: '' },
    { number: '2', text: 'ABC' },
    { number: '3', text: 'DEF' },
    { number: '4', text: 'GHI' },
    { number: '5', text: 'JKL' },
    { number: '6', text: 'MNO' },
    { number: '7', text: 'PQRS' },
    { number: '8', text: 'TUV' },
    { number: '9', text: 'WXYZ' },
    { number: '*', text: '' },
    { number: '0', text: '+' },
    { number: '#', text: '' },
  ];

  const iconKeyPadValues = [
    { icon: <PauseCircleFilled />, subText: 'Hold' },
    { icon: <MutedFilled />, subText: 'Mute' },
    { icon: <PlusOutlined />, subText: 'New call' },
    { icon: <UsergroupAddOutlined />, subText: 'conference' },
    { icon: <MobileOutlined />, subText: 'Transfer' },
    { icon: <SwapOutlined />, subText: 'Swap' },
    { icon: <AudioOutlined />, subText: 'Record' },
    { icon: <NumberOutlined />, subText: 'keypad' },
    { icon: <VideoCameraOutlined />, subText: 'video' },
  ];
  const { isModalOpen, setIsModalOpen } = props;

  const [phoneVal, setPhoneVal] = useState('');

  const teamListData = useSelector((state: RootState) => state?.teams?.users);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneVal(e.target.value);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setPhoneVal('');
  };

  const handleDialedNumber = () => {};

  const regex = useMemo(() => new RegExp(phoneVal, 'i'), [phoneVal]);

  const filteredArr = useMemo(
    () =>
      teamListData?.filter(
        (ele) =>
          regex.test(ele?.name?.toLowerCase()) ||
          regex.test(ele?.mobileNumber?.toLowerCase())
      ),
    [regex, teamListData]
  );

  return (
    <ModalWrapper isModalOpen={isModalOpen} handleCancel={handleCancel}>
      <Row gutter={[16, 16]} style={{ paddingTop: '20px 0px 10px 0px' }}>
        <Col span={24}>
          <PhoneSearchInput handleChange={handleChange} phoneVal={phoneVal} />
        </Col>
        <Col span={24}>
          <div className="contact-list-container">
            <ContactList
              data={filteredArr}
              handleDialedNumber={handleDialedNumber}
            />
          </div>
        </Col>
      </Row>
    </ModalWrapper>
  );
}

export default memo(PhoneModal);
