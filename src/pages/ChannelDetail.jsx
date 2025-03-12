import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchFromAPI } from "../utils/FetchAPI";
import { ChannelCard, Videos } from "../components";

const ChannelDetail = () => {
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannel(data?.items[0]);
    });
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
        setNextPageToken(data.nextPageToken);
      }
    );
  }, [id]);

  const fetchMore = () => {
    fetchFromAPI(
      `search?channelId=${id}&part=snippet&order=date&pageToken=${nextPageToken}`
    ).then((data) => {
      setVideos([...videos, ...data.items]);
      setNextPageToken(data.nextPageToken);
    });
  };

  return (
    <Box minHeight="95vh" width="100%">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
            zIndex: "10",
            height: "15rem",
          }}
        />
        <ChannelCard channel={channel} marginTop="-7rem" />
      </Box>
      <Box display="flex" p="2">
        <Videos videos={videos} fetchMore={fetchMore} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
