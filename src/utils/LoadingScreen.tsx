import { Spin } from 'antd';
import '../styles/Loader.css';

function LoadingScreen() {
  return (
    <div className="loader">
      <Spin size="large" />
    </div>
  );
}

export default LoadingScreen;
