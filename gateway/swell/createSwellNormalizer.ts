import type { ProductData } from 'gateway/swell/types';

export default function createSwellNormalizer() {
  function product(response): ProductData {
    const { price, origPrice, name } = response;

    return {
      name,
      price,
      origPrice,
      pctPriceDifference: calculatePctDifference({ price, origPrice }),
    };
  }

  return {
    product,
  };
}

type Prices = {
  price: number;
  origPrice: number;
};
function calculatePctDifference({ price, origPrice }: Prices) {
  const difference = ((price - origPrice) / origPrice) * 100;

  return Math.round((difference + Number.EPSILON) * 100) / 100;
}
