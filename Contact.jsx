import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styled from "styled-components";
import { FiPhone, FiFilePlus, FiMessageCircle } from "react-icons/fi";

// Styled components
const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 16px;
  background-color: #f3f3f4;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text_primary || "#000"};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
`;

const Card = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 300px;
  background: white;
  border-radius: 10px;
  padding: 30px 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 40px;
  color: rgb(33, 194, 243);
  margin-bottom: 16px;
`;

const CardTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
`;

const Bold = styled.span`
  font-weight: 600;
`;

const Button = styled.button`
  background: rgb(243, 33, 187);
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: rgb(214, 12, 174);
  }
`;

const Contact = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <Container>
      <Wrapper>
        <Title>Contact Us</Title>
        <CardContainer>
          <Card>
            <IconWrapper>
              <FiPhone />
            </IconWrapper>
            <CardTitle>By Phone</CardTitle>
            <Description>
              <Bold>(Monday to Friday, 9am to 4pm PST)</Bold>
              <br />
              North America Toll-Free: <br />
              <Bold>1-877-930-7483</Bold>
              <br />
              International: <br />
              <Bold>1-604-637-0780</Bold>
            </Description>
          </Card>

          <Card>
            <IconWrapper>
              <FiFilePlus />
            </IconWrapper>
            <CardTitle>Start a New Case</CardTitle>
            <Description>
              Just send us your questions or concerns by starting a new case and
              we will give you the help you need.
            </Description>
            <Button onClick={() => navigate("/new-case")}>Start Here</Button>
          </Card>

          <Card>
            <IconWrapper>
              <FiMessageCircle />
            </IconWrapper>
            <CardTitle>Live Chat</CardTitle>
            <Description>
              Chat with a member of our in-house team.
            </Description>
            <Button onClick={() => navigate("/chat")}>Start Chat</Button>
          </Card>
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
