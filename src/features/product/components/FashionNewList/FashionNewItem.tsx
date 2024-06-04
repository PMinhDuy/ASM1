import { Divider, Image, Typography } from 'antd';
import { FieldTimeOutlined, UserOutlined } from '@ant-design/icons';

interface FashionNewItemComponentProps {
  avatar: string;
  title: string;
  authorName: string;
  createdAt: string;
  content: string;
}

function FashionNewItemComponent({ avatar, title, authorName, createdAt, content }: FashionNewItemComponentProps) {
  return (
    <div className="w-full">
      <div>
        <Image width={350} className="rounded-xl" src={avatar} preview={false} />
      </div>
      <Typography.Text className="text-lg font-bold hover:text-primary-yellow-color cursor-pointer">
        {title}
      </Typography.Text>
      <div className="text-[#808080] flex items-center">
        <span className="flex items-center space-x-2">
          <UserOutlined />
          <Typography.Text className="text-[#808080]">{authorName}</Typography.Text>
        </span>
        <Divider type="vertical" className="text-black" />
        <span className="flex items-center space-x-2">
          <FieldTimeOutlined />
          <Typography.Text className="text-[#808080]">Ngày {createdAt}</Typography.Text>
        </span>
      </div>
      <p className="max-w-[350px] text-[#656565]">{content}</p>
    </div>
  );
}

export default FashionNewItemComponent;
