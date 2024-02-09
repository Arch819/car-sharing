import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Avatar, Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { selectIsLoggedIn, selectProfile } from "store/auth/authSelectors";
import { logoutThunk } from "store/auth/authThunk";
import { notiflixConfirm } from "utils/notiflixMessages";
import {
  LogOutStyle,
  NavLinkStyle,
  ProfileLinkStyle,
  SettingMenuItemStyle,
  SettingMenuListStyle,
  SettingMenuStyle,
  SettingsBoxStyle,
  SettingsBtnStyle,
} from "./UserSettings.styled";

function UserSettings() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name, avatar } = useSelector(selectProfile);

  const handleLogOut = async () => {
    try {
      await notiflixConfirm("logout");
      dispatch(logoutThunk());
    } catch (error) {
      return;
    }
  };

  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <SettingsBoxStyle>
      <SettingsBtnStyle onClick={handleOpenUserMenu}>
        <span>{name}</span>
        <Avatar
          alt={name}
          src={avatar}
          sx={{ width: 42, height: 42, margin: "0 auto" }}
        />
      </SettingsBtnStyle>
      <Menu
        sx={SettingMenuStyle}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        keepMounted
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        variant="menu"
      >
        <MenuItem sx={{ padding: "0" }} onClick={handleCloseUserMenu}>
          <Typography sx={ProfileLinkStyle} component={NavLink} to="profile">
            <ManageAccountsIcon />
            Profile
          </Typography>
        </MenuItem>
        <MenuItem sx={{ padding: "0" }} onClick={handleCloseUserMenu}>
          <LogOutStyle onClick={handleLogOut}>
            <LogoutIcon />
            LogOut
          </LogOutStyle>
        </MenuItem>
      </Menu>
    </SettingsBoxStyle>
  );
}

export default UserSettings;
