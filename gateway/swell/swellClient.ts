import swell from 'swell-js';

const options = {
  useCamelCase: true,
};

swell.init('shipsix', 'pk_X5tgQqmxhH6T9VyQCMkqKFsFOHH6eud5', options);

export default function swellClient() {
  return swell;
}
