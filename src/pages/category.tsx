import { useGetCategoryByIdQuery, useGetProductsLazyQuery } from '#/generated/schemas';
import BannerLayout from '#/shared/components/layout/BannerLayout';
import SectionBranch from '#/shared/components/layout/SectionBranch';
import MainLayout from '#/shared/hocs/MainLayout';
import { Skeleton } from 'antd';
import Product from '../features/product/components/Product';
import { useParams } from 'react-router-dom';

function CategoryDetail() {
  const { id } = useParams();
  const [getLazyProducts, { data, loading: loadingProducts }] = useGetProductsLazyQuery();
  const { loading: loadingCategory } = useGetCategoryByIdQuery({
    variables: {
      id: id ?? '1',
    },
    onCompleted: (data) => {
      void getLazyProducts({
        variables: {
          categoryId: Number(data.category.id),
        },
      });
    },
  });
  const isLoading = loadingCategory || loadingProducts;
  return (
    <MainLayout>
      <>
        <BannerLayout />
        {isLoading ? (
          <div className="text-center grid grid-cols-5 h-52 gap-8 px-80 py-8 bg-[#FFFAF0]">
            <Skeleton.Button className="h-full w-full" />
            <Skeleton.Button className="h-full w-full" />
            <Skeleton.Button className="h-full w-full" />
            <Skeleton.Button className="h-full w-full" />
            <Skeleton.Button className="h-full w-full" />
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-8 space-y-6 px-80 py-8 bg-[#FFFAF0]">
            {data?.products.map((product) => <Product key={product.id} item={product} />)}
          </div>
        )}
        <SectionBranch />
      </>
    </MainLayout>
  );
}

export default CategoryDetail;
