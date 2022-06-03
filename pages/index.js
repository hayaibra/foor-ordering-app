import Head from "next/head";
import Feature from "../components/features/Feature";
import OurRest from "../components/footer/OurRest";
import PizzaList from "../components/pizzalist/PizzaList";
import { useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchproducts = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    setProducts(data);
  };

  fetchproducts();

  return (
    <div>
      <Head>
        <title>Pizza Restaurant in Latakia</title>
        <meta name="description" content="best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feature />
      <PizzaList products={products} />
      <OurRest />
    </div>
  );
}
