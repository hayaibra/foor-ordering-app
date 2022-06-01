import React from "react";
import Image from "next/image";
import { Box, Typography, Grid, styled, Container } from "@mui/material";
import { FooterInfoBox, FooterBox } from "./Style";

const Footerr = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.othercolor.main,
}));

function Footer() {
  return (
    <Footerr style={{ padding: "60px 0" }}>
      <FooterBox>
        <Container>
          <Grid container spacing={10} my={4}>
            <Grid item md={3} xs={10} sm={6}>
              <Box>
                <Box>
                  <Image
                    src={require("../../public/imgs/logo.png")}
                    width="200"
                    height="50"
                    alt="logo"
                  />
                </Box>
                <Typography color="primary" my={3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim
                  elit, at dignissim enim.
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <div style={{ marginRight: "10px" }}>
                    <Image
                      src={require("../../public/imgs/icon1.png")}
                      width="28"
                      height="28"
                      alt="icon1"
                    />
                  </div>
                  <div style={{ marginRight: "10px" }}>
                    <Image
                      src={require("../../public/imgs/icon2.png")}
                      width="32"
                      height="32"
                      alt="icon2"
                    />
                  </div>
                  <div style={{ marginRight: "10px" }}>
                    <Image
                      src={require("../../public/imgs/icon3.png")}
                      width="30"
                      height="30"
                      alt="icon3"
                    />
                  </div>
                  <div style={{ marginRight: "10px" }}>
                    <Image
                      src={require("../../public/imgs/icon4.png")}
                      width="30"
                      height="30"
                      alt="icon4"
                    />
                  </div>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3} xs={10} sm={6}>
              <Box>
                <Typography
                  color="primary"
                  varient="h5"
                  sx={{ fontSize: "20px", fontWeight: 700 }}
                >
                  About
                </Typography>
                <Box>
                  <p
                    style={{
                      fontSize: "15px",
                      marginBottom: "5px",
                      color: "white",
                    }}
                  >
                    History
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      marginBottom: "5px",
                      color: "white",
                    }}
                  >
                    Our Team
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      marginBottom: "5px",
                      color: "white",
                    }}
                  >
                    Brand Guidelines
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      marginBottom: "5px",
                      color: "white",
                    }}
                  >
                    Terms & Condition
                  </p>
                  <p style={{ fontSize: "15px", color: "white" }}>
                    Privacy Policy
                  </p>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3} xs={10} sm={6}>
              <Box>
                <Typography
                  color="primary"
                  varient="h5"
                  sx={{ fontSize: "20px", fontWeight: 700 }}
                >
                  Services
                </Typography>
                <Box>
                  <p
                    style={{
                      fontSize: "15px",
                      marginBottom: "5px",
                      color: "white",
                    }}
                  >
                    How to Order
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      margin: "10px 0 5px 0",
                      color: "white",
                      display: "block",
                    }}
                  >
                    <a
                      href="#p"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Our Product
                    </a>
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      marginBottom: "5px",
                      color: "white",
                    }}
                  >
                    Order Status
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      marginBottom: "5px",
                      color: "white",
                    }}
                  >
                    Promo
                  </p>
                  <p style={{ fontSize: "15px", color: "white" }}>
                    Payment Method
                  </p>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3} xs={10} sm={6}>
              <Box>
                <Typography
                  color="primary"
                  varient="h5"
                  sx={{ fontSize: "20px", fontWeight: 700 }}
                >
                  Other
                </Typography>
                <Box>
                  <p
                    style={{
                      fontSize: "15px",
                      marginBottom: "5px",
                      color: "white",
                    }}
                  >
                    Contact Us
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      marginBottom: "5px",
                      color: "white",
                    }}
                  >
                    Help
                  </p>
                  <p style={{ fontSize: "15px", color: "white" }}>Privacy</p>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </FooterBox>
      <p
        style={{
          color: "white",
          textAlign: "center",
          position: "relative",
          bottom: "-36px",
          marginBottom: 0,
          fontSize: "10px",
        }}
      >
        Designed By HAYA IBRAHIM
      </p>
    </Footerr>
  );
}

export default Footer;
