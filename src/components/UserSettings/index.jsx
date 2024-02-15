import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Menu, MenuItem, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { selectProfile } from "store/auth/authSelectors";
import { logoutThunk } from "store/auth/authThunk";
import { notiflixConfirm } from "utils/notiflixMessages";
import {
  LogOutStyle,
  ProfileLinkStyle,
  SettingMenuStyle,
  SettingsBoxStyle,
  SettingsBtnStyle,
} from "./UserSettings.styled";
import Modal from "components/Modal";
import Profile from "components/Profile";
function UserSettings() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [modalProfile, setModalProfile] = useState(false);
  const dispatch = useDispatch();
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

  const handleModalToggle = useCallback(() => {
    setModalProfile((prev) => !prev);
  }, []);

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
          <Typography
            sx={ProfileLinkStyle}
            component="button"
            onClick={handleModalToggle}
          >
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
      {modalProfile && (
        <Modal closeModal={handleModalToggle}>
          <Profile closeModal={handleModalToggle} />
        </Modal>
      )}
    </SettingsBoxStyle>
  );
}

export default UserSettings;
