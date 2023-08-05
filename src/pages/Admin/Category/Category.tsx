import { useEffect, useState } from "react";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { ICategory } from "../../../interface/category";

interface IProps {
  category: ICategory[];
  deletecate: (id: number) => void;
}
const Category = (props: IProps) => {
  const [data, setData] = useState<ICategory[]>([]);
  useEffect(() => {
    setData(
      props.category.map((pro: any) => {
        return { ...pro, key: pro.id };
      })
    );
  }, [props]);

  const columns: ColumnsType<ICategory> = [
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
      title: "Actions",
      key: "action",
      dataIndex: "action",
      render: (_, record) => (
        <>
          <Button
            type="primary"
            danger
            onClick={() => props.deletecate(Number(record.id))}
          >
            Delete
          </Button>
          <Link to={`/admin/category/update/${record.id}`}>
            <Button type="primary">Edit</Button>
          </Link>
        </>
      ),
    },
  ];

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Admin Category</h1>
        <Link to={`/admin/category/add`}>
          <Button type="primary">Add</Button>
        </Link>
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default Category;
