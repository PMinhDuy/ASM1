import CustomSelect from '../../common/CustomSelect';
import { Input } from 'antd';
import { type OptionType } from '#/shared/types/common';
import { SearchOutlined } from '@ant-design/icons';

const CLOTHES_TYPE_OPTIONS: OptionType[] = [
  {
    label: 'Tất cả',
    value: 'Tất cả',
  },
  {
    label: 'sadadas',
    value: 'asdadada',
  },
  {
    label: 'adadssadasdasasa',
    value: 'asdasasd',
  },
  {
    label: 'asdsad',
    value: 'asdasasd',
  },
  {
    label: 'asdasdad',
    value: 'asddadda',
  },
  {
    label: 'asdsadas',
    value: 'asdsadasdas',
  },
  {
    label: 'asdasdasda',
    value: 'asdsad',
  },
  {
    label: 'asdassa',
    value: 'asdsaasdsd',
  },
  {
    label: 'asdasdsdasd',
    value: 'asdsadas',
  },
  {
    label: 'asdasasd',
    value: 'asdasdasas',
  },
  {
    label: 'asdasd',
    value: 'asdsasd',
  },
];

function HeaderSearchInput() {
  return (
    <div className="w-[40%] h-1/2 rounded-full flex justify-between items-center bg-white">
      <CustomSelect options={CLOTHES_TYPE_OPTIONS} />
      <Input className="w-[60%] border-none shadow-none" placeholder="Tìm sản phẩm bạn mong muốn" />
      <div className="bg-primary-yellow-color h-full hover:opacity-80 rounded-r-full w-[14%] flex justify-center items-center cursor-pointer">
        <SearchOutlined className="text-white" style={{ fontSize: '22px' }} />
      </div>
    </div>
  );
}

export default HeaderSearchInput;
