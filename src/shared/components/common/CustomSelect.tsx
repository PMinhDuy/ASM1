import { Divider, Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { type OptionType } from '#/shared/types/common';
import styled from 'styled-components';

interface CustomSelectProps {
  options: OptionType[];
}

const SelectStyled = styled(Select)`
  .ant-select-arrow {
    display: none !important;
  }
`;

function CustomSelect({ options }: CustomSelectProps) {
  return (
    <div className="cursor-text pl-2 flex items-center justify-between">
      <SelectStyled
        options={options}
        defaultValue={options[0].value}
        className="w-24"
        bordered={false}
        dropdownStyle={{ width: '160px', top: '4.23rem' }}
      />
      <div className="relative cursor-pointer">
        <Divider type="vertical" className="h-8" />
        <div className="absolute top-2 bg-white w-4 h-4 pt-[1px] flex justify-center items-center text-slate-300 rounded-full border">
          <DownOutlined className="text-gray-600" style={{ fontSize: '9px' }} />
        </div>
      </div>
    </div>
  );
}

export default CustomSelect;
