import type { ReactNode } from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

interface FooterInformationContainerProps {
  icon: ReactNode;
  title: string;
  detail?: string;
}

function FooterInformationContainer({ icon, title, detail }: FooterInformationContainerProps) {
  return (
    <div className="text-white flex items-center">
      <div className="mr-3 bg-yellow-400 flex justify-center items-center p-2 rounded-lg">{icon}</div>
      <div className="flex flex-col">
        <Text className="text-white">{title}</Text>
        <Text className="text-primary-yellow-color font-bold">{detail}</Text>
      </div>
    </div>
  );
}

export default FooterInformationContainer;
