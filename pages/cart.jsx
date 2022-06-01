import React from "react";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import Details from "../components/Details";
import { useState } from "react";

function Cart() {
  const cart = useSelector((state) => state.cart);

  const total =
    cart.finalTotal.length > 0
      ? cart.finalTotal.reduce((acc, current) => acc + current)
      : cart.finalTotal[0];

  let discount = "0";
  if (cart.product.length <= 3) {
    discount = "10%";
  } else if (cart.product.length <= 6) {
    discount = "30%";
  } else {
    discount = "50%";
  }

  let finalBill = 0;
  if (discount == "10%") {
    finalBill = total * 0.1;
  } else if (discount == "30%") {
    finalBill = total * 0.3;
  } else {
    finalBill = total * 0.5;
  }
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        marginTop="100px"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "40px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box>
          <TableContainer
            sx={{
              flex: 2,
            }}
            component={Paper}
            elevation={0}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Product</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Extras</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Quantity</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.product.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Image
                        src={row.img}
                        width="70"
                        height="70"
                        alt={row.name}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography color="error">{row.name}</Typography>
                    </TableCell>
                    <TableCell>
                      {row.extras.map((extra) => (
                        <span key={extra.id}>{extra},</span>
                      ))}
                    </TableCell>
                    <TableCell>{row.price} SPY</TableCell>
                    <TableCell>{row.quantity}</TableCell>
                    <TableCell>{row.price * row.quantity}SPY</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              padding: "20px",
              height: "350px",
              width: "300px",
              marginTop: { xs: "30px", md: 0 },
            }}
            component={Paper}
            elevation={5}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ marginBottom: "40px" }}
            >
              CART TOTAL
            </Typography>
            <Box>
              <p>
                <span style={{ fontWeight: "bold" }}>Subtotal:</span>
                {total}
                SPY
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Discount:{discount}</span>
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Total:</span>
                {finalBill}
                SPY
              </p>
            </Box>
            <Box>
              <Button
                variant="contained"
                color="othercolor"
                sx={{ marginTop: "20px", width: "100%", marginBottom: "10px" }}
                onClick={() => setOpen(true)}
              >
                CHECKOUT NOW !
              </Button>
            </Box>
          </Box>
        </Box>
        {open && <Details open={open} total={finalBill} setOpen={setOpen} />}
      </Box>
    </>
  );
}

export default Cart;
