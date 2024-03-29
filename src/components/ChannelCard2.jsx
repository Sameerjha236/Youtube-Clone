import React from "react";
import { Typography, Box, CardContent, CardMedia, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard2 = ({ channel }) => {
  const convert = (k) => {
    let val = parseInt(k);
    if (val > 1000000000) return `${(val / 1000000000).toFixed(0)} B`;
    else if (val > 1000000) return `${(val / 1000000).toFixed(0)} M`;
    else if (val > 1000) return `${(val / 1000).toFixed(0)} K`;
    return val;
  };
  return (
    <Box
      sx={{
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        mt: "-1rem",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
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
            height: "3rem",
            width: "3rem",
            border: "1px solid #e3e3e3",
            mr: "1rem",
          }}
        />
        <Stack direction="column" justifyContent="start" alignItems="center">
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            {channel?.snippet?.title}
            <CheckCircle sx={{ ml: 1, fontSize: 15, color: "gray" }} />
          </Typography>
          {channel?.statistics?.subscriberCount && (
            <Typography variant="subtitle1">
              {`${convert(channel.statistics.subscriberCount)} `}subscribers
            </Typography>
          )}
        </Stack>
      </CardContent>
    </Box>
  );
};

export default ChannelCard2;
