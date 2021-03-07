import swellClient from './swellClient';
import createSwellNormalizer from './createSwellNormalizer';

export default function createSwellGateway({
  client = swellClient(),
  normalizer = createSwellNormalizer(),
} = {}) {
  async function lookupProduct(slug: string) {
    const response = await client.products.get(slug);

    return normalizer.product(response);
  }

  return {
    lookupProduct,
  };
}
