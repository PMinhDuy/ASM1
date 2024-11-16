import BannerLayout from '../shared/components/layout/BannerLayout';
import CategoryLayout from '../shared/components/layout/CategoryLayout';
import MainLayout from '../shared/hocs/MainLayout';
import SectionBranch from '../shared/components/layout/SectionBranch';
import { useGetCategoriesQuery } from '#/generated/schemas';
import { Skeleton } from 'antd';
import Category from '../features/product/components/Category';

export default function Page() {
  const { data, loading } = useGetCategoriesQuery();

  return (
    <MainLayout>
      <>
        <BannerLayout />
        {loading ? (
          <div className="flex flex-col gap-6 w-full p-4">
            {Array.from({ length: 3 }, (_, i) => i).map((item) => (
              <div key={item} className="w-full h-80 flex flex-col gap-2">
                <Skeleton.Button className="w-1/2" />
                <div className="grid grid-cols-2 gap-4 h-full">
                  <Skeleton.Button className="w-full h-full rounded-xl" />
                  <div className="grid grid-cols-3 gap-4 h-full">
                    {Array.from({ length: 6 }, (_, i) => i).map((_, id) => (
                      <Skeleton.Button key={id} className="w-full h-full rounded-xl" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          data?.categories.map((category) => (
            <CategoryLayout
              key={category.id}
              id={category.id}
              title={category.name}
              className={{
                titleColor: Number(category.id) % 2 === 0 ? 'text-white' : 'text-primary-green-color',
                backgroundColor: Number(category.id) % 2 === 0 ? 'bg-primary-green-color' : 'bg-[#FFFAF0]',
                backgroundButtonColor: Number(category.id) % 2 === 0 ? 'bg-[#FFFAF0]' : 'bg-primary-green-color',
                buttonTextColor: Number(category.id) % 2 === 0 ? 'text-primary-green-color' : 'text-white',
              }}
              showButton={true}
              showSidebar={false}
            >
              <Category id={category.id} image={category.image} />
            </CategoryLayout>
          ))
        )}
        <SectionBranch />
      </>
    </MainLayout>
  );
}
