export default function groceriesList() {
  const array = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  const map = array.reduce(
    (acc, pair) => acc.set(pair[0], pair[1]),
    new Map(),
  );
  return map;
}
