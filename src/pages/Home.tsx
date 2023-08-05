import { useState, useEffect } from "react";
import { IProduct } from "../interface/product";
import { EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

interface IProps {
  products: IProduct[];
}
const HomePage = (props: IProps) => {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    setData(
      props.products.map((pro: any) => {
        return { ...pro, key: pro.id, cateName: pro.category.name };
      })
    );
  }, [props]);

  return (
    <>
      <Row gutter={16}>
        {data.map((item: any) => {
          return (
            <Col span={6} key={item.id}>
              <Card
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src={item.image}
                    style={{
                      maxWidth: 300,
                      maxHeight: 150,
                    }}
                  />
                }
                actions={[
                  <Link to={"/detail/" + item.id}>
                    <EditOutlined key="Detail" />
                  </Link>,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta title={item.price} description={item.name} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomePage;
