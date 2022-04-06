import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  Tooltip,
  Dialog,
  DialogTitle,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import ProfileMenu from "./profileMenu";
import TTG from "../../pics/TTG.png";
import "./layout.css";

export default function Nav() {
  const [profile, setProfile] = React.useState(false);

  const Profile = () => {
    return (
      <Dialog onClose={()=>setProfile(false)} open={profile}>
        <DialogTitle>Set backup account</DialogTitle>
        <ul>
          <li>ali</li>
          <li>ali</li>
          <li>ali</li>
        </ul>
      </Dialog>
    );
  };
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 10 }}>
      <AppBar position="fixed" color="grey">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Tooltip title="Home" placement="right">
              <Link to="/">
                <img src={TTG} alt="" height={60} width={60} />
              </Link>
            </Tooltip>
          </Typography>
          <TextField
            placeholder="Search"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <ProfileMenu name={"Ali"} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
