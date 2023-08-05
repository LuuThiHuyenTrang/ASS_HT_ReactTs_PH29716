import { useEffect, useState } from "react";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { IUser } from "../../../interface/auth";

interface IProps {
  users: IUser[];
  deleteuser: (id: number) => void;
}
const User = (props: IProps) => {
  const [data, setData] = useState<IUser[]>([]);
  useEffect(() => {
    setData(
      props.users.map((user: any) => {
        return { ...user, key: user.id };
      })
    );
  }, [props]);

  const columns: ColumnsType<IUser> = [
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
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
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
            onClick={() => props.deleteuser(Number(record.id))}
          >
            Delete
          </Button>
          <Link to={`/admin/auth/update/${record.id}`}>
            <Button type="primary">Edit</Button>
          </Link>
        </>
      ),
    },
  ];

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Admin User</h1>
        <Link to={`/admin/auth/add`}>
          <Button type="primary">Add</Button>
        </Link>
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default User;
