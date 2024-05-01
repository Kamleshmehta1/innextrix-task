import { Input } from 'antd';
import '../styles/phoneInput.css';

type phoneType = {
  phoneVal: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function PhoneSearchInput(props: phoneType) {
  const { phoneVal, handleChange } = props;

  return (
    <Input
      size="large"
      placeholder="Enter Name/Number"
      className="phoneSearchBar"
      onChange={handleChange}
      value={phoneVal}
    />
  );
}

export default PhoneSearchInput;
