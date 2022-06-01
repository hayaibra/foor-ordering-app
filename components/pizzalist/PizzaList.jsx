import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { PizzaListBox } from "./Style";
import Card from "./Card";

function PizzaList({ products }) {
  return (
    <div>
      <PizzaListBox id="p">
        <Typography
          variant="h4"
          color="primary"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "30px", md: "40px" },
            marginTop: "20px",
          }}
          textAlign="center"
        >
          The Best Restaurant Pizza
        </Typography>
        <Container maxWidth="xl">
          <Grid
            container
            spacing={10}
            my={3}
            sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
          >
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </Grid>
        </Container>
      </PizzaListBox>
    </div>
  );
}

export default PizzaList;
