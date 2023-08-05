import { Button, Form, Input, Select } from "antd";
import React from "react";
import { IUser } from "../../../interface/auth";
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface IProp {
  adduser: (user: IUser) => void;
}

const AddUser = (props: IProp) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    if (values.password != values.confirmPassword) {
      alert("Password khong khop");
    } else {
      props.adduser(values);
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
        <h1>User Add</h1>
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

export default AddUser;
