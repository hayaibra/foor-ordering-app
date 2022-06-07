import React from "react";
import { AppBar, Box, Stack, Avatar, Badge, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ToolbarBox } from "./Style";
import { useSelector, useDispatch } from "react-redux";
import { zero } from "../../app/store/Counter";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function Navbar() {
  const globalState = useSelector((state) => state);
  const counter = globalState.counter.value;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [translate, setTranslate] = useState(100);

  function handleClick() {
    setOpen(!open);
    setTranslate(0);
  }

  return (
    <>
      <AppBar position="sticky" color="othercolor" elevation={0}>
        <ToolbarBox>
          <Image
            src={require("../../public/imgs/logo.png")}
            width="200"
            height="30"
            alt="logo"
          />

          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Link href="/" passHref>
              <a style={{ textDecoration: "none", color: "white" }}>HomePage</a>
            </Link>
            <a href="#p" style={{ textDecoration: "none", color: "white" }}>
              Products
            </a>
            <Link href="/orderLog" passHref>
              <a style={{ textDecoration: "none", color: "white" }}>Orders</a>
            </Link>
            <Link href="/orders" passHref>
              <a style={{ textDecoration: "none", color: "white" }}>Payment</a>
            </Link>
            <Link href="/" passHref>
              <a style={{ textDecoration: "none", color: "white" }}>Blog</a>
            </Link>
            <a
              href="#contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              Contacts
            </a>
          </Stack>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Link href="/cart" passHref>
              <div onClick={() => dispatch(zero(0))}>
                <Badge badgeContent={counter}>
                  <Avatar sx={{ bgcolor: "white", cursor: "pointer" }}>
                    <Image
                      src={require("../../public/imgs/cart.png")}
                      width="20"
                      height="20"
                      alt="cart"
                    />
                  </Avatar>
                </Badge>
              </div>
            </Link>
          </Box>
          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
            <Box marginRight="20px">
              <Link href="/cart" passHref>
                <div onClick={() => dispatch(zero(0))}>
                  <Badge badgeContent={counter}>
                    <Avatar sx={{ bgcolor: "white", cursor: "pointer" }}>
                      <Image
                        src={require("../../public/imgs/cart.png")}
                        width="20"
                        height="20"
                        alt="cart"
                      />
                    </Avatar>
                  </Badge>
                </div>
              </Link>
            </Box>
            <MenuIcon
              sx={{ fontSize: "30px", cursor: "pointer" }}
              onClick={handleClick}
            />
            {open && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "60%",
                  backgroundColor: "#fff",
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  transform: `translateX(${translate}%)`,
                  transition: "0.5s ease-in-out",
                }}
                onClick={() => setOpen(false)}
              >
                <Button
                  variant="contained"
                  color="othercolor"
                  elevation={0}
                  sx={{
                    width: { xs: "100px", sm: "250px" },
                    fontSize: { sm: "20px" },
                    textTransform: "capitalize",
                  }}
                  onClick={() => setOpen(false)}
                >
                  <Link href="/" passHref>
                    <a style={{ textDecoration: "none", color: "white" }}>
                      HomePage
                    </a>
                  </Link>
                </Button>
                <Button
                  variant="contained"
                  color="othercolor"
                  elevation={0}
                  sx={{
                    width: { xs: "100px", sm: "250px" },
                    fontSize: { sm: "20px" },
                    textTransform: "capitalize",
                  }}
                  onClick={() => setOpen(false)}
                >
                  <a
                    href="#p"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Products
                  </a>
                </Button>
                <Button
                  variant="contained"
                  color="othercolor"
                  elevation={0}
                  sx={{
                    width: { xs: "100px", sm: "250px" },
                    fontSize: { sm: "20px" },
                    textTransform: "capitalize",
                  }}
                  onClick={() => setOpen(false)}
                >
                  <Link href="/" passHref>
                    <a style={{ textDecoration: "none", color: "white" }}>
                      Menu
                    </a>
                  </Link>
                </Button>
                <Button
                  variant="contained"
                  color="othercolor"
                  elevation={0}
                  sx={{
                    width: { xs: "100px", sm: "250px" },
                    fontSize: { sm: "20px" },
                    textTransform: "capitalize",
                  }}
                  onClick={() => setOpen(false)}
                >
                  <Link href="/orders" passHref>
                    <a style={{ textDecoration: "none", color: "white" }}>
                      Orders
                    </a>
                  </Link>
                </Button>
                <Button
                  variant="contained"
                  color="othercolor"
                  elevation={0}
                  sx={{
                    width: { xs: "100px", sm: "250px" },
                    fontSize: { sm: "20px" },
                    textTransform: "capitalize",
                  }}
                  onClick={() => setOpen(false)}
                >
                  <Link href="/" passHref>
                    <a style={{ textDecoration: "none", color: "white" }}>
                      Blogs
                    </a>
                  </Link>
                </Button>
                <Button
                  variant="contained"
                  color="othercolor"
                  elevation={0}
                  sx={{
                    width: { xs: "100px", sm: "250px" },
                    fontSize: { sm: "20px" },
                    textTransform: "capitalize",
                  }}
                  onClick={() => setOpen(false)}
                >
                <a href="#contact" style={{ textDecoration: "none", color: "white" }}>
                Contacts
              </a>
                </Button>
              </Box>
            )}
          </Box>
        </ToolbarBox>
      </AppBar>
    </>
  );
}

export default Navbar;
