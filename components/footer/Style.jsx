import { styled, Typography } from "@mui/material";

export const TitleBox = styled(Typography)(({ theme }) => ({
  color: theme.palette.othercolor.main,
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

export const FooterInfoBox = styled("div")(({ theme }) => ({
  // backgroundColor: theme.palette.othercolor.main,
  justifyContent:"center"
}));