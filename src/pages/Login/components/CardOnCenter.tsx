import { CSSProperties, ReactElement } from "react";
import { Card, Col } from "antd";
import styled from "styled-components";

interface ICardOnCenterProps {
  children: ReactElement[] | ReactElement;
  title: string;
}

const CardOnCenter = (props: ICardOnCenterProps) => {
  return (
    <Col span={10} offset={8}>
      <FixedWidthCard title={props.title} headStyle={cardHeaderStyles}>
        {props.children}
      </FixedWidthCard>
    </Col>
  );
};

const FixedWidthCard = styled(Card)`
  width: 500px;
  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 5em;
  margin-left: 2.5em;
`;

const cardHeaderStyles: CSSProperties = {
  fontSize: "1.5em",
  textAlign: "center",
};

export default CardOnCenter;
