import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchSearchResults } from "../utils/FetchAPI";
import { Sidebar, Videos } from "../components";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");

  useEffect(() => {
    fetchSearchResults(`search?part=snippet&q=${selectedCategory}`).then(
      (data) => {
        setVideos(data.items);
        setNextPageToken(data.nextPageToken);
      }
    );
  }, [selectedCategory]);

  const fetchMore = () => {
    fetchSearchResults(
      `search?part=snippet&q=${selectedCategory}&pageToken=${nextPageToken}`
    ).then((data) => {
      setVideos([...videos, ...data.items]);
      setNextPageToken(data.nextPageToken);
    });
  };

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        justifyContent: { xs: "center", md: "space-around" },
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          p: { sx: 0, md: 2 },
          width: { md: "9rem" },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copywrite"
          variant="body2"
          sx={{ mt: "1.5", color: "#ffff" }}
        >
          This is Made By Sameer Jha
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          {selectedCategory}
          <span style={{ marginLeft: "0.5rem", color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} fetchMore={fetchMore} />
      </Box>
    </Stack>
  );
};

export default Feed;
