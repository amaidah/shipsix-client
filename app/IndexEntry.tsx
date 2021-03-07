import Head from 'next/head';

export default function Home({ productData }) {
  console.log(productData);

  return (
    <div>
      <Head>
        <title>ShipSix | </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      shipsix-client
      <br />
      <br />
      <br />
      <div>{productData.name}</div>
    </div>
  );
}
