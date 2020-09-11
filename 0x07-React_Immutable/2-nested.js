import immutable from 'immutable';

const { Map } = immutable;

export default function accessImmutableObject(object, array) {
  let search = object;

  for (let i = 0; i < array.length; i++) {
    const found = search[array[i]];

    if (!found) return undefined;
    search = found;
  }

  return typeof search === 'object' ? Map(search) : search;
}
