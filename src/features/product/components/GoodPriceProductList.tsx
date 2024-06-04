import { Col, Image, Row } from 'antd';
import Each from '#/shared/components/common/Each';
import ProductItem from './ProductItem';
import { Profiler } from 'react';
import { useGetProductsQuery } from '#/generated/schemas';

function GoodPriceProductListComponent() {
  const { data } = useGetProductsQuery();
  return (
    <Profiler
      id="GoodPriceProductList"
      onRender={(id, startTime) => {
        console.log(id, startTime);
      }}
    >
      <Row gutter={[24, 24]}>
        <Col span={10}>
          <Image
            height={520}
            width={470}
            preview={false}
            src="//bizweb.dktcdn.net/100/455/315/themes/894917/assets/banner_goodprice.png?1676282094225"
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
    </Profiler>
  );
}

export default GoodPriceProductListComponent;
