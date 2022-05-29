import { products } from "../../../products";

export default function handler(req, res) {
  let id = req.query.id;
  let product = products.find((p) => p.id == id);


  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ error: "there is no product" });
  }
}
