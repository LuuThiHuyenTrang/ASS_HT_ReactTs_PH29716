import { Button, Form, Input } from "antd";
import React from "react";
import { IUser } from "../interface/auth";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface IProp {
  users: IUser[];
  signin: (user: IUser) => void;
}

const SignIn = (props: IProp) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const data = props.users.find((item: any) => item.email === values.email);
    if (!data) {
      alert("User khong ton tai! Moi ban dang ky tai khoan moi");
    } else {
      if (data.password != values.password) {
        alert("Password khong dung!");
      } else {
        props.signin(data);
      }
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
        <h1>Sign In</h1>
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

export default SignIn;
