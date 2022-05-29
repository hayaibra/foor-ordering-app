import { Container, styled, Typography } from "@mui/material";

export const TitleBox = styled(Typography)(({ theme }) => ({
  color: theme.palette.othercolor.main,
  // marginLeft: "10px",
  // [theme.breakpoints.down("sm")]: {
  //   marginLeft: "-30px",
  // },
}));

export const Text = styled("p")(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: 0,

  [theme.breakpoints.only("md")]: {
    fontSize: "14px",
  },
}));
export const Phone = styled("p")(({ theme }) => ({
  marginTop: "5px",

  [theme.breakpoints.only("md")]: {
    fontSize: "15px",
  },
}));

export const FooterBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.othercolor.main,
}));
export const FooterInfoBox = styled(Container)(({ theme }) => ({
  // position: "relative",
  // height: "50vh",
  // padding: "40px",
  // display: "flex",
  // justifyContent: "space-around",
  // [theme.breakpoints.only("xs")]: {
  //   flexDirection: "column",
  // },
}));
