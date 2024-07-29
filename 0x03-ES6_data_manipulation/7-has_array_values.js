export default function hasValuesFromArray(set, array) {
  const sarr = new Set(array);
  return sarr.isSubsetOf(set);
}
