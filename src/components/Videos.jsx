import React from "react";
import { Stack, Box } from "@mui/material";

const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((videos, idx) => (
        <Box key={idx}></Box>
      ))}
    </Stack>
  );
};

export default Videos;
