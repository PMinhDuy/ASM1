import { CHAT_HASH, PATH_URL } from '../../../ultils/constant';
import { MessageFilled, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import HeaderSearchInput from './HeaderSearchInput';
import Logo from '../../common/Logo';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatModal = React.lazy(async () => await import('../../../../features/chats/ChatModal'));

export default function HeaderLayout() {
  const navigate = useNavigate();
  const onHandleSignIn = () => {
    navigate(PATH_URL.signIn);
  };
  const handleOpenBoxChat = () => {
    navigate({ hash: CHAT_HASH });
  };

  return (
    <div className="bg-primary-green-color w-full h-[90px] px-40">
      <div className="flex justify-between gap-4 h-full w-full items-center">
        <Logo />
        <HeaderSearchInput />
        <div className="flex items-center justify-between text-white gap-3 text-base">
          <div className="flex justify-between gap-1 items-center">
            <UserOutlined style={{ fontSize: '24px' }} />
            <div className="cursor-pointer hover:text-primary-yellow-color text-sm" onClick={onHandleSignIn}>
              Đăng nhập
            </div>
            <div className="text-sm">/</div>
            <div className="text-sm cursor-pointer hover:text-primary-yellow-color">Đăng ký</div>
          </div>
          <Divider type="vertical" className="bg-white h-6" />
          <div className="cursor-pointer hover:text-primary-yellow-color">
            <ShoppingOutlined style={{ fontSize: '20px' }} />
          </div>
          <div className="ml-2 cursor-pointer hover:text-primary-yellow-color" onClick={handleOpenBoxChat}>
            <MessageFilled style={{ fontSize: '20px' }} />
          </div>
        </div>
      </div>
      <ChatModal />
    </div>
  );
}
