import { Col, Image, Row, Typography } from 'antd';
import Banner1 from '../../../assets/images/banner1.jpg';
import Banner2 from '../../../assets/images/banner2.jpg';
import Banner3 from '../../../assets/images/banner3.jpg';
import Each from '../common/Each';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { memo } from 'react';

const DataBanners = [
  {
    title: 'Miễn phí giao hàng',
    content: 'Miễn phí phip với đơn hàng > 498K',
  },
  {
    title: 'Thanh toán COD',
    content: 'Thanh toán khi nhận hàng (COD)',
  },
  {
    title: 'Khách hàng Vip',
    content: 'Ưu đãi dành cho khách VIP',
  },
  {
    title: 'Hỗ trợ bảo hành',
    content: 'Đổi, sửa đồ tại tất cả store',
  },
];

function BannerLayout() {
  return (
    <>
      <div className="bg-[#9F9B8F] w-full flex justify-center">
        <div className="flex items-center space-x-8 w-10/12">
          <Image src={Banner1} preview={false} />
          <Image src={Banner2} preview={false} />
          <Image src={Banner3} preview={false} />
        </div>
      </div>
      <div className="bg-primary-yellow-color py-6 flex justify-center items-center w-full">
        <Row gutter={[24, 24]} justify={'center'}>
          <Each
            arrayOf={DataBanners}
            render={(item, index) => (
              <Col key={index} className="text-white flex flex-col justify-center items-center">
                <ShoppingCartOutlined style={{ fontSize: '22px' }} />
                <Typography.Text className="text-white font-bold text-base uppercase">{item.title}</Typography.Text>
                <Typography.Text className="text-white font-semibold">{item.content}</Typography.Text>
              </Col>
            )}
          />
        </Row>
      </div>
    </>
  );
}

export default memo(BannerLayout);
