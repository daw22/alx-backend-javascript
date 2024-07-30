export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || !(startString instanceof String)) {
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
