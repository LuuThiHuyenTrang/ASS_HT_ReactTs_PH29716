import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { List, Space } from "antd";
import { useParams } from "react-router-dom";
import { IProduct } from "../interface/product";
import { getOnePro } from "../api/product";

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  useEffect(() => {
    getOnePro(Number(id)).then(({ data }) => setProduct(data));
  }, []);
  const data = Array.from({ length: 1 }).map((_) => ({
    href: "/detail/" + product?.id,
    title: `${product?.name}`,
    description: `${product?.price}`,
    content: `${product?.description}`,
  }));

  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
            extra={<img width={500} alt="logo" src={product?.image} />}
          >
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </>
  );
};

export default DetailPage;
