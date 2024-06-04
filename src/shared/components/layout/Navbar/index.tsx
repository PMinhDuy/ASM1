import { CaretDownFilled, PhoneOutlined } from '@ant-design/icons';
import { Divider, Dropdown, Typography } from 'antd';

const SideBarInformation = [
  {
    id: '0',
    title: 'Trang chủ',
  },
  {
    id: '1',
    title: 'Thời trang Nam',
    subItem: [
      {
        key: '1',
        label: <div>Sơ mi nam</div>,
      },
      {
        key: '2',
        label: <div>Quần âu nam</div>,
      },
      {
        key: '3',
        label: <div>Quần short nam</div>,
      },
    ],
  },
  {
    id: '2',
    title: 'Sản phẩm',
    subItem: [
      {
        key: '1',
        label: <div>Sản phẩm nổi bật</div>,
      },
      {
        key: '2',
        label: <div>Sản phẩm hot trend</div>,
      },
      {
        key: '3',
        label: <div>Sản phẩm khuyến mãi</div>,
      },
    ],
  },
  {
    id: '3',
    title: 'Bé trai',
  },
  {
    id: '4',
    title: 'Bé gái',
  },
  {
    id: '5',
    title: 'Tin tức',
  },
  {
    id: '6',
    title: 'Liên hệ',
  },
];

function NavBar() {
  return (
    <div className="h-16 flex px-40 items-center justify-between w-full bg-[#FFFAF0]">
      <div className="flex gap-12 relative justify-between">
        {SideBarInformation.map((item) => (
          <div key={item.id}>
            {item.subItem ? (
              <Dropdown menu={{ items: item.subItem }} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
                <div className="flex gap-1 text-primary-green-color font-bold hover:text-primary-yellow-color cursor-pointer">
                  <div className="text-base ">{item.title}</div>
                  <CaretDownFilled style={{ fontSize: '12px' }} />
                </div>
              </Dropdown>
            ) : (
              <div className="text-base text-primary-green-color hover:text-primary-yellow-color cursor-pointer font-bold">
                {item.title}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between space-x-4">
        <Divider type="vertical" className="bg-primary-green-color h-4" />
        <div className="flex items-center space-x-2">
          <PhoneOutlined />
          <Typography className="text-primary-green-color text-base font-semibold">Hotline: 1900 6750</Typography>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
