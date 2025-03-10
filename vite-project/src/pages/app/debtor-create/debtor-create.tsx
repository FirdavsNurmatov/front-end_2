import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, FormProps, Input, Upload } from "antd";
import { usePostDebtor } from "./service/mutation/usePostDebt";

const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export const DebtorCreate = () => {
  const { mutate, isPending } = usePostDebtor();

  const onFinish: FormProps["onFinish"] = (values) => {
    values.store_id = localStorage.getItem("store_id");
    mutate(values, {
      onSuccess: (res) => {
        console.log(res);
        (window as any).succes("Mijoz yaratildi!");
      },
      onError: (res) => {
        console.log(res);
      },
    });
  };

  const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container">
      <Form
        className="debtor-create"
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 14, offset: 1 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // autoComplete="off"
      >
        <Form.Item
          label="To'liq ismi"
          name={"full_name"}
          rules={[
            { required: true, message: "To'liq ismini kiriting!" },
            {
              min: 5,
              message: "To'liq ism 5 ta belgidan kam bo'lmasligi kerak!",
            },
          ]}
        >
          <Input placeholder="Otabek Ergashev Odil o'g'li" />
        </Form.Item>
        <Form.Item
          label="Telefon raqami"
          name={"phone_number"}
          rules={[
            { required: true, message: "Telefon raqamini kiriting!" },
            {
              pattern: /^\+998\d{9}$/,
              message: "Telefon raqami +998XXXXXXXX formatida bo'lishi kerak!",
            },
          ]}
        >
          <Input placeholder="+998950774740" />
        </Form.Item>
        <Form.Item
          label="Yashash manzili"
          name={"address"}
          rules={[
            { required: true, message: "Yashash manzilini kiriting!" },
            {
              min: 10,
              message: "Yashash manzili 10 ta belgidan kam bo'lmasligi kerak!",
            },
          ]}
        >
          <Input placeholder="Yashnabod, Kadisheva b. S3. 56-uy" />
        </Form.Item>
        <Form.Item label="Eslatma" name={"note"}>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Rasm biriktirish"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          name={"file"}
        >
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                color: "inherit",
                cursor: "inherit",
                border: 0,
                background: "none",
              }}
              type="button"
            >
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 7, span: 14 }}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={isPending}
            style={{
              width: "100%",
              fontSize: "20px",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          >
            Saqlash
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
