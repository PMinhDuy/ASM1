import { Image, Typography } from 'antd';
import type { Product as ProductType } from '../../../generated/schemas';
import { ShoppingCartOutlined } from '@ant-design/icons';

interface ProductInterface {
  item: Partial<ProductType>;
  className?: {
    titleColor?: string;
  };
}

export default function Product({
  item,
  className = {
    titleColor: 'text-black',
  },
}: ProductInterface) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="relative cursor-pointer">
        <Image src={item.images?.[0] ?? ''} preview={false} className="rounded-xl cursor-pointer hover:opacity-70" />
        <div className="absolute left-0 bottom-1 w-full flex items-end h-full opacity-0 hover:opacity-100 hover:transition-all hover:duration-300">
          <div className="bg-slate-700 hover:bg-primary-yellow-color hover:duration-100 hover:transition-all rounded-b-xl w-full space-x-2 h-1/5 flex justify-center items-center">
            <ShoppingCartOutlined className="text-white" />
            <Typography.Text className="text-white">Thêm vào giỏ hàng</Typography.Text>
          </div>
        </div>
      </div>
      <Typography.Text
        className={`text-base cursor-pointer hover:text-primary-green-color font-semibold ${className.titleColor}`}
      >
        {item.title}
      </Typography.Text>
      <div className="space-x-3">
        <Typography.Text className="text-base font-semibold text-primary-yellow-color">
          {item.price}$ USD
        </Typography.Text>
      </div>
    </div>
  );
}
