import { Button, Card, Col, Form, Input, Row } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { grey } from "@ant-design/colors";

const Login = () => {
  return (
    <Row style={{ height: "100%" }} align={"middle"}>
      <Col span={10} offset={8}>
        <Card
          title="Login"
          headStyle={{ textAlign: "center", fontSize: "1.5em" }}
          style={{ width: "500px" }}
        >
          <Form layout={"vertical"}>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password prefix={<LockOutlined />} />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Log in
              </Button>

              <a
                style={{
                  color: grey[3],
                  display: "block",
                  marginTop: "5px",
                  textAlign: "center",
                }}
                href={""}
              >
                No Account? Create One
              </a>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
