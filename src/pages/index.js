import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* ---- TO BEGIN, delete this section and GET CODING!!! ---- */}
     
      <Header />

      <main className="mx-auto max-w-screen-2xl">

         {/* banner */}

         <Banner />

          {/* feed */}

        <ProductFeed products={products} />
       

      </main>
      {/* ---- ---- */}
    </div>
  );
}

export async function getServerSideProps(context) {

  const products= await fetch('https://fakestoreapi.com/products')
  .then((res)=>res.json())


  return {
    props:{
      products
    }
  }

}