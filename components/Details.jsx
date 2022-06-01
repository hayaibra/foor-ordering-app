import {
  Dialog,
  TextareaAutosize,
  TextField,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { sorting } from "../app/store/Data";
import { useState } from "react";

const Label = styled("label")(({ theme }) => ({
  color: theme.palette.othercolor.main,
  fontSize: "12px",
  marginBottom: "10px",
}));

export default function Details({ open, total, setOpen }) {
  const [cutomerName, setCutomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] =useState(1);
  const [finalTotal, setfinalTotal] = useState(total);
  const [bill, setBill] = useState([]);


  const dispatch = useDispatch();

  const handleClick = () => {
    setId((prevId) => prevId + 1);
    setOpen(false);
    dispatch(
      sorting({
        ...Details,
        cutomerName,
        phoneNumber,
        address,
        id,
        finalTotal,
        bill,
      })
    );
  };
  return (
    <>
      <Dialog open={open} onClose={(e) => setOpen(false)}>
        <Box sx={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <Typography fontWeight="bold" mb={3}>
            You Will Pay {total} SPY after Delivery
          </Typography>
          <TextField
            label="Name"
            variant="standard"
            color="othercolor"
            type="text"
            focused
            sx={{ marginBottom: "30px" }}
            onChange={(e) => setCutomerName(e.target.value)}
          />
          <TextField
            label="Phone Number"
            variant="standard"
            color="othercolor"
            focused
            type="tel"
            sx={{ marginBottom: "30px" }}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Label>Address</Label>
          <TextareaAutosize
            aria-label="Address"
            placeholder="Your Address"
            color="othercolor"
            focused
            minRows={5}
            id="Address"
            onChange={(e) => setAddress(e.target.value)}
          />

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Link href="/orders" passHref>
              <Button
                color="othercolor"
                variant="contained"
                onClick={handleClick}
              >
                order
              </Button>
            </Link>
          </div>
        </Box>
      </Dialog>
    </>
  );
}
