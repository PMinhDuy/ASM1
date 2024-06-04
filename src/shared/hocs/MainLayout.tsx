import Footer from '../components/layout/Footer';
import HeaderLayout from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import type { ReactNode } from 'react';
import SectionGetInformation from '../components/layout/SectionGetInformation';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="z-40">
      <HeaderLayout />
      <Navbar />
      {children}
      <SectionGetInformation />
      <Footer />
    </div>
  );
}

export default MainLayout;
