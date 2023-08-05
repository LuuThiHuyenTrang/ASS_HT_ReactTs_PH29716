import { Button, Form, Input, InputNumber, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  addpro: (product: IProduct) => void;
}

const AddProduct = (props: IProp) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    props.addpro(values);
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
        <h1>Product Add</h1>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="image" label="Image" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        {/* <Upload {...upFile}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload> */}
        <Form.Item name="price" label="Price" rules={[{ required: true }]}>
          <InputNumber prefix="" style={{ width: "100%" }} min={1} />
        </Form.Item>
        <Form.Item name="description" label="Desc" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="categoryId"
          label="Category"
          rules={[{ required: true }]}
        >
          <Select placeholder="Select a option category" allowClear>
            {props.categories.map((cate) => {
              return <Option value={cate.id}>{cate.name}</Option>;
            })}
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

export default AddProduct;
