import { Modal } from 'antd';
import { themeColor } from '../utils/themeColor';
import { memo } from 'react';

type modalType = {
  children: React.ReactNode;
  isModalOpen: boolean;
  handleCancel: () => void;
};

function ModalWrapper(props: modalType) {
  const { children, isModalOpen, handleCancel } = props;

  return (
    <Modal
      open={isModalOpen}
      footer={null}
      width={'350px'}
      onCancel={handleCancel}
      styles={{
        body: { background: themeColor },
        content: { background: themeColor },
      }}
    >
      {children}
    </Modal>
  );
}

export default memo(ModalWrapper);
