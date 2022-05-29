import { styled, Typography } from "@mui/material";

export const PizzaListBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.othercolor.main,
  // position: "relative",
  // top: "-5px",
  padding: "60px 0 ",
}));

export const Price = styled(Typography)(({ theme }) => ({
  color: theme.palette.othercolor.main,
}));
