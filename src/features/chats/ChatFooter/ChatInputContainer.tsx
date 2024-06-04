import { Button, Form, Input } from 'antd';
import { PaperClipOutlined, SendOutlined } from '@ant-design/icons';

function ChatInputContainer() {
  return (
    <div className="flex w-full justify-between gap-3 items-center">
      <div className="flex w-full h-full justify-between rounded-xl bg-gray-100 p-2 gap-3">
        <Form.Item name="messages" noStyle>
          <Input.TextArea
            autoFocus
            size="large"
            autoSize={{ maxRows: 6, minRows: 1 }}
            bordered={false}
            placeholder="Enter message"
          ></Input.TextArea>
        </Form.Item>
        <Form.Item name="files" noStyle>
          <PaperClipOutlined style={{ fontSize: '22px' }} />
        </Form.Item>
      </div>
      <Form.Item noStyle>
        <Button className="bg-primary-green-color py-6 px-4 text-white flex justify-center items-center cursor-pointer">
          <SendOutlined style={{ fontSize: '18px' }} />
        </Button>
      </Form.Item>
    </div>
  );
}

export default ChatInputContainer;
