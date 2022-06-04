import Head from "next/head";
import Feature from "../components/features/Feature";
import OurRest from "../components/footer/OurRest";
import PizzaList from "../components/pizzalist/PizzaList";
import { useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  function fetchWithAutoRetry(fetcher, maxRetryCount) {
    return new Promise((resolve, reject) => {
      let retries = 0;
      const caller = () =>
        fetcher()
          .then((data) => {
            resolve(data);
          })
          .catch((error) => {
            if (retries < maxRetryCount) {
              retries++;
              caller();
            } else {
              reject(error);
            }
          });
      retries = 1;
      caller();
    });
  }

  const fetchproducts = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    setProducts(data);
    return data;
  };

  fetchWithAutoRetry(fetchproducts, 5);

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
