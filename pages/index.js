import Head from "next/head";
import Feature from "../components/features/Feature";
import OurRest from "../components/footer/OurRest";
import PizzaList from "../components/pizzalist/PizzaList";

export default function Home({ products }) {
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

export async function getStaticProps() {
  const req = await fetch("http://localhost:3000/api/products");
  const data = await req.json();

  return {
    props: {
      products: data,
    },
  };
}
