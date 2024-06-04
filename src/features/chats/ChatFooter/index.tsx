import ChatInputContainer from './ChatInputContainer';
import { Form } from 'antd';

function ChatFooter() {
  return (
    <div className="flex w-full flex-col gap-1">
      <Form className="flex w-full justify-between gap-4">
        <ChatInputContainer />
      </Form>
    </div>
  );
}

export default ChatFooter;
