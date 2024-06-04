import { CloseOutlined, PictureOutlined, SearchOutlined } from '@ant-design/icons';
import { Divider, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

function ChatHeader() {
  const navigate = useNavigate();
  const onCloseChatBox = () => {
    navigate({ hash: '' });
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <Text className="text-base font-bold text-primary-green-color">Chat with Shop</Text>
      <div className="flex items-center space-x-4">
        <SearchOutlined className="cursor-pointer" style={{ fontSize: '18px' }} />
        <PictureOutlined className="cursor-pointer" style={{ fontSize: '18px' }} />
        <Divider className="border-gray-300" type="vertical" />
        <div onClick={onCloseChatBox}>
          <CloseOutlined className="cursor-pointer" style={{ fontSize: '18px' }} />
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
