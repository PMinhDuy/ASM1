import { Button, Input, Typography } from 'antd';
import { memo } from 'react';

function SectionGetInformation() {
  return (
    <div className="w-full bg-primary-yellow-color px-[200px] py-[30px] flex justify-between items-center">
      <Typography.Text className="font-bold text-lg text-white">NHẬP THÔNG TIN KHUYẾN MÃI TỪ CHÚNG TÔI</Typography.Text>
      <div className="flex">
        <Input placeholder="Nhập email của bạn" size="large" className="min-w-[400px]" />
        <Button className="bg-[#333] px-7 ml-[-10px] font-semibold text-white border-0" size="large">
          Gửi
        </Button>
      </div>
    </div>
  );
}

export default memo(SectionGetInformation);
