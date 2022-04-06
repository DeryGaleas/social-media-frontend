import { Alert, Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { grey } from "@ant-design/colors";
import styled from "styled-components";
import {
  LoginMutation,
  LoginMutationVariables,
} from "../../../generated/graphql";
import { useState } from "react";
import { useRecoilRefresher_UNSTABLE } from "recoil";
import { isLoggedInSelector } from "../../../state/recoil";
import { gql, useMutation } from "@apollo/client";

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      refreshToken
      refreshExpiresIn
      payload {
        username
      }
    }
  }
`;

interface ILoginFormData {
  username: string;
  password: string;
}

const LoginForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const refreshIsLoggedInState =
    useRecoilRefresher_UNSTABLE(isLoggedInSelector);
  const [formData, setFormData] = useState({});

  const [loginMutation, { loading }] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LOGIN_USER, {
    onCompleted: (data) => {
      if (data) {
        console.log(data);
        localStorage.setItem("token", data.tokenAuth.token);
        localStorage.setItem("user", JSON.stringify(formData));

        refreshIsLoggedInState();
      }
    },
    onError: () => {
      setShowAlert(true);
    },
  });

  const onSubmit = async (values: ILoginFormData) => {
    setFormData(values);
    await loginMutation({
      variables: { ...values },
    });
  };

  return (
    <Form layout={"vertical"} onFinish={onSubmit}>
      {showAlert && (
        <Alert
          message="Username and Password are incorrect"
          type="error"
          showIcon
          closable
          onClose={() => setShowAlert(false)}
          style={{ marginBottom: "15px" }}
        />
      )}

      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password prefix={<LockOutlined />} />
      </Form.Item>

      <Form.Item>
        <FullWidthButton type="primary" htmlType="submit" loading={loading}>
          Log in
        </FullWidthButton>
        <SubmitHelperAnchor href={""}>
          No Account? Create One
        </SubmitHelperAnchor>
      </Form.Item>
    </Form>
  );
};

const FullWidthButton = styled(Button)`
  width: 100%;
`;

const SubmitHelperAnchor = styled.a`
  display: block;
  margin-top: 5px;
  text-align: center;
  color: ${grey[3]};
`;

export default LoginForm;
