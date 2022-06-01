import {
  Badge,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../app/store/Counter";
import { addProduct } from "../../app/store/Cart";
import { useState } from "react";

const Price = styled("span")(({ theme }) => ({
  color: theme.palette.othercolor.main,
  fontSize: "30px",
  fontWeight: "900",
  [theme.breakpoints.only("md")]: {
    fontSize: "25px",
  },
}));
const AddButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary,
}));

const Check = styled(Checkbox)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    size: "small",
  },
  [theme.breakpoints.up("sm")]: {
    size: "large",
  },
}));

const Form = styled(FormControlLabel)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "16px",
  },
}));

function Product(props) {
  const [price, setPrice] = useState(props.product.price[0]);
  const [size, setSize] = useState(0);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [finalTotal, setFinalTotal] = useState([]);
  const [date, setDate] = useState(new Date());

  const globalState = useSelector((state) => state);

  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const d = props.product.price[sizeIndex] - props.product.price[size];
    setSize(sizeIndex);
    changePrice(d);
  };

  const handleChange = (e, extra) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(extra.price);
      setExtras((prevExtras) => [...prevExtras, extra.text]);
    } else {
      changePrice(-extra.price);
      setExtras((prevExtras) =>
        prevExtras.filter((extra) => extra.id !== extra.id)
      );
    }
  };

  const handleClick = () => {
    dispatch(add(1));
    dispatch(
      addProduct({
        ...props.product,
        extras,
        price,
        quantity,
        finalTotal,
        date,
      })
    );
  };

  return (
    <div>
      <Box
        sx={{
          height: { xs: "155vh", sm: "114vh", md: "90vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "250px", sm: "300px", md: "400px", lg: "500px" },
              height: { xs: "200px", sm: "300px", md: "400px", lg: "500px" },
            }}
            key={props.product.id}
          >
            <Image
              src={props.product.img}
              fitobject="fill"
              alt={props.product.name}
            />
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "start" },
          }}
        >
          <Typography
            fontWeight="800"
            marginBottom={3}
            sx={{
              fontSize: { xs: "30px", sm: "40px", md: "33px", lg: "45px" },
            }}
          >
            {props.product.name}
          </Typography>
          <Price id="price" name="price">
            {price} SPY
          </Price>
          <Typography
            my={3}
            sx={{
              padding: "16px 16px 16px 0",
              fontSize: { md: "15px", lg: "18px" },
            }}
          >
            {props.product.desc}
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            Choose the size
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
              marginTop: "30px",
              width: { xs: "100%", lg: "70%" },
            }}
          >
            <Badge
              badgeContent={"small"}
              color="error"
              onClick={() => handleSize(0)}
              sx={{ cursor: "pointer", marginRight: "100px" }}
            >
              <Image
                src={require("../../public/imgs/size.png")}
                width="30"
                height="30"
                alt="size"
              />
            </Badge>
            <Badge
              badgeContent={"medium"}
              color="error"
              onClick={() => handleSize(1)}
              sx={{ cursor: "pointer", marginRight: "100px" }}
            >
              <Image
                src={require("../../public/imgs/size.png")}
                width="40"
                height="40"
                alt="size"
              />
            </Badge>
            <Badge
              badgeContent={"large"}
              color="error"
              onClick={() => handleSize(2)}
              sx={{ cursor: "pointer" }}
            >
              <Image
                src={require("../../public/imgs/size.png")}
                width="50"
                height="50"
                alt="size"
              />
            </Badge>
          </Box>
          <Typography variant="h5" fontWeight="bold" my={3}>
            Choose additional ingredients
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: { xs: "100%", md: "90%" },
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "flex-start",
              alignItems: { xs: "flex-start", md: "none" },
              paddingLeft: { xs: "100px", sm: "0" },
            }}
          >
            {props.product.extras.type.map((extra) => (
              <Form
                key={extra.id}
                control={
                  <Check
                    icon={<CheckBoxOutlineBlankIcon />}
                    checkedIcon={<CheckBoxIcon />}
                    color="error"
                    id={extra.text}
                    name={extra.text}
                    onChange={(e) => handleChange(e, extra)}
                  />
                }
                label={extra.text}
              />
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              marginBottom: "40px",
              mt: { xs: "35px", sm: "40px" },
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <TextField
              type="number"
              defaultValue={quantity}
              variant="outlined"
              color="error"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <AddButton
              variant="contained"
              color="othercolor"
              onClick={handleClick}
            >
              Add to Card
            </AddButton>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Product;

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/products/${params.id}`);
  const product = await res.json();

  return {
    props: { product },
  };
}

export async function getStaticPaths() {
  const req = await fetch("http://localhost:3000/api/products");
  const data = await req.json();

  const paths = data.map((product) => ({
    params: { id: `${product.id}` },
  }));

  return {
    paths,
    fallback: false,
  };
}
