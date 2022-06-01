import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { Text, TitleBox, Phone } from "./Style";

function OurRest() {
  return (
    <div id="contact" style={{ padding: "60px 0" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          paddingLeft: { xs: "40px", sm: "60px", md: "0" },
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            flexBasis: { md: "200px", lg: "400px" },
            marginRight: { md: "30px", lg: "0" },
          }}
        >
          <Image
            src={require("../../public/imgs/footer.png")}
            width="300"
            height="500"
            style={{ left: "-50px" }}
            alt="footer"
          />
        </Box>
        <Box
          sx={{
            paddingTop: "30px",
            marginBottom: { xs: "30px" },
            flex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "30px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TitleBox
                varient="h1"
                fontWeight="bold"
                sx={{ fontSize: { xs: "20px", sm: "25px", lg: "30px" } }}
              >
                FIND OUR RESTURANTS
              </TitleBox>
            </Box>
          </Box>
          <Box
            sx={{ marginBottom: "20px", paddingLeft: { sm: "10px", md: "0" } }}
          >
            <Text>SENSO REST / Amercan st </Text>
            <Phone>+963987345098</Phone>
          </Box>
          <Box
            sx={{ marginBottom: "20px", paddingLeft: { sm: "10px", md: "0" } }}
          >
            <Text>AL MALKI REST / Al Mashrou alsabee st </Text>
            <Phone>+96393245067</Phone>
          </Box>
          <Box
            sx={{ marginBottom: "20px", paddingLeft: { sm: "10px", md: "0" } }}
          >
            <Text>SEANSATION REST / Mashrou alawokaf st </Text>
            <Phone>+963988167387</Phone>
          </Box>
          <Box
            sx={{ marginBottom: "20px", paddingLeft: { sm: "10px", md: "0" } }}
          >
            <Text>PIZZA RAMI / Al jamhouria st </Text>
            <Phone>+963937198489</Phone>
          </Box>
          <Box sx={{ paddingLeft: { sm: "10px", md: "0" } }}>
            <Text>NAPOLI / 8 azar st </Text>
            <Phone>+963975567123</Phone>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Box sx={{ marginBottom: "30px" }}>
            <TitleBox
              varient="h1"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "20px", sm: "25px", lg: "30px" },
                marginBottom: "30px",
              }}
            >
              WORKING HOURS
            </TitleBox>
          </Box>
          <Box
            sx={{ marginBottom: "20px", paddingLeft: { sm: "10px", md: "0" } }}
          >
            <Text>SUNDAY UNTIL THURSDAY</Text>
            <Phone>9:00 AM- 10:00 PM</Phone>
          </Box>
          <Box
            sx={{ marginBottom: "20px", paddingLeft: { sm: "10px", md: "0" } }}
          >
            <Text>MONDAY UNTIL THURSDAY</Text>
            <Phone>9:00 AM - 10:00 PM</Phone>
          </Box>
          <Box
            sx={{ marginBottom: "20px", paddingLeft: { sm: "10px", md: "0" } }}
          >
            <Text>SATURDAY UNTIL WEDNESDAY</Text>
            <Phone>9:00 AM - 11:00 PM</Phone>
          </Box>
          <Box
            sx={{ marginBottom: "20px", paddingLeft: { sm: "10px", md: "0" } }}
          >
            <Text>FRIDAY UNTIL WEDNESDAY</Text>
            <Phone>10:30 AM - 11:00 PM</Phone>
          </Box>
          <Box sx={{ paddingLeft: { sm: "10px", md: "0" } }}>
            <Text>SATURDAY UNTIL FRIDAY</Text>
            <Phone>12:00 AM - 12:00 PM</Phone>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default OurRest;
