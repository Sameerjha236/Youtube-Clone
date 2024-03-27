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

const VideoCard2 = ({ video: { id, snippet }, num }) => {
  return (
    <Card
      sx={{
        height: "150px",
        mb: "2rem",
        display: "flex",
        backgroundColor: "black",
      }}
    >
      <Link to={`/video/${id}`}>
        <CardMedia
          image={snippet.thumbnails.high.url}
          alt={snippet.title}
          sx={{
            width: "15rem",
            height: "100%",
          }}
        />
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: 90 }}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#fff"
          ></Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard2;
