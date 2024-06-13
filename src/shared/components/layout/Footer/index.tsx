import { ClockCircleFilled, EnvironmentFilled, PhoneFilled } from '@ant-design/icons';
import FooterInformationContainer from './FooterInformationContainer';
import Logo from '../../common/Logo';
import { memo } from 'react';

const SHOP_INFORMATION = [
  {
    icon: <EnvironmentFilled />,
    title: 'Tầng 6, Tòa nhà Ladeco, 266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, TP Hà Nội',
  },
  {
    icon: <ClockCircleFilled />,
    title: 'Giờ làm việc: Từ 9:00 đến 22:00 các ngày trong tuần từ Thứ 2 đến Chủ nhật',
  },
  {
    icon: <PhoneFilled />,
    title: 'Hotline',
    detail: '1900 6750',
  },
];

function Footer() {
  return (
    <div className="w-full bg-[#212529] px-[200px] py-10">
      <div className="flex flex-col gap-8">
        <div className="w-fit">
          <Logo />
        </div>
        <div className="flex flex-col gap-4">
          {SHOP_INFORMATION.map((item, id) => (
            <FooterInformationContainer key={id} icon={item.icon} title={item.title} detail={item.detail} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(Footer);
