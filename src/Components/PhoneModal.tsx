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
  PhoneFilled,
  AudioOutlined,
  CloseOutlined,
  AndroidOutlined,
} from '@ant-design/icons';
import PhoneSearchInput from './PhoneSearchInput';
import '../styles/phoneInput.css';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ContactList from './ContactList';
import '../styles/phone.css';
import { Avatar, Col, Row, Typography } from 'antd';
import DialPad from './DialPad';
import Timer from './Timer';
import OnGoingCallIcons from './OnGoingCallIcons';

type phoneType = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

type KeyPadValuesType = {
  number: string;
  text: string;
};

export type teamDataType = {
  name: string;
  avatar: React.ReactNode | string;
  isBookmarked: boolean;
  mobileNumber: string;
  mobileType: string;
};

function PhoneModal(props: phoneType) {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const { isModalOpen, setIsModalOpen } = props;

  const [phoneVal, setPhoneVal] = useState<string>('');
  const [dialedNumber, setDialedNumber] = useState<teamDataType>();

  const isDialed = useMemo(
    () => dialedNumber && !!Object.keys(dialedNumber)?.length,
    [dialedNumber]
  );

  const teamListData = useSelector((state: RootState) => state?.teams?.users);

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

  const footerButtons = [
    {
      icon: <VideoCameraOutlined />,
      size: '',
    },
    {
      icon: (
        <Avatar
          size="default"
          icon={<PhoneFilled />}
          style={{
            backgroundColor: isDialed ? '#D50F3D' : '#36C45D',
            height: '60px',
            width: '60px',
            transform: isDialed ? 'rotate(225deg)' : 'rotate(0deg)',
          }}
        />
      ),
      size: '',
      onclick: () => {
        if (isDialed) {
          setIsRunning(false);
          setDialedNumber(undefined);
          return;
        }
        setIsRunning(true);
        setDialedNumber({
          name: 'Unknown',
          avatar: <AndroidOutlined />,
          isBookmarked: false,
          mobileNumber: phoneVal,
          mobileType: 'Business',
        });
      },
    },
    {
      icon: <CloseOutlined />,
      size: '',
      onclick: () => {
        if (phoneVal?.length) {
          const newString = phoneVal.substring(0, phoneVal?.length - 1);
          setPhoneVal(newString);
        }
      },
    },
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneVal(e.target.value);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setPhoneVal('');
  };

  const handleDialedNumber = (item: teamDataType) => {
    setDialedNumber(item);
    setIsRunning(true);
  };

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
      <Row
        gutter={[14, 14]}
        style={{
          padding: '20px 0px 10px 0px',
        }}
      >
        <Col span={24}>
          <div className="dial-screen">
            {isDialed ? (
              <>
                <Typography.Title level={4} className="dialed-user">
                  {dialedNumber?.name}
                </Typography.Title>
                <span className="dialed-user-number">
                  {dialedNumber?.mobileNumber}
                </span>
                <Timer isRunning={isRunning} setIsRunning={setIsRunning} />
              </>
            ) : (
              <PhoneSearchInput
                handleChange={handleChange}
                phoneVal={phoneVal}
              />
            )}
          </div>
        </Col>
        <Col span={24}>
          <div className="contact-list-container">
            {!isDialed ? (
              <ContactList
                data={filteredArr}
                handleDialedNumber={handleDialedNumber}
              />
            ) : null}
          </div>
        </Col>
      </Row>
      <Row gutter={[12, 12]} justify="center" className="dial-menu">
        {!isDialed ? (
          <>
            {KeyPadValues?.map(({ number, text }) => {
              return (
                <Col
                  span={8}
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <DialPad
                    number={number}
                    text={text}
                    setPhoneVal={setPhoneVal}
                    phoneVal={phoneVal}
                  />
                </Col>
              );
            })}
          </>
        ) : (
          <>
            {iconKeyPadValues?.map(({ icon, subText }) => {
              return (
                <Col
                  span={8}
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <OnGoingCallIcons icon={icon} subText={subText} />
                </Col>
              );
            })}
          </>
        )}
      </Row>
      <Row
        gutter={[14, 14]}
        justify="center"
        style={{
          marginTop: '25px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {footerButtons?.map(({ icon, onclick }) => {
          return (
            <Col span={8} style={{ display: 'flex', justifyContent: 'center' }}>
              <span className="action-button" onClick={onclick}>
                {icon}
              </span>
            </Col>
          );
        })}
      </Row>
    </ModalWrapper>
  );
}

export default memo(PhoneModal);
