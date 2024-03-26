import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/FetchAPI";

const PlaylistDetail = () => {
  // const [videos, setVideos] = useState([]);
  const [playList, setPlayList] = useState(null);
  const { id } = useParams();
  // console.log(playList);
  useEffect(() => {
    fetchFromAPI(`playlists?part=snippet&id=${id}`).then((data) =>
      setPlayList(data.items[0])
    );
    // fetchFromAPI(`playlistsItems?playlistId=${id}&part=snippet`);
  }, [id]);

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        justifyContent: "center",
        minHeight: "95vh",
      }}
    >
      {playList && (
        <Box
          sx={{ backgroundColor: "#1e1e1e", width: { sm: "100%", md: "40%" } }}
        >
          <Typography variant="subtitle1" color="#fff">
            {playList.snippet.title}
          </Typography>
          <Link to={`/channel/${playList.snippet.channelId}`}>
            <Typography variant="subtitle2" color="gray">
              {playList.snippet.channelTitle}
            </Typography>
          </Link>
        </Box>
      )}
    </Stack>
  );
};

export default PlaylistDetail;
