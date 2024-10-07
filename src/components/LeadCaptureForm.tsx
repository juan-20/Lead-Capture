import React, { useState } from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import confetti from 'canvas-confetti';

const { Option } = Select;

interface Field {
  name: string;
  type: string;
  label: string;
  required: boolean;
  options?: string[];
}

interface LeadCaptureFormProps {
  fields: Field[];
}

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ fields }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (changedValues: React.SetStateAction<{}>) => {
    setFormData({ ...formData, ...changedValues });
  };

  const onFinish = () => {
    console.log(formData);
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
    message.success('Form submitted successfully!');
  };

  return (
    <Form onFinish={onFinish} onValuesChange={handleChange}>
      {fields.map((field) => {
        switch (field.type) {
          case 'text':
          case 'email':
          case 'tel':
            return (
              <Form.Item
                key={field.name}
                label={field.label}
                name={field.name}
                rules={[
                  { required: field.required, message: `${field.label} is required!` },
                  field.type === 'email' ? { type: 'email', message: 'The input is not valid E-mail!' } : {},
                  field.type === 'tel' ? {
                    pattern: /^\(\d{2}\) \d{4,5}-\d{4}$/,
                    message: 'The input is not valid Phone number! The format is: (XX) XXXX-XXXX',
                  } : {},
                ]}
              >
                <Input type={field.type} />
              </Form.Item>
            );
          case 'select':
            return (
              <Form.Item
                key={field.name}
                label={field.label}
                name={field.name}
                rules={[{ required: field.required, message: `${field.label} is required!` }]}
              >
                <Select>
                  {field.options?.map((option) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            );
          case 'textarea':
            return (
              <Form.Item
                key={field.name}
                label={field.label}
                name={field.name}
                rules={[{ required: field.required, message: `${field.label} is required!` }]}
              >
                <Input.TextArea />
              </Form.Item>
            );
          default:
            return null;
        }
      })}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LeadCaptureForm;