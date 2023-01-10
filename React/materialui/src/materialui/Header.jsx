import {
  AppBar,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import NoteIcon from "@mui/icons-material/Note";

const Header = () => {
  return (
    <>
      <AppBar position="relative" color="secondary">
        <Toolbar spacing={2}>
          <NoteIcon />
          <Typography variant="h6"> Posts </Typography>
          <Typography variant="h6"> About Us</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
