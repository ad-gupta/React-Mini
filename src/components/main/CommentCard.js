import React from "react";
import { styled } from "styled-components";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

const Container = styled.div`
  display: flex;
  gap: 15px;
  margin: 15px 0;
`;

const UserLogo = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const SubContainer = styled.div``;

const UserInfo = styled.div`
  display: flex;
  gap: 15px;
`;

const UserName = styled.p`
  font-weight: 100;
`;

const Time = styled.p`
  color: ${({ theme }) => theme.textSoft};
`;

const Desc = styled.p`
margin: 10px 0;
`;

const LikeDislike = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const LikeBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  color: ${({ theme }) => theme.textSoft};
  background-color: ${({ theme }) => theme.bg};
`;

const DislikeBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  color: ${({ theme }) => theme.textSoft};
  background-color: ${({ theme }) => theme.bg};
`;

const CommentCard = () => {
  return (
    <Container>
      <UserLogo src="/planet.jpg" />
      <SubContainer>
        <UserInfo>
          <UserName>Harsh Yadav</UserName>
          <Time>1 day ago</Time>
        </UserInfo>
        <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ex nostrum, iure officia pariatur maiores a, iste beatae autem obcaecati suscipit quos, in nemo odio atque unde culpa qui iusto.
        </Desc>
        <LikeDislike>
          <LikeBtn>
            <ThumbUpOffAltIcon />
          </LikeBtn>
          <DislikeBtn>
            <ThumbDownOffAltIcon />
          </DislikeBtn>
        </LikeDislike>
      </SubContainer>
    </Container>
  );
};

export default CommentCard;
