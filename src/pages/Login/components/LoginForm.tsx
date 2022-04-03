import { Alert, Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { grey } from "@ant-design/colors";
import styled from "styled-components";
import { gql, useMutation } from "urql";
import {
  LoginMutation,
  LoginMutationVariables,
} from "../../../generated/graphql";
import { useEffect, useState } from "react";

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      isActive
      firstName
      lastName
    }
  }
`;

interface ILoginFormData {
  username: string;
  password: string;
}

const LoginForm = () => {
  const [showAlert, setShowAlert] = useState(false);

  const [loginResult, loginMutation] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LOGIN_USER);

  const { data: mutationData, error: mutationError, fetching } = loginResult;

  const onSubmit = async (values: ILoginFormData) => {
    await loginMutation({ ...values });
  };

  useEffect(() => {
    if (mutationData) {
      console.log(mutationData);
    } else if (mutationError) {
      setShowAlert(true);
    }
  }, [mutationData, mutationError]);

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
        <FullWidthButton type="primary" htmlType="submit" loading={fetching}>
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
