import { Col, Image, Row } from 'antd';

function SectionBranch() {
  return (
    <div className="bg-[#ffff] flex justify-center items-center">
      <Row gutter={[24, 0]} justify={'center'} align={'middle'} className="gap-x-8">
        <Col>
          <a href="#">
            <Image
              src="//bizweb.dktcdn.net/100/455/315/themes/894917/assets/img_brand_1.jpg?1676282094225"
              preview={false}
            />
          </a>
        </Col>
        <Col>
          <a href="#">
            <Image
              src="//bizweb.dktcdn.net/100/455/315/themes/894917/assets/img_brand_2.jpg?1676282094225"
              preview={false}
            />
          </a>
        </Col>
        <Col>
          <a href="#">
            <Image
              src="//bizweb.dktcdn.net/100/455/315/themes/894917/assets/img_brand_3.jpg?1676282094225"
              preview={false}
            />
          </a>
        </Col>
        <Col>
          <a href="#">
            <Image
              src="//bizweb.dktcdn.net/100/455/315/themes/894917/assets/img_brand_4.jpg?1676282094225"
              preview={false}
            />
          </a>
        </Col>
        <Col>
          <a href="#">
            <Image
              src="//bizweb.dktcdn.net/100/455/315/themes/894917/assets/img_brand_5.jpg?1676282094225"
              preview={false}
            />
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default SectionBranch;
