import {
  Form,
  Input,
  DatePicker,
  Select,
  Upload,
  Button,
  FormProps,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { usePostCreateDebt } from "./service/mutation/usePostCreateDebt";
import { useNavigate, useParams } from "react-router-dom";

const { Option } = Select;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export const CreateDebt = () => {
  const [form] = Form.useForm();
  const { mutate, isPending } = usePostCreateDebt();
  const { id } = useParams();
  const navigate = useNavigate();

  const onFinish: FormProps["onFinish"] = (values) => {
    if (id) {
      const data = {
        debtor_id: id,
        name: values.productName,
        debt_date: values?.date,
        debt_period: Number(values.period),
        debt_sum: Number(values?.productPrice),
        description: values?.des,
      };

      mutate(data, {
        onSuccess: () => {
          message.success("Mijoz yaratildi!");
          navigate("/app/debtors");
        },
        onError: () => {
          message.warning("Xatolik yuz berdi, qayta urinib ko'ring");
        },
      });
    } else {
      console.log("id not found!");
    }
  };

  const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Nasiya yaratish</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Mahsulot nomi *"
          name="productName"
          rules={[
            { required: true, message: "Iltimos, mahsulot nomini kiriting!" },
          ]}
        >
          <Input placeholder="Ismini kiriting" />
        </Form.Item>
        <Form.Item
          label="Mahsulot narxi"
          name="productPrice"
          rules={[
            {
              required: true,
              message: "Iltimos, mahsulot narxini kiriting!",
            },
            {
              pattern: /^\d+$/,
              message: "Faqat son kiriting!",
            },
          ]}
        >
          <Input placeholder="Narxini kiritng" />
        </Form.Item>
        <Form.Item label="Sana" name="date">
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="Muddati" name="period">
          <Select placeholder="Qarz muddatini tanlang">
            <Option value="1">1 oy</Option>
            <Option value="3">3 oy</Option>
            <Option value="6">6 oy</Option>
            <Option value="9">9 oy</Option>
            <Option value="12">12 oy</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Izoh qo‘shish" name="des">
          <Input.TextArea placeholder="Izoh qo‘shish" />
        </Form.Item>
        <Form.Item
          label="Rasm biriktirish"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          name="image"
        >
          <Upload>
            <Button icon={<UploadOutlined />}>Rasm qo‘shish</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block disabled={isPending}>
            Saqlash
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
