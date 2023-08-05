import { Button, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../../../interface/auth";
import { getOneUser } from "../../../api/auth";

const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface IProp {
  user: IUser[];
  edituser: (user: IUser) => void;
}

const UpdateUser = (props: IProp) => {
  const { id } = useParams();
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    getOneUser(Number(id)).then(({ data }) => setUser(data));
  }, []);
  const [form] = Form.useForm();
  const setFiedlds = () => {
    // set du lieu vao form de hien san pham minh muon cap nhat
    form.setFieldsValue({
      id: user?.id,
      name: user?.name,
      email: user?.email,
      role: user?.role,
    });
  };
  useEffect(() => {
    setFiedlds();
  }, [user]);

  const onFinish = (values: any) => {
    if (values.password != values.confirmPassword) {
      alert("Password khong khop");
    } else {
      props.edituser(values);
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <React.Fragment>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 900, textAlign: "center" }}
      >
        <h1>User Update</h1>
        <Form.Item
          name="id"
          label="Id"
          rules={[{ required: true }]}
          style={{ display: "none" }}
        >
          <Input />
        </Form.Item>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="confirmPassword"
          rules={[{ required: true }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item name="role" label="Role" rules={[{ required: true }]}>
          <Select placeholder="Select a option role" allowClear>
            <Option value="Admin">Admin</Option>
            <Option value="member">Member</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default UpdateUser;
