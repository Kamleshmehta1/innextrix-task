import { Typography } from 'antd';

type onGoingCallType = { subText: string; icon: React.ReactNode };

function OnGoingCallIcons(props: onGoingCallType) {
  const { icon, subText } = props;
  return (
    <div className="ongoing-call">
      <span
        style={{
          color: '#FAF9FD',
          fontWeight: 'bolder',
          fontSize: '1.4rem',
        }}
      >
        {icon}
      </span>
      <Typography.Text className="ongoing-call-text">{subText}</Typography.Text>
    </div>
  );
}

export default OnGoingCallIcons;
