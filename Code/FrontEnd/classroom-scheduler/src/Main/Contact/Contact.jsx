import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ContactImage from "../../Assets/images/ContactImage.png";

const Contact = () => {
  return (
    <div id="contact">
      <Container
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 9,
        }}
      >
        <Button
          sx={{
            border: "4px solid currentColor",
            borderRadius: 0,
            height: "auto",
            py: 2,
            px: 5,
            color: "rgb(255, 174, 109)",
          }}
        >
          <Typography variant="h4" component="span">
            Got any questions? Need help?
          </Typography>
        </Button>
        <Typography variant="subtitle1" sx={{ my: 3 }} fontSize={"20px"}>
          We are here to help. Get in touch!
        </Typography>
        <Box
          component="img"
          src={ContactImage}
          alt="buoy"
          sx={{ width: 80, height: 80 }}
        />
      </Container>
    </div>
  );
};

export default Contact;
