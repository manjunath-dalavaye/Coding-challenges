import React, { useState } from 'react';
import type { FormInstance } from 'antd';
import { Button, Form, Input, Space, Typography } from 'antd';

interface SubmitButtonProps {
  form: FormInstance;
}

const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false);

  // Watch all values
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

const FormHandling: React.FC = () => {
  const [submitted,setSubmitated]=useState<{name:string; age:number} |null>(null);
  const [form] = Form.useForm();

  const onFinish=(values:{name:string; age:number})=>{
    setSubmitated(values);
  }
  return (
    <div>
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="age" label="Age" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Space>
          <SubmitButton form={form}>Submit</SubmitButton>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>

    {submitted && (
        <div>
        <Typography.Title level={3}>Submitted Data :</Typography.Title>
        <p><strong>Name:</strong>{submitted.name}</p>
    
        <p><strong>Age:</strong>{submitted.age}</p> 

        </div>
    )}
    </div>
  );
};

export default FormHandling;