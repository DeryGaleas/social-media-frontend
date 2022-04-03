import styled from "styled-components";
import { grey } from "@ant-design/colors";

const LoginHeader = () => {
  return (
    <Flex>
      <Logo>PingMe</Logo>
      <MenuUl>
        <li>
          <a>Contact Us</a>
        </li>
        <li>
          <a>Create Account</a>
        </li>
      </MenuUl>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuUl = styled.ul`
  a {
    color: ${grey[6]};

    :hover {
      text-decoration: underline;
    }
  }

  li {
    display: inline;
    margin-left: 30px;
  }
`;

const Logo = styled.h1`
  color: white;
  font-size: 2em;
`;

export default LoginHeader;
