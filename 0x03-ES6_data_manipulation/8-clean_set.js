export default function cleanSet(set, startString) {
  if (startString === '' || !startString || !(set instanceof Set)) {
    return '';
  }
  const results = [];
  for (const item of set) {
    if (item.startsWith(startString, 0)) {
      results.push(item.substring(startString.length));
    }
  }
  return results.join('-');
}
