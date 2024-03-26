import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const PlayListCard = ({
  playlist: {
    id: { playlistId },
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
      <Link to={`/playlist/${playlistId}`}>
        <CardMedia
          image={snippet?.thumbnails?.high.url}
          alt={snippet.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: 90 }}>
        <Link to={`/playlist/${playlistId}`}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet.title.slice(0, 50)}
            (Playlist)
          </Typography>
        </Link>
        <Link to={`/channel/${snippet.channelId}`}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet.channelTitle}
            <CheckCircle sx={{ fontSize: 12, ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default PlayListCard;
