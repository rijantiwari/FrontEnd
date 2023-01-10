import {
  AppBar,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import NoteIcon from "@mui/icons-material/Note";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Header from "./Header";
import Footer from "./Footer";

const GridComponent = () => {
  return (
    <>
      <Header />
      <main>
        <Grid>
          <Container>
            <Typography variant="h2" textAlign="center">
              Posts
            </Typography>
            <Typography variant="h6" textAlign="center" color="textSecondary">
              Description Here
            </Typography>
            <Grid>
              <Grid container justifyContent="center" spacing={2} mt={1}>
                <Grid item>
                  <Button variant="contained">Primary Button</Button>{" "}
                </Grid>
                <Grid item>
                  <Button variant="outlined">Secondary Button</Button>{" "}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Container>
          <Grid container spacing={4} mt={0.5}>
            <Grid item>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://source.unsplash.com/random"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://source.unsplash.com/random"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://source.unsplash.com/random"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default GridComponent;
