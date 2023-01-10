import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <Container mt={2}>
          <Typography variant="h6" align="center">
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Something here to give the footer a purpose
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            {`Copyright © ${new Date().getFullYear()}`}
          </Typography>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
