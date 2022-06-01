import React from "react";
import Image from "next/image";
import { FeaturesBox, ArrowLeftBox, ArrowRightBox, SliderBox } from "./style";
import { Box } from "@mui/material";

function Feature() {
  const featureArray = ["feature-1.png", "feature-2.png", "feature-3.png"];

  const [index, setindex] = React.useState(0);

  function handleArrowRight() {
    setindex(index !== 2 ? index + 1 : 0);
  }

  function handleArrowLeft() {
    setindex(index !== 0 ? index - 1 : 2);
  }

  return (
    <FeaturesBox>
      <Box position="relative">
        <ArrowLeftBox onClick={() => handleArrowLeft()}>
          <Image
            src={require("../../public/imgs/arrowl.png")}
            width="30"
            height="30"
            alt="leftarrow"
          />
        </ArrowLeftBox>
        <SliderBox sx={{ transform: `translateX(${-100 * index}vw)` }}>
          {featureArray.map((feature, i) => (
            <Box
              sx={{
                padding: "10px 50px",
                width: "100vw",
                height: "100%",
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
              key={i}
            >
              <Image
                src={require(`../../public/imgs/${feature}`)}
                objectFit="contain"
                alt={feature}
              />
            </Box>
          ))}
        </SliderBox>
        <ArrowRightBox onClick={() => handleArrowRight()}>
          <Image
            src={require("../../public/imgs/arrowr.png")}
            width="30"
            height="30"
            alt="rightarrow"
          />
        </ArrowRightBox>
      </Box>
    </FeaturesBox>
  );
}

export default Feature;
