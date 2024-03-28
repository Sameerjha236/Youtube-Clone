import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/FetchAPI";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  // const [channel, setChannel] = useState(null);
  const [desc, setDesc] = useState(false);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideo(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);
  if (!video) return "Loading...";
  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
  } = video;
  console.log(description);
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography variant="h5" color="#fff" p={2} fontWeight="bold">
              {title}
            </Typography>

            <Link to={`/channel/${channelId}`}>
              <Typography variant="h6" color="#fff">
                {channelTitle}
                <CheckCircle
                  sx={{ fontSize: "0.8rem", color: "gray", ml: "0.2rem" }}
                />
              </Typography>
            </Link>

            <Box
              sx={{
                backgroundColor: "#1e1e1e",
                color: "#fff",
                justifyContent: "center",
                alignItems: "center",
              }}
              minHeight="10vh"
              onClick={() => setDesc(!desc)}
            >
              <Stack direction="row" gap="2rem" alignItems="center">
                <Typography variant="subtitle1" sx={{ opacity: "0.7" }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="subtitle1" sx={{ opacity: "0.7" }}>
                  {parseInt(likeCount).toLocaleString()} views
                </Typography>
              </Stack>

              <Typography>
                {desc
                  ? `${description}...show less`
                  : `${description.slice(0, 100)} ....more`}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ md: 1, xs: 5, ml: "0.5rem" }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
