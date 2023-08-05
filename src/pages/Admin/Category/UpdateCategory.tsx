import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { ICategory } from "../../../interface/category";

import { getOneCate } from "../../../api/category";
import { useParams } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface IProp {
  categories: ICategory[];
  editcate: (category: ICategory) => void;
}

const UpdateCategory = (props: IProp) => {
  const { id } = useParams();
  const [category, setCategorys] = useState<ICategory>();
  useEffect(() => {
    getOneCate(Number(id)).then(({ data }) => setCategorys(data));
  }, []);
  const [form] = Form.useForm();
  const setFiedlds = () => {
    // set du lieu vao form de hien san pham minh muon cap nhat
    form.setFieldsValue({
      id: category?.id,
      name: category?.name,
    });
  };
  useEffect(() => {
    setFiedlds();
  }, [category]);

  const onFinish = (values: any) => {
    props.editcate(values);
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
        <h1>Category Update</h1>
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

export default UpdateCategory;
