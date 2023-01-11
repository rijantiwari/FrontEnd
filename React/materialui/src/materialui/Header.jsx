import {
  AppBar,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import NoteIcon from "@mui/icons-material/Note";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <AppBar position="relative" color="secondary">
        <Toolbar>
          <NoteIcon />
          <Typography variant="h6" component={Link} to="/home">
            Posts
          </Typography>
          <Typography variant="h6" component={Link} to="/about-us">
            About Us
          </Typography>
          <Typography variant="h6" component={Link} to="/contact-us">
            Contact Us
          </Typography>
          <Typography variant="h6" component={Link} to="/users">
            Users
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
