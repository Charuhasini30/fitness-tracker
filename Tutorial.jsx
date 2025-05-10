import React from "react";
import styled from "styled-components";

const videos = [
  {
    title: "Warm-up Routine",
    url: "https://www.youtube.com/embed/2L2lnxIcNmo",
    duration: "10:30",
  },
  {
    title: "Full Body Workout",
    url: "https://www.youtube.com/embed/UItWltVZZmE",
    duration: "20:45",
  },
  {
    title: "Stretching Basics",
    url: "https://www.youtube.com/embed/2L2lnxIcNmo",
    duration: "8:15",
  },
  {
    title: "Fat Burning Workout",
    url: "https://www.youtube.com/embed/IT94xC35u6k",
    duration: "22:27",
  },
  {
    title: "Cardio Dance and Workout Toning",
    url: "https://www.youtube.com/embed/GOsucbWyTvs",
    duration: "47:14",
  },
  {
    title: "Bodyweight Workout",
    url: "https://www.youtube.com/embed/UoC_O3HzsH0",
    duration: "10:55",
  },
  {
    title: "Cardio kickboxing",
    url: "https://www.youtube.com/embed/Vve4BVTZ0QU",
    duration: "24:53",
  },
  {
    title: "Arm Workout",
    url: "https://www.youtube.com/embed/uvelApPtfuc",
    duration: "05:44",
  },
  {
    title: "Balance Exercise",
    url: "https://www.youtube.com/embed/uth_9K3EmDI",
    duration: "12:28",
  },
  {
    title: "Killer Lower body",
    url: "https://www.youtube.com/embed/8-PjpUH8TcE",
    duration: "35:51",
  },
  {
    title: "Body fat blast",
    url: "https://www.youtube.com/embed/CGmr02bfHUo",
    duration: "21:27",
  },
  {
    title: "Abs workout",
    url: "https://www.youtube.com/embed/Dl8N_8UtWUU",
    duration: "11:12",
  },

];

const Container = styled.div`
  flex: 1;
  padding: 24px 16px;
  height: 100%;
  overflow-y: scroll;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text_primary};
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
`;

const VideoCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
`;

const IframeWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 ratio */
  margin-bottom: 12px;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
`;

const VideoTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const VideoDuration = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Tutorial = () => {
  return (
    <Container>
      <Title>Watch Training Tutorials</Title>
      <VideoGrid>
        {videos.map((video, index) => (
          <VideoCard key={index}>
            <IframeWrapper>
              <StyledIframe
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </IframeWrapper>
            <VideoTitle>{video.title}</VideoTitle>
            <VideoDuration>{video.duration}</VideoDuration>
          </VideoCard>
        ))}
      </VideoGrid>
    </Container>
  );
};

export default Tutorial;
