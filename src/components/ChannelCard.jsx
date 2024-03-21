import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channel }) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      width: { md: "265px", xs: "356px" },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
    }}
  >
    <Link to={`/channel/${channel?.id?.channelId}`}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <CardMedia
          image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channel?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "170px",
            width: "170px",
            mb: 2,
            border: "1px solid #e3e3e3",
          }}
        />
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {channel?.snippet?.title}
          <CheckCircle sx={{ ml: 1, fontSize: 15, color: "gray" }} />
        </Typography>
      </CardContent>

      {channel?.statistics?.subscriberCount && (
        <Typography>
          {parseInt(channel?.statistics?.subscriberCount).toLocaleString()}{" "}
          Subscribers
        </Typography>
      )}
    </Link>
  </Box>
);

export default ChannelCard;
