import React from "react";
import { styled } from "styled-components";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ShareIcon from "@mui/icons-material/Share";
import SaveIcon from "@mui/icons-material/Save";
import CommentCard from "../components/main/CommentCard";
import RecCard from "../components/main/RecCard";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
  top: 0;
  z-index: 500;
`;

const Recommendations = styled.div`
  flex: 2;
`;

const VideoImg = styled.img`
  height: 77vh;
  margin-left: 30px;
`;

const Wrapper = styled.div`
  margin-left: 30px;
`;

const Title = styled.p`
  font-size: 20px;
  margin: 20px 0;
`;

const History = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const WatchHistory = styled.div`
  flex: 6;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.textSoft};
`;

const LikeDislikeShareSave = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
`;

const LikeBtn = styled.button`
  width: 70px;
  display: flex;
  align-items: center;
  border: none;
  color: ${({ theme }) => theme.textSoft};
  background-color: ${({ theme }) => theme.bg};
`;

const DislikeBtn = styled.button`
  width: 70px;
  display: flex;
  align-items: center;
  border: none;
  color: ${({ theme }) => theme.textSoft};
  background-color: ${({ theme }) => theme.bg};
`;

const ShareBtn = styled.button`
  width: 70px;
  display: flex;
  align-items: center;
  border: none;
  color: ${({ theme }) => theme.textSoft};
  background-color: ${({ theme }) => theme.bg};
`;

const SaveBtn = styled.button`
  width: 70px;
  display: flex;
  align-items: center;
  border: none;
  color: ${({ theme }) => theme.textSoft};
  background-color: ${({ theme }) => theme.bg};
`;

const ChannelBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const Channel = styled.div`
  display: flex;
  gap: 10px;
`;

const NameAndDesc = styled.div``;
const ChannelLogo = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const ChannelName = styled.p`
  font-weight: 500;
  font-size: 14px;
`;

const ChannelSub = styled.p`
  color: ${({ theme }) => theme.textSoft};
`;

const SubBtn = styled.button`
  background-color: rgb(148, 8, 8);
  color: white;
  width: 100px;
  border-radius: 5px;
  border: none;
`;
const Description = styled.div``;

const CommentSession = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0px;
`;

const UserLogo = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  flex: 1;
`;
const CommentInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme.textSoft};
  flex: 50;
  background-color: ${({ theme }) => theme.bg};
`;

const SubmitComment = styled.button`
  border: none;
  cursor: pointer;
  background-color: #898787;
  color: ${({ theme }) => theme.text};
  flex: 1;
  border-radius: 15px;
  padding: 5px;
`;
const Video = () => {
  return (
    <Container>
      <Content>
        <VideoImg src="/planet.jpg" />
        <Wrapper>
          <Title>React Node.js</Title>
          <History>
            <WatchHistory>7,948,154 . Jun 22, 2022</WatchHistory>
            <LikeDislikeShareSave>
              <LikeBtn>
                <ThumbUpOffAltIcon />
                Like
              </LikeBtn>
              <DislikeBtn>
                <ThumbDownOffAltIcon />
                Like
              </DislikeBtn>
              <ShareBtn>
                <ShareIcon />
                Like
              </ShareBtn>
              <SaveBtn>
                <SaveIcon />
                Like
              </SaveBtn>
            </LikeDislikeShareSave>
          </History>
          <ChannelBox>
            <Channel>
              <ChannelLogo src="/planet.jpg" alt="image" />
              <NameAndDesc>
                <ChannelName>AD Gupta</ChannelName>
                <ChannelSub>560K</ChannelSub>
              </NameAndDesc>
            </Channel>
            <SubBtn>SUBSCRIBE</SubBtn>
          </ChannelBox>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, quo
            odit aliquam aperiam nam consequatur neque consectetur hic explicabo
            accusantium voluptas consequuntur beatae corrupti ex! Aspernatur
            pariatur harum laudantium a!
          </Description>
          <CommentSession>
            <UserLogo src="/planet.jpg" />
            <CommentInput type="text" placeholder="Comment here..." />
            <SubmitComment>Comment</SubmitComment>
          </CommentSession>
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </Wrapper>
      </Content>
      <Recommendations>
        <h2>Recommendations</h2>
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
        <RecCard />
      </Recommendations>
    </Container>
  );
};

export default Video;
