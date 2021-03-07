import { GetStaticProps } from 'next';

import type { ProductData } from 'gateway/swell/types';
import createSwellGateway from 'gateway/swell/createSwellGateway';

import IndexEntry from 'app/IndexEntry';

type HomeProps = {
  productData: ProductData;
};
export default function Home({ productData }: HomeProps) {
  return <IndexEntry productData={productData} />;
}

const swellGateway = createSwellGateway();

export const getStaticProps: GetStaticProps = async () => {
  const productData = await swellGateway.lookupProduct(
    'red-bull-sugar-free-8-6fl-oz'
  );

  return {
    props: {
      productData,
    },
  };
};
