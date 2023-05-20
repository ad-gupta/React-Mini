import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  width: 20vw;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.bgLighter};
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const VideoImg = styled.img`
  width: 10vw;
  height: 12vh;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  margin-left: 10px;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.text};
`;

const Owner = styled.p`
  color: ${({ theme }) => theme.textSoft};
`;

const ViewsAndTime = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.textSoft};
`;

const Views = styled.p`
  color: ${({ theme }) => theme.textSoft};
`;

const Time = styled.p`
  color: ${({ theme }) => theme.textSoft};
`;
const RecCard = ({ size }) => {
  return (
    <Container>
      <VideoImg src="/planet.jpg" alt="image" />
      <Wrapper>
        <Title>My First Video</Title>
        <Owner>AD Gupta</Owner>
        <ViewsAndTime>
          <Views>4865</Views>
          <Time>- 1 day ago</Time>
        </ViewsAndTime>
      </Wrapper>
    </Container>
  );
};

export default RecCard;
