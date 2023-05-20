import React from "react";
import { styled } from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = styled.div`
  position: sticky;
  top: 0;
  margin: 5px 0;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Input = styled.input`
  height: 35px;
  width: 30vw;
  border: 2px solid grey;
  border-right: none;
  outline: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 5px 20px;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.textSoft};
`;

const SearchBtn = styled.button`
  width: 35px;
  height: 35px;
  border: 2px solid grey;
  outline: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.textSoft};
  padding: 5px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 3px;
`;

const LoginButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid rgba(10, 104, 203);
  color: rgba(10, 104, 203);
  padding: 5px 15px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bg};
  margin: 5px;
  gap: 5px;
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const User = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

const UserImg = styled.img`
border-radius: 50%;
height: 27px;
width: 25px;
`

const Username = styled.p`

`
const Navbar = () => {
  const {currentUser} = useSelector((state) => state.user)
  console.log(currentUser)
  return (
    <Nav>
      <Container>
        <SearchBar>
          <Input type="text" placeholder="Search" />
          <SearchBtn>
            <SearchIcon />{" "}
          </SearchBtn>
        </SearchBar>
        { !currentUser ? <Link to="/signin" style={{ textDecoration: "none" }}>
          <LoginButton>
            <LoginIcon />
            SIGN IN
          </LoginButton>
        </Link> : 
        <User>
          <UserImg src={currentUser.imgUrl}/>
          <Username>{`Hi ${currentUser.name}`} </Username>
        </User>
        }
      </Container>
      <Hr />
    </Nav>
  );
};

export default Navbar;
