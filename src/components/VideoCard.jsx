import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoUrl,
  demoVideoTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { md: "300px", xs: "100%" },
        borderRadius: 0,
        boxShadow: "none",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : { demoVideoUrl }}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: 90 }}>
        <Link to={videoId ? `/video/${videoId}` : { demoVideoUrl }}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
          </Typography>
        </Link>

        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, ml: "5px" }} />
            {snippet?.liveBroadcastContent === "live" && (
              <Typography
                sx={{
                  color: "red",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                Live
                <LiveTvIcon sx={{ ml: "10px", color: "red" }} />
              </Typography>
            )}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
