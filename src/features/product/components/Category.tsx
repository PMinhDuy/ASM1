import { useGetProductsQuery } from '#/generated/schemas';
import Product from './Product';
import { Image } from 'antd';

interface Props {
  image: string;
  id: string;
}

function Category({ image, id }: Props) {
  const { data } = useGetProductsQuery({
    variables: {
      categoryId: Number(id),
      offset: 1,
      limit: 6,
    },
  });
  return (
    <div className="grid grid-cols-2">
      <Image height={600} width={600} preview={false} src={image} className="rounded-xl" />
      <div className="grid grid-cols-3 gap-8">
        {data?.products.map((product) => (
          <Product
            key={product.id}
            className={{ titleColor: Number(id) % 2 === 0 ? 'text-white' : '' }}
            item={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
