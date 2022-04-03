import CardOnCenter from "./components/CardOnCenter";
import LoginForm from "./components/LoginForm";
import styled from "styled-components";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import LoginCircles from "./assets/LoginCircles.svg";
import { Layout, Row } from "antd";
import LoginHeader from "./components/LoginHeader";
import { blue } from "@ant-design/colors";

const { Header, Content, Footer } = Layout;

const Login = () => {
  return (
    <Background>
      <TransparentLayout>
        <TransparentHeader>
          <LoginHeader />
        </TransparentHeader>
        <Content>
          <AllHeightRow align={"middle"}>
            <CardOnCenter title={"Login"}>
              <LoginForm />
            </CardOnCenter>
          </AllHeightRow>
        </Content>
        <TransparentFooter>
          <StatsCircle />
        </TransparentFooter>
      </TransparentLayout>
    </Background>
  );
};

const Background = styled.div`
  height: 100%;
  background-image: url(${LoginCircles});
  background-size: cover;
  position: relative;
`;

const TransparentLayout = styled(Layout)`
  background: transparent;
  height: 100%;
`;

const AllHeightRow = styled(Row)`
  height: 100%;
`;

const TransparentHeader = styled(Header)`
  background-color: transparent;
`;

const TransparentFooter = styled(Footer)`
  display: flex;
  background-color: transparent;
  padding: 0;
`;

const StatsCircle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  background-color: ${blue[5]};

  padding: 15em;

  clip-path: circle(85% at 90% 100%);
`;

export default Login;
