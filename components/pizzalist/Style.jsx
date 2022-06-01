import { styled, Typography } from "@mui/material";

export const PizzaListBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.othercolor.main,
  padding: "60px 0 ",
}));

export const Price = styled(Typography)(({ theme }) => ({
  color: theme.palette.othercolor.main,
}));
