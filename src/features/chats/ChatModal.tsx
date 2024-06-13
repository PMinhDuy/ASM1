import { CHAT_HASH } from '#/shared/ultils/constant';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import ChatHeader from './ChatHeader';
import { Drawer } from 'antd';
import { memo } from 'react';
import { useLocation } from 'react-router-dom';

function ChatModal() {
  const { hash } = useLocation();

  const chatVisible = hash === CHAT_HASH;

  return (
    <Drawer
      closable={false}
      headerStyle={{ boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
      placement="right"
      open={chatVisible}
      title={<ChatHeader />}
      footer={<ChatFooter />}
    >
      <ChatBody />
    </Drawer>
  );
}

export default memo(ChatModal);
