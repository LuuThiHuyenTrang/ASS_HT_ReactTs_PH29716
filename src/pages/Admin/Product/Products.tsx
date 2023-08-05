import { IProduct } from "../../../interface/product";
import { useEffect, useState } from "react";
import { Button, Table, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link, useNavigate } from "react-router-dom";

interface IProps {
  products: IProduct[];
  deletepro: (id: number) => void;
}
const Product = (props: IProps) => {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    setData(
      props.products.map((pro: any) => {
        return { ...pro, key: pro.id, cateName: pro.category.name };
      })
    );
  }, [props]);

  const navigate = useNavigate();
  const [user, setUser] = useState(null); // Sử dụng null thay vì {}

  useEffect(() => {
    const data: any = localStorage.getItem("user");
    const parsedData = JSON.parse(data);

    if (parsedData && parsedData.role === "admin") {
      alert("Hello Admin " + parsedData.name);
      setUser(parsedData);
    } else {
      message.error("Mời bạn đăng nhập tài khoản admin");
      navigate("/signin");
    }
  }, [navigate]);

  const columns: ColumnsType<IProduct> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => <a>{name}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => <img src={image} alt="" />,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Category",
      dataIndex: "cateName",
      key: "cateName",
    },
    {
      title: "Actions",
      key: "action",
      dataIndex: "action",
      render: (_, record) => (
        <>
          <Button
            type="primary"
            danger
            onClick={() => props.deletepro(Number(record.id))}
          >
            Delete
          </Button>
          <Link to={`/admin/product/update/${record.id}`}>
            <Button type="primary">Edit</Button>
          </Link>
        </>
      ),
    },
  ];

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Admin Product</h1>
        <Link to={`/admin/product/add`}>
          <Button type="primary">Add</Button>
        </Link>
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default Product;
