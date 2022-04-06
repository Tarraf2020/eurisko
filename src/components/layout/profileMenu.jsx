import React from "react";
import {
  IconButton,
  Divider,
  ListItemIcon,
  MenuItem,
  Menu,
  Avatar,
  Box,
  Tooltip,
  Dialog,
  DialogTitle,
  Button,
} from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import { connect } from "react-redux";
import { LogOutAuthAction } from "../../redux/actions/AuthActions";
import { useNavigate } from "react-router-dom";

const ProfileMenu = (props) => {
  const { user, logout } = props;
  const history = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(false);
  const [profile, setProfile] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };
  const PaperProps = {
    elevation: 0,
    sx: {
      overflow: "visible",
      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
      mt: 1.5,
      "& .MuiAvatar-root": {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
      },
      "&:before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: "background.paper",
        transform: "translateY(-50%) rotate(45deg)",
        zIndex: 0,
      },
    },
  };

  const Profile = (props) => {
    const { onClose, open } = props;
    const handleClose = () => {
      onClose(open);
    };

    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Profile INFO</DialogTitle>
        <ul>
          <li>ali</li>
          <li>ali</li>
          <li>ali</li>
        </ul>
        <Button onClick={handleClose}>Cancel</Button>
      </Dialog>
    );
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Profile settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={PaperProps}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => setProfile(true)}>
          <Avatar>A</Avatar> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => logout(history)}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <Profile onClose={() => setProfile(false)} open={profile} />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (history) => {
      dispatch(LogOutAuthAction(history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenu);
