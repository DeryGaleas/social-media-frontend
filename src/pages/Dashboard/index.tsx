import { gql, useSubscription } from "@apollo/client";
import { All_MessagesSubscription } from "../../generated/graphql";
import { SearchOutlined} from '@ant-design/icons';
import { Row, Col, Input, Card, Avatar } from 'antd'
import styled from "styled-components";


const { Meta } = Card;

const ALL_MESSAGES = gql`
  subscription all_messages {
    myMessages {
      id
      content
      creationDate
      received
      seen
      sender {
        id
        username
      }
    }
  }
`;

const Dashboard = () => {
  useSubscription<All_MessagesSubscription>(ALL_MESSAGES, {
    onSubscriptionData: (data) => {
      console.log(data);
    },
  });
  return (
  <MainContainer>
    <Row>
      <Col span={1}></Col>
      <Col span={9}>
        <div>
        <Input placeholder="Buscar" prefix={<SearchOutlined />}/>
        <ContactContainer >

          <Card>
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Dery Galeas"
              description="jajajajaja"
            />
          </Card>

          <Card>
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Diego Romero"
              description="Activa el Docker!!!"
            />
          </Card>

          <Card>
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Cris"
              description="Anoun"
            />
          </Card>


        </ContactContainer>
        
        
        </div>

      </Col>
      <Col span={1}></Col>
      <Col span={12}>
        <ChatContainer>
        <Card style={{height:""}}>
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Dery Galeas"
              description="online"
            />
          </Card>

          <ChatText>Hola como estas?</ChatText>
         
        </ChatContainer>

      </Col>
      <Col span={1}></Col>
      
    </Row>
  
    </MainContainer>
  
  
  );
};

const MainContainer = styled.div`
  padding-top:30px;
  
  
  
 


`

const ContactContainer = styled.div`
  margin-top:20px;
   
`

const ChatContainer = styled.div`

  height:500px;
  background-color:#F4F3EC;

`

const ChatText = styled.div`
  margin-top:15px;
  margin-left:30px;
  background-color: white;
  width:150px;
  border: 1px solid #FCFBF7;
  border-radius: 5px;

`


export default Dashboard;
