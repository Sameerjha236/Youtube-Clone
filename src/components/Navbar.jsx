import React from "react";
import { Stack, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { GitHub, Language } from "@mui/icons-material"; // Import icons
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="Youtube" height={45} />
    </Link>
    <SearchBar />
    <Box>
      <IconButton
        component={Link}
        to="https://github.com/Sameerjha236"
        target="_blank"
        aria-label="GitHub"
        sx={{ mr: "1rem" }}
      >
        <GitHub
          sx={{
            color: "#fff",
            fontSize: "2rem",
            transition: "background-color 0.3s",
            "&:hover": {
              color: "gray",
            },
          }}
        />
      </IconButton>

      <IconButton
        component={Link}
        to="https://sameerjha.netlify.app/"
        target="_blank"
        aria-label="Website"
      >
        <Language
          sx={{
            color: "#fff",
            fontSize: "2rem",
            transition: "background-color 0.3s",
            "&:hover": {
              color: "gray",
            },
          }}
        />
      </IconButton>
    </Box>
  </Stack>
);

export default Navbar;
