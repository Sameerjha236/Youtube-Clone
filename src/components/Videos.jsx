import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard, PlayListCard } from "./";
import InfiniteScroll from "react-infinite-scroll-component";

const Videos = ({ videos, fetchMore }) => {
  return (
    <Stack sx={{ width: "100%", overflowY: "auto" }}>
      <Box width="100%" overflowY="auto">
        <InfiniteScroll
          hasMore={true}
          dataLength={videos.length}
          loader={<h4>Loading...</h4>}
          next={fetchMore || (() => {})}
          style={{ width: "100%" }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(3, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: 3,
              justifyContent: "center",
              width: "100%",
              overflowY: "auto",
            }}
          >
            {videos.map((item, idx) => (
              <Box key={idx}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channel={item} />}
                {item.id.playlistId && <PlayListCard playlist={item} />}
              </Box>
            ))}
          </Box>
        </InfiniteScroll>
      </Box>
    </Stack>
  );
};

export default Videos;
