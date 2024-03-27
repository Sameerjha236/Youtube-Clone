import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Stack, Typography, CardContent, CardMedia } from "@mui/material";
import { VideoCard2, Videos } from "./";
import { fetchFromAPI } from "../utils/FetchAPI";
import { demoPlaylist, demoProfilePicture } from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

const PlaylistDetail = () => {
  const [videos, setVideos] = useState([]);
  const [playList, setPlayList] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`playlists?part=snippet&id=${id}`).then((data) =>
      setPlayList(data.items[0])
    );
    fetchFromAPI(`playlistItems?playlistId=${id}&part=snippet`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);
  console.log(videos);
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
          sx={{
            background: "#1e1e1e",
            width: { sm: "100%", md: "30%" },
          }}
        >
          <Link to={`/playlist/${id}`}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                p: 4,
              }}
            >
              <CardMedia
                image={
                  playList?.snippet?.thumbnails?.high?.url || demoProfilePicture
                }
                alt={playList?.snippet?.title}
                sx={{
                  height: "170px",
                  width: "300px",
                  mb: 2,
                  borderRadius: "5%",
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
                {playList.snippet.title}
              </Typography>
            </CardContent>
          </Link>
          <Link to={`/channel/${playList.snippet.channelId}`}>
            <Typography
              variant="subtitle1"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "gray",
              }}
            >
              {playList.snippet.channelTitle}
              <CheckCircle sx={{ fontSize: 12, ml: "5px" }} />
            </Typography>
          </Link>
        </Box>
      )}
      {videos && (
        <Box
          p={2}
          sx={{
            overflowY: "auto",
            height: "90vh",
            width: { md: "100%" },
            ml: "2rem",
          }}
        >
          {videos.map((curr, idx) => (
            <VideoCard2 key={idx} video={curr} num={idx + 1} />
          ))}
        </Box>
      )}
    </Stack>
  );
};

export default PlaylistDetail;
