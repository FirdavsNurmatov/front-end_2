import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";
import FormItem from "antd/es/form/FormItem";
import Cookies from "js-cookie";
import { useSignInAdmin } from "../../service/mutation/useSignInStore";

export const SignIn = () => {
  type FieldType = {
    login?: string;
    password?: string;
  };

  const navigate = useNavigate();

  const { mutate, isPending } = useSignInAdmin();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const { login, password } = values;
    if (login && password) {
      mutate(
        { login: login, password: password },
        {
          onSuccess: (values) => {
            Cookies.set("accessToken", values.data.accessToken, { expires: 7 });
            navigate("/app");
          },
          onError: (values) => {
            console.log("Login yoki parol noto'g'ri kiritilgan.");
          },
          onSettled: () => {},
        }
      );
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container">
      <div className="form">
        <div className="form__block">
          <img src={logo} alt="logo" className="form__logo" />
          <div className="sign_in__text_block">
            <h2 className="sign_in__title">Dasturga kirish</h2>
            <p className="sing_in__des">
              Iltimos, tizimga kirish uchun login va parolingizni kiriting.
            </p>
          </div>
          <Form
            name="basic"
            style={{ maxWidth: 343, width: "100%" }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="from__item">
              <Form.Item
                name="login"
                rules={[
                  { required: true, message: "Iltimos loginni kiriting!" },
                ]}
              >
                <Input
                  placeholder="Login"
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    paddingLeft: "50px",
                  }}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Iltimos parolni kiriting!" },
                ]}
              >
                <Input.Password
                  placeholder="Parol"
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    paddingLeft: "50px",
                  }}
                />
              </Form.Item>

              <FormItem
                style={{ textAlign: "right", textUnderlineOffset: "1px" }}
              >
                <Link to={"/"}>Parolni unutdingizmi?</Link>
              </FormItem>
            </div>
            <Button
              disabled={isPending}
              type="primary"
              style={{
                height: "49px",
                width: "100%",
                fontWeight: 500,
                fontSize: "18px",
                padding: "13px",
              }}
              htmlType="submit"
            >
              Kirish
            </Button>
            <Outlet />
          </Form>
        </div>
      </div>
    </div>
  );
};
