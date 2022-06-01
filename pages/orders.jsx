import {
  Alert,
  Box,
  Button,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../app/store/Data";
import { resett } from "../app/store/Cart";
import { useState } from "react";

const cartFromLocalStorage = JSON.parse(
  localStorage.getItem("product") || "[]"
);

function Order() {
  const orders = useSelector((state) => state.data.info);
  const [paid, setPaid] = useState(true);
  let d = useSelector((state) => state.cart.product);
  const [product, setProduct] = useState([...cartFromLocalStorage, ...d]);
  const dispatch = useDispatch();

  const bill = [];
  {
    orders.map((order) => {
      const finalBill = bill.push(order.finalTotal);
    });
  }

  const handleClick = () => {
    setPaid(false);
    dispatch(reset());
    dispatch(resett());
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setPaid(true);
  };

  React.useEffect(() => {
    localStorage.setItem("product", JSON.stringify(product));
  }, [product]);

  return (
    <>
      <Box
        sx={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "space-between",
          padding: "30px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ flex: 2 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Order ID</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Customer</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Address</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.cutomerName}</TableCell>
                    <TableCell>{order.address}</TableCell>
                    <TableCell>{order.finalTotal}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ display: "flex", justifyContent: "space-between", my: 5 }}>
            <Box sx={{ textAlign: "center" }}>
              <Image
                src={require("../public/imgs/paid.png")}
                width="30"
                height="30"
                alt="paid"
              />
              <Typography>Payment</Typography>
              <Image
                src={require("../public/imgs/checked.png")}
                width="20"
                height="20"
                alt="checked"
              />
            </Box>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Image
                src={require("../public/imgs/bake.png")}
                width="30"
                height="30"
                alt="bake"
              />
              <Typography>Preparing</Typography>
              <Image
                src={require("../public/imgs/checked.png")}
                width="20"
                height="20"
                alt="checked"
              />
            </Box>
            <Box
              sx={{
                textAlign: "center",
                opacity: "0.3",
              }}
            >
              <Image
                src={require("../public/imgs/bike.png")}
                width="30"
                height="30"
                alt="bike"
              />
              <Typography>On The Way</Typography>
              <Box display="none">
                <Image
                  src={require("../public/imgs/checked.png")}
                  width="20"
                  height="20"
                  alt="checked"
                />
              </Box>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                opacity: "0.3",
              }}
            >
              <Image
                src={require("../public/imgs/delivered.png")}
                width="30"
                height="30"
                alt="delivered"
              />
              <Typography>Delivered</Typography>
              <Box display="none">
                <Image
                  src={require("../public/imgs/checked.png")}
                  width="20"
                  height="20"
                  alt="checked"
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              padding: "20px",
              height: "300px",
              width: "200px",
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
                {bill.length > 0
                  ? bill.reduce((acc, current) => acc + current)
                  : bill[0]}
                SPY
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Discount:</span> 0
              </p>
              <p>
                <span style={{ fontWeight: "bold" }}>Total:</span>
                {bill.length > 0
                  ? bill.reduce((acc, current) => acc + current)
                  : bill[0]}
                SPY
              </p>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant={paid ? "contained" : "disabled"}
                color="success"
                sx={{ marginTop: "20px" }}
                onClick={handleClick}
              >
                PAID
              </Button>
              <Snackbar
                open={!paid}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  severity="success"
                  sx={{
                    width: "100%",
                  }}
                >
                  successfuly !
                </Alert>
              </Snackbar>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Order;
