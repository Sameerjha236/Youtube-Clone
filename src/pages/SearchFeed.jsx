import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { fetchSearchResults } from "../utils/FetchAPI";
import { useParams } from "react-router-dom";
import { Videos } from "../components";
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchSearchResults(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
      setNextPageToken(data.nextPageToken);
    });
  }, [searchTerm]);

  const fetchMore = () => {
    fetchSearchResults(
      `search?part=snippet&q=${searchTerm}&pageToken=${nextPageToken}`
    ).then((data) => {
      setVideos([...videos, ...data.items]);
      setNextPageToken(data.nextPageToken);
    });
  };

  return (
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
        Result for {searchTerm}
        <span style={{ marginLeft: "0.5rem", color: "#F31503" }}>Videos</span>
      </Typography>
      <Videos videos={videos} fetchMore={fetchMore} />
    </Box>
  );
};

export default SearchFeed;
