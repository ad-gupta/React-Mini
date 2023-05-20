import React from "react";
import { styled } from "styled-components";
// import { format } from "timeago.js";

const Container = styled.div`
  width: 20vw;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.bgLighter};
  border-radius: 15px;
  cursor: pointer;
`;

const VideoImg = styled.img`
  width: 20vw;
  height: 27vh;
  border-radius: 15px;
`;

const Wrapper = styled.div``;

const IconAndTitle = styled.div`
  display: flex;
  gap: 10px;
`;

const Icon = styled.img`
  border-radius: 50%;
  height: 27px;
  width: 25px;
  margin-top: 15px;
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
  margin-left: 35px;
  gap: 10px;
`;

const Views = styled.p`
  color: ${({ theme }) => theme.textSoft};
`;

const Time = styled.p`
  color: ${({ theme }) => theme.textSoft};
`;
const Card = ({
  _id,
  userId,
  title,
  desc,
  imgUrl,
  videoUrl,
  views,
  tags,
  likes,
  dislikes,
  createdAt,
  ownerName,
  userImgUrl,
}) => {
  console.log(userImgUrl);
  return (
    <Container>
      <VideoImg src={imgUrl} />
      <Wrapper>
        <IconAndTitle>
          <Icon src={userImgUrl} alt="image" />
          <div>
            <Title>{title} </Title>
            <Owner>{ownerName}</Owner>
          </div>
        </IconAndTitle>
        <ViewsAndTime>
          <Views>{`${views} views`}</Views>
          <Time>{`• ${(createdAt)}`}</Time>
        </ViewsAndTime>
      </Wrapper>
    </Container>
  );
};

export default Card;
