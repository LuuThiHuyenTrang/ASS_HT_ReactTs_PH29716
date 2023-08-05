import { Button, Form, Input, InputNumber, Select } from "antd";
import React from "react";
import { ICategory } from "../../../interface/category";
import { IProduct } from "../../../interface/product";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface IProp {
  categories: ICategory[];
  addcate: (category: ICategory) => void;
}

const AddCategory = (props: IProp) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    props.addcate(values);
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
        <h1>Category Add</h1>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
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

export default AddCategory;
