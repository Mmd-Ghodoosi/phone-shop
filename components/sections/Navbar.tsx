import React from "react";
import Link from "next/link";

import { FaSearch, FaPhoneAlt } from "react-icons/fa";

import {
  AppBar,
  Avatar,
  Box,
  Toolbar,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#ccc" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* //! site name */}
        <Box>
          <Typography variant="h5">
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              <FaPhoneAlt />
            </Link>
          </Typography>
        </Box>
        {/* //! search  */}
        <Box display={"flex"}>
          <TextField variant="standard" placeholder="جستوجو" dir="rtl" />

          <Button type="submit" variant="text" sx={{ borderRadius: 50 }}>
            <FaSearch />
          </Button>
        </Box>

        {/* //! profile avatar */}
        <Box>
          <Link href={`/profile/id`}>
            <Avatar sx={{ bgcolor: "grey" }} />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
