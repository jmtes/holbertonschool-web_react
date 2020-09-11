export default function accessImmutableObject(object, array) {
  let search = object;

  array.forEach((val) => {
    const found = search[val];

    if (!found) return found;
    search = found;
  });

  return search;
}
