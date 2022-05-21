import {
  NavContainer,
  LogoImg,
  LogoLink,
  NavInnerContainer,
} from "./Nav.Styles";
import logo from "../../Assets/reactMovie_logo.png";
import { List, Switch } from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { ModeNight } from "@mui/icons-material";

function Nav(mode, setMode) {
  return (
    <NavContainer as={"header"}>
      <NavInnerContainer>
        <LogoLink to={"/"}>
          <LogoImg src={logo} alt={"Logo"} />
        </LogoLink>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
          </ListItemButton>
        </List>
      </NavInnerContainer>
    </NavContainer>
  );
}

export default Nav;
