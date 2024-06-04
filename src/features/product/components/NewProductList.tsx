import { Col, Image, Row } from 'antd';
import Each from '../../../shared/components/common/Each';
import ProductItem from './ProductItem';
import { useGetProductsQuery } from '../../../generated/schemas';

export default function NewProductListComponent() {
  const { data } = useGetProductsQuery();

  return (
    <Row gutter={[24, 24]}>
      <Col span={10}>
        <Image
          height={520}
          width={470}
          preview={false}
          src="//bizweb.dktcdn.net/100/455/315/themes/894917/assets/banner_new.png?1676282094225"
          className="rounded-xl"
        />
      </Col>
      <Col span={14} className="pl-16">
        <Row gutter={[24, 24]}>
          <Each
            arrayOf={data?.products.filter((item) => Number(item.id) <= 6) ?? []}
            render={(item) => (
              <Col key={item.id}>
                <ProductItem sizeImage={180} productItem={item} />
              </Col>
            )}
          />
        </Row>
      </Col>
    </Row>
  );
}
