import {
  Box,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

function OrderLog() {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("product"));

    if (data) {
      setUserData(data);
    }
  }, []);

  return (
    <Box >
      <TableContainer
        sx={{
          flex: 2,
          padding: "60px ",
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
              <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.length > 0 &&
              userData.map((row) => (
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
                  <TableCell>{row.date}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default OrderLog;
