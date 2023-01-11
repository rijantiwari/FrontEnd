import {
  AppBar,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import NoteIcon from "@mui/icons-material/Note";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Header from "./Header";
import Footer from "./Footer";

const GridComponent = () => {
  const [posts, setPosts] = useState([]);
  const getPostData = () => {
    fetch("https://63b06aa0f9a53fa20268c6ed.mockapi.io/api/v1/Posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  };

  useEffect(() => {
    getPostData();
  }, []);
  console.log(posts, "test posts");
  return (
    <>
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
            {posts?.map((post) => {
              return (
                <Grid item key={post.id}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={post.post_image}
                      title={post.post_name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {post.post_name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default GridComponent;
