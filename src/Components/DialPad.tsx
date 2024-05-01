import { Dispatch, SetStateAction, memo } from 'react';

interface DialPadProps {
  number: string;
  text: string;
  setPhoneVal: Dispatch<SetStateAction<string>>;
  phoneVal: string;
}

const DialPad: React.FC<DialPadProps> = (props) => {
  const { number, text, setPhoneVal, phoneVal } = props;

  function handleClick(number: string) {
    const newString = phoneVal + number;
    setPhoneVal(newString);
  }

  return (
    <div className="dial-keys" onClick={() => handleClick(number)}>
      <span className="dial-number">{number}</span>
      <span className="dial-text">{text}</span>
    </div>
  );
};

export default memo(DialPad);
