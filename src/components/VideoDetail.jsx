import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";

import { Videos, ChannelCard2 } from "./";
import { fetchFromAPI } from "../utils/FetchAPI";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [channel, setChannel] = useState(null);
  const [desc, setDesc] = useState(false);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideo(data.items[0]);
      const cid = data.items[0].snippet.channelId;
      fetchFromAPI(`channels?part=snippet&id=${cid}`).then((data) => {
        setChannel(data?.items[0]);
      });
    });

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);
  if (!video) return "Loading...";
  const {
    snippet: { title, channelId, description },
    statistics: { viewCount, likeCount },
  } = video;

  const convert = (k) => {
    let val = parseInt(k);
    if (val > 1000000000) return `${(val / 1000000000).toFixed(0)} B`;
    else if (val > 1000000) return `${(val / 1000000).toFixed(0)} M`;
    else if (val > 1000) return `${(val / 1000).toFixed(0)} K`;
    return val;
  };
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
            <Typography variant="h6" color="#fff" p={2} fontWeight="bold">
              {title}
            </Typography>

            <Link to={`/channel/${channelId}`}>
              <ChannelCard2 channel={channel} />
            </Link>

            <Box
              sx={{
                backgroundColor: "#1e1e1e",
                color: "#fff",
                justifyContent: "center",
                alignItems: "center",
                ml: { md: "1rem" },
              }}
              minHeight="10vh"
              onClick={() => setDesc(!desc)}
            >
              <Stack
                direction="row"
                gap="2rem"
                alignItems="center"
                sx={{ px: 2, py: 1 }}
              >
                <Typography variant="subtitle1" sx={{ opacity: "0.7" }}>
                  {convert(viewCount)} Views
                </Typography>
                <Typography variant="subtitle1" sx={{ opacity: "0.7" }}>
                  {convert(likeCount)} Likes
                </Typography>
              </Stack>

              <Typography variant="body1" sx={{ px: 2 }}>
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
