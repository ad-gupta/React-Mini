import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Card from "../components/main/Card";
import { Link } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`http://localhost:8000/api/videos/${type}`);
      setVideos(res.data);
      // console.log(res)
    };
    fetchVideos();
  }, [type]);
  // console.log(axios.isCancel('something'));
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container>
        {videos.map((item) => (
          <Card
            key={item._id}
            title={item.title}
            desc={item.desc}
            imgUrl={item.imgUrl}
            videoUrl={item.videoUrl}
            views={item.views}
            tags={item.tags}
            likes={item.likes}
            dislikes={item.dislikes}
            createdAt={item.createdAt}
            userId={item.userId}
            _id={item._id}
            ownerName={item.ownerName}
            userImgUrl={item.userImgUrl}
          />
        ))}
        {/* <Card/> */}
      </Container>
    </Link>
  );
};

export default Home;
