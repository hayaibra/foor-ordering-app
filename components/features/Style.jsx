import { styled } from "@mui/material";

export const FeaturesBox = styled("div")({
  position: "relative",
  overflow: "hidden",
  padding:"60px 0"
});

export const SliderBox = styled("div")({
  width: "300vw",
  height: "100%",
  display: "flex",
  transition: "all 1.5s ease-in-out",
});

export const ArrowLeftBox = styled("div")(({ theme }) => ({
  width: "40px",
  height: "40px",
  backgroundColor: theme.palette.othercolor.main,
  borderRadius: "50%",
  position: "absolute",
  top: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transform: "translateY(-50%)",
  left: "20px",
  cursor: "pointer",
  zIndex: "1000",
}));

export const ArrowRightBox = styled("div")(({ theme }) => ({
  width: "40px",
  height: "40px",
  backgroundColor: theme.palette.othercolor.main,
  borderRadius: "50%",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  right: "20px",
  cursor: "pointer",
}));
