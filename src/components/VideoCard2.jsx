import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import LiveTvIcon from "@mui/icons-material/LiveTv";

const VideoCard2 = ({ video: { id, snippet }, num }) => {
  return (
    <Card
      sx={{
        height: "12rem",
        mb: "2rem",
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        backgroundColor: "black",
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "#1e1e1e",
        },
      }}
    >
      <CardContent>
        <Typography sx={{ color: "white" }}>{num}</Typography>
      </CardContent>
      <Link to={`/video/${id}`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet.title}
          sx={{
            width: "15rem",
            height: { sm: "5rem", md: "100%" },
            objectFit: "fill",
          }}
        />
      </Link>
      <Link to={`/video/${id}`}>
        <CardContent sx={{ height: "100%" }}>
          <Typography variant="subtitle1" sx={{ color: "white" }}>
            {snippet.title}
          </Typography>
          <Link to={`/channel/${snippet.channelId}`}>
            <Typography variant="subtitle2" sx={{ color: "gray" }}>
              {snippet.channelTitle}
              <CheckCircle sx={{ fontSize: 12, ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard2;
